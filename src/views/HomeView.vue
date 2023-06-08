<script setup>
import Carrousel from "../components/Carrousel.vue";
import Contact from "../components/Contact.vue";
import HomeCard from "../components/HomeCard.vue";

const cards = [
  { name: "Apéros", color: "bg-yellow-400", route: "Aperos" },
  { name: "Entrées", color: "bg-orange-500", route: "Entrees" },
  { name: "Plats", color: "bg-emerald-600", route: "Plats" },
  { name: "Desserts", color: "bg-stone-400", route: "Desserts" },
  { name: "Cocktails", color: "bg-red-600", route: "Cocktails" },
];
</script>

<template>
  <Contact />
  <Carrousel />
  <div class="flex justify-center">
    <div class="flex flex-wrap">
      <HomeCard v-for="card in cards" :card="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
