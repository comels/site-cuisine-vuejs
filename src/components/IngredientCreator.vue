<script setup>
import { reactive } from "vue";

const emit = defineEmits(["create-ingredient"]);

const ingredientState = reactive({
  ingredient: {
    name: "",
    quantity: "",
    measure: "",
  },
  invalid: null,
  errMsg: "",
});

const createIngredient = () => {
  ingredientState.invalid = null;
  if (ingredientState.ingredient.name !== "") {
    emit("create-ingredient", ingredientState.ingredient);
    ingredientState.ingredient.name = "";
    ingredientState.ingredient.quantity = "";
    ingredientState.ingredient.measure = "";
    return;
  }
  ingredientState.invalid = true;
  ingredientState.errMsg = "Texte manquant !";
};
</script>

<template>
  <!-- input ingrédient -->

  <div class="flex justify-center gap-2">
    <input
      class="border-none w-24 placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
      type="text"
      placeholder="Quantité"
      v-model="ingredientState.ingredient.quantity"
      required
    />
    <input
      class="border-none w-24 placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
      type="text"
      placeholder="Unité"
      v-model="ingredientState.ingredient.measure"
      required
    />
    <input
      class="border-none placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
      type="text"
      placeholder="Ingrédient"
      @keyup.enter="createIngredient"
      v-model="ingredientState.ingredient.name"
      required
    />
    <button
      class="font-roboto py-4 px-6 font-semibold text-white bg-stone-400 hover:bg-stone-500 rounded-md text-lg cursor-pointer transition duration-500 ease-in-out"
      @click="createIngredient"
    >
      Ajouter
    </button>
  </div>
  <p
    v-show="ingredientState.invalid"
    class="mt-6 text-sm text-center text-stone-600"
  >
    {{ ingredientState.errMsg }}
  </p>
</template>
