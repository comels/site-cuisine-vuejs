<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import FormRecette from "./FormRecette.vue";

const searchResult = ref("");
const selectedRecette = ref(props.allRecettes);
const show = ref(false);

const showAddForm = () => {
  show.value = !show.value;
};

watch(searchResult, () => {
  selectedRecette.value = props.allRecettes.filter((recette) =>
    recette.name.toLowerCase().includes(searchResult.value.toLowerCase())
  );
});

const props = defineProps({
  allRecettes: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-12">
    <div class="flex gap-4 mr-28 my-7 justify-end">
      <!-- input search -->
      <div class="border-b border-stone-300">
        <input
          v-if="!show"
          v-model="searchResult"
          class="cursor-pointer pl-0 appearance-none bg-transparent border-none text-stone-700 placeholder-stone-400 rounded-md py-2 focus:ring-transparent focus:border-stone-500"
          type="text"
          placeholder="Recherche..."
        />
      </div>
      <!-- button ajouter une recette -->
      <button
        v-if="!show"
        class="font-roboto py-2 px-6 font-normal text-white bg-stone-400 hover:bg-stone-500 rounded-md text-2xl cursor-pointer transition duration-500 ease-in-out"
        @click="showAddForm"
      >
        +
      </button>
      <button
        v-if="show"
        class="font-roboto py-2 px-6 font-normal text-white bg-stone-400 hover:bg-stone-500 rounded-md text-2xl cursor-pointer transition duration-500 ease-in-out"
        @click="showAddForm"
      >
        x
      </button>
    </div>
    <FormRecette v-if="show" @close-form="showAddForm" />
    <!-- all recettes -->
    <div class="md:mx-20 mx-10 grid grid-cols-2 md:grid-cols-4 gap-3">
      <RouterLink
        v-for="recette in selectedRecette"
        :allRecettes="props.allRecettes"
        :key="type + recette.id"
        :to="`/recettes/${type}/${recette.name}`"
      >
        <div>
          <img
            class="h-auto m-auto max-h-[250px] max-w-full rounded-lg"
            :src="recette.image"
            :alt="recette.name"
          />
          <h2
            class="font-montserrat font-light hover:font-semibold text-lg mt-2 text-center cursor-pointer"
          >
            {{ recette.name.toUpperCase() }}
          </h2>
        </div></RouterLink
      >
    </div>
  </div>
</template>
