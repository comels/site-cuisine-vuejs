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
  <div class="flex flex-wrap justify-center">
    <RouterLink
      v-for="recette in allRecettes.recettes"
      :key="type + recette.id"
      :to="`/recettes/${type}/${recette.name}`"
    >
      <div class="p-3">
        <img
          class="w-64 h-64 object-cover cursor-pointer"
          src="https://i.pinimg.com/564x/c0/79/a4/c079a4b1c1819f37cbcf21dfc5427f65.jpg"
          :alt="recette.name"
        />
        <h2
          class="font-roboto font-light hover:text-yellow-400 text-2xl mt-2 text-center cursor-pointer"
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
