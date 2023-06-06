<script setup>
import recettesData from "../data/recettes.json";
import Apercu from "../components/Apercu.vue";

const allRecettes = recettesData.find((r) => r.name === "Apéros");
const type = "Apéros";
</script>

<template>
  <Apercu :allRecettes="allRecettes" :type="type" />
</template>

<style lang="scss" scoped></style>
