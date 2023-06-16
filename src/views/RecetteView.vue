<script setup>
import { useRoute } from "vue-router";
import recettes from "../data/recettes.json";
import { ref } from "vue";

const route = useRoute();
const recetteType = route.params.type;
const recetteName = route.params.name;

const type = recettes.find((t) => t.name === recetteType);
const recette = type.recettes.find((r) => r.name === recetteName);

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
          v-for="ingredient in recette.ingredients"
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
        <li class="mb-2" v-for="step in recette.instructions" :key="step">
          {{ step }}
        </li>
      </ol>
    </div>
    <img
      class="w-9/12 mx-10 mb-10 max-w-lg h-full object-contain"
      src="https://i.pinimg.com/564x/ba/83/f0/ba83f0f2625ad80976aece281b8a5b65.jpg"
      :alt="recette.name"
    />
  </div>
</template>
