<script setup>
import { reactive, ref } from "vue";
import IngredientCreator from "./IngredientCreator.vue";
import InstructionCreator from "./InstructionCreator.vue";
import IngredientItem from "./IngredientItem.vue";
import InstructionItem from "./InstructionItem.vue";
import { uid } from "uid";
import axios from "axios";

const ingredientList = ref([]);
const instructionList = ref([]);
const urlRecette = ref("");
const recetteName = ref("");
const numberPers = ref("");
const selectedType = ref("");

const recette = reactive({
  type: selectedType,
  name: recetteName,
  count: numberPers,
  ingredient: ingredientList,
  instruction: instructionList,
  image: urlRecette,
});

const emit = defineEmits(["close-form"]);

const addRecette = async () => {
  try {
    await axios.post("http://localhost:5000/recette", recette);

    (recette.type = ""),
      (recette.name = ""),
      (recette.count = ""),
      (recette.ingredient = []),
      (recette.instruction = []),
      (recette.image = "");
  } catch (error) {
    // Gérez les erreurs de la requête ici
    console.log(error);
  }
  emit("close-form");
};

const createInstruction = (instruction) => {
  instructionList.value.push({
    id: uid(),
    instruction,
  });
};

const deleteInstruction = (instructionId) => {
  instructionList.value = instructionList.value.filter(
    (instruction) => instruction.id !== instructionId
  );
};

const toggleEditInstruction = (instructionPos) => {
  instructionList.value[instructionPos].isEditing =
    !instructionList.value[instructionPos].isEditing;
};

const updateInstruction = (instructionVal, instructionPos) => {
  instructionList.value[instructionPos].instruction = instructionVal;
};

const createIngredient = (ingredient) => {
  ingredientList.value.push({
    id: uid(),
    name: ingredient.name,
    quantity: ingredient.quantity,
    measure: ingredient.measure,
  });
};

const deleteIngredient = (ingredientId) => {
  ingredientList.value = ingredientList.value.filter(
    (ingredient) => ingredient.id !== ingredientId
  );
};
</script>

<template>
  <main class="bg-stone-100">
    <div class="flex flex-col max-w-lg w-full mb-20 mx-auto py-10">
      <!-- Input Nom de la recette -->
      <input
        class="border-none w-full mb-10 py-4 placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
        v-model="recetteName"
        type="text"
        placeholder="Nom de la recette"
      />
      <select
        class="border-none w-full mb-10 py-4 text-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
        v-model="selectedType"
      >
        <option value="" disabled selected>Choisir une catégorie</option>
        <option value="aperos">Apéros</option>
        <option value="entrees">Entrées</option>
        <option value="plats">Plats</option>
        <option value="desserts">Desserts</option>
        <option value="cocktails">Cocktails</option>
      </select>
      <!-- Input Nombre de personne -->
      <input
        class="border-none w-full mb-10 py-4 placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
        v-model="numberPers"
        type="number"
        placeholder="Recette pour combien de personnes ?"
      />
      <!-- Input Ingrédients -->
      <IngredientCreator @create-ingredient="createIngredient" />
      <ul v-if="ingredientList.length > 0" class="flex flex-col mt-6 gap-3">
        <IngredientItem
          v-for="(ingredient, index) in ingredientList"
          :ingredient="ingredient"
          :index="index"
          @delete-ingredient="deleteIngredient"
        />
      </ul>
      <!-- Input Instructions -->
      <InstructionCreator @create-instruction="createInstruction" />
      <ul v-if="instructionList.length > 0" class="flex flex-col mt-6 gap-3">
        <InstructionItem
          v-for="(instruction, index) in instructionList"
          :instruction="instruction"
          :index="index"
          @delete-instruction="deleteInstruction"
          @edit-instruction="toggleEditInstruction"
          @update-instruction="updateInstruction"
        />
      </ul>
      <!-- Input URL -->
      <input
        class="border-none w-full mt-10 py-4 placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
        v-model="urlRecette"
        type="url"
        placeholder="URL de la photo de la recette"
      />
      <button
        class="font-roboto mt-10 py-4 px-4 max-w-xs font-semibold text-white bg-stone-400 hover:bg-stone-500 rounded-md text-lg cursor-pointer transition duration-500 ease-in-out"
        @click="addRecette"
      >
        Ajouter la recette
      </button>
    </div>
  </main>
</template>
