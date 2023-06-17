<script setup>
import Apercu from "../components/Apercu.vue";
import axios from "axios";

const type = "cocktails";

const getRecetteData = async () => {
  try {
    const allRecettes = await axios.get("http://localhost:5000/recette");

    return allRecettes;
  } catch (err) {
    console.log(err);
  }
};

const allRecettes = await getRecetteData();
const selectedRecette = allRecettes.data.filter((r) => r.type === "plats");
</script>

<template>
  <Apercu :type="type" :allRecettes="selectedRecette" />
</template>
