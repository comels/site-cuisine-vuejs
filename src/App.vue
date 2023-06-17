<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div>
    <Suspense>
      <RouterView />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  letter-spacing: 0.04em;
}
</style>
