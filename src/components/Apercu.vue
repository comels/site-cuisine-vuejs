<script setup>
import { RouterLink } from "vue-router";

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
  <!-- <div class="pl-28 pr-20 flex flex-wrap">
    <RouterLink
      v-for="recette in allRecettes.recettes"
      :key="type + recette.id"
      :to="`/recettes/${type}/${recette.name}`"
    >
      <div class="p-3">
        <img
          class="w-64 h-64 object-cover cursor-pointer"
          src="https://i.pinimg.com/564x/ba/83/f0/ba83f0f2625ad80976aece281b8a5b65.jpg"
          :alt="recette.name"
        />
        <h2
          class="font-roboto font-normal hover:text-yellow-400 text-xl mt-2 text-center cursor-pointer"
        >
          {{ recette.name }}
        </h2>
      </div></RouterLink
    >
  </div> -->
  <div class="mx-24 grid grid-cols-2 md:grid-cols-4 gap-4">
    <RouterLink
      v-for="recette in allRecettes.recettes"
      :key="type + recette.id"
      :to="`/recettes/${type}/${recette.name}`"
    >
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://i.pinimg.com/564x/ba/83/f0/ba83f0f2625ad80976aece281b8a5b65.jpg"
          :alt="recette.name"
        />
        <h2
          class="font-roboto font-normal hover:text-yellow-400 text-xl mt-2 text-center cursor-pointer"
        >
          {{ recette.name }}
        </h2>
      </div></RouterLink
    >
  </div>
</template>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
