<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-white pb-8 my-7">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-16 w-16 mr-1" src="../assets/logo.png" alt="" />
          <router-link to="/" class="text-black text-5xl font-bold"
            >Almeko</router-link
          >
        </div>

        <!-- Menu Burger pour mobile -->
        <div class="-mr-2 flex items-center md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="text-black hover:text-yellow-400 focus:outline-none focus:ring-white"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Liens de navigation -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <router-link
            to="/aperos"
            class="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-2xl font-medium"
            >Apéros</router-link
          >
          <router-link
            to="/entrees"
            class="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-2xl font-medium"
            >Entrées</router-link
          >
          <router-link
            to="/plats"
            class="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-2xl font-medium"
            >Plats</router-link
          >
          <router-link
            to="/desserts"
            class="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-2xl font-medium"
            >Desserts</router-link
          >
          <router-link
            to="/cocktails"
            class="text-black hover:text-yellow-400 px-3 py-2 rounded-md text-2xl font-medium"
            >Cocktails</router-link
          >
        </div>
      </div>
    </div>

    <!-- Menu déroulant mobile -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Accueil</router-link
        >
        <router-link
          to="/aperos"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Apéros</router-link
        >
        <router-link
          to="/entrees"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Entrées</router-link
        >
        <router-link
          to="/plats"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Plats</router-link
        >
        <router-link
          to="/desserts"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Desserts</router-link
        >
        <router-link
          to="/cocktails"
          class="text-black hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
          @click="isMenuOpen = !isMenuOpen"
          >Cocktails</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
* {
  font-family: "Bebas Neue", sans-serif;
}
</style>
