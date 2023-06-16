<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";

const searchResult = ref("");
const selectedRecette = ref(props.allRecettes.recettes);

watch(searchResult, () => {
  selectedRecette.value = props.allRecettes.recettes.filter((recette) =>
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
  <div class="bg-stone-100 w-screen h-screen">
    <!-- input search -->
    <div class="m-auto py-10 w-96">
      <div class="relative">
        <div class="absolute left-0 inset-y-0 pl-3 flex items-center">
          <svg
            class="fill-current h-6 w-6 text-stone-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          v-model="searchResult"
          class="w-full border-none text-stone-700 capitalize placeholder-stone-300 rounded-lg pl-12 pr-4 py-2 focus-within:shadow-lg focus:ring-transparent focus:border-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
    <!-- all recettes -->
    <div class="md:mx-20 mx-10 grid grid-cols-2 md:grid-cols-4 gap-3">
      <RouterLink
        v-for="recette in selectedRecette"
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
