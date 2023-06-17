<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";

const route = useRoute();
const recetteName = route.params.name;

const getRecetteData = async () => {
  try {
    const allRecettes = await axios.get("http://localhost:5000/recette");

    return allRecettes;
  } catch (err) {
    console.log(err);
  }
};

const allRecettes = await getRecetteData();

const recette = allRecettes.data.find((r) => r.name === recetteName);

const count = ref(recette.count);

const formattedNumber = (number) => {
  const roundedNumber = parseFloat(number.toFixed(1));
  return parseInt(roundedNumber) === roundedNumber
    ? roundedNumber.toFixed(0)
    : roundedNumber.toFixed(1);
};

const increaseCount = () => {
  count.value = count.value + 1;
};
const decreaseCount = () => {
  if (count.value > 1) {
    count.value = count.value - 1;
  }
};
</script>

<template>
  <h2 class="text-center text-2xl font-montserrat font-semibold my-20">
    {{ recette.name.toUpperCase() }}
  </h2>
  <div
    class="mt-5 flex-wrap justify-center font-roboto font-light flex mx-auto overflow-hidden"
  >
    <div class="p-5">
      <h4 class="text-xl font-montserrat font-semibold">INGRÉDIENTS :</h4>
      <div class="mb-9 mt-3 flex items-center">
        <button
          @click="decreaseCount"
          class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 focus:outline-none"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path>
          </svg>
        </button>
        <span class="mx-2 text-base font-light">{{ count }} pers.</span>
        <button
          @click="increaseCount"
          class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 focus:outline-none"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="list-none text-lg mb-9">
        <li
          class="mb-2"
          v-for="ingredient in recette.ingredient"
          :key="ingredient"
        >
          <div v-if="ingredient.quantity">
            {{
              formattedNumber(
                (ingredient.quantity * count.valueOf()) / recette.count
              ) +
              " " +
              ingredient.measure +
              " " +
              ingredient.name
            }}
          </div>
          <div v-else>
            {{ ingredient.name }}
          </div>
        </li>
      </ul>
      <h4 class="text-xl font-montserrat font-semibold mb-5">INSTRUCTIONS :</h4>
      <ol class="list-decimal mb-10 max-w-sm text-lg pl-6">
        <li class="mb-2" v-for="step in recette.instruction" :key="step">
          {{ step.instruction }}
        </li>
      </ol>
    </div>
    <img
      class="w-[30%] mx-10 mb-10 max-w-lg rounded-lg h-full object-contain"
      :src="recette.image"
      :alt="recette.name"
    />
  </div>
</template>
