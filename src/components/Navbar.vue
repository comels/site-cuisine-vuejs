<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="bg-white my-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img class="h-16 w-16 mr-1" src="../assets/logo.png" alt="" />
          <router-link
            to="/"
            class="tracking-wider font-titre text-black text-5xl font-bold"
            >Almeko</router-link
          >
        </div>
        <!-- Menu Burger pour mobile -->
        <div class="-mr-2 flex items-center md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            type="button"
            class="text-black focus:outline-none focus:ring-white"
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
            class="text-black font-montserrat font-light hover:font-semibold px-2 py-2 text-sm"
            >APÉROS</router-link
          >
          <router-link
            to="/entrees"
            class="text-black font-montserrat font-light hover:font-semibold px-2 py-2 text-sm"
            >ENTRÉES</router-link
          >
          <router-link
            to="/plats"
            class="text-black font-montserrat font-light hover:font-semibold px-2 py-2 text-sm"
            >PLATS</router-link
          >
          <router-link
            to="/desserts"
            class="text-black font-montserrat font-light hover:font-semibold px-2 py-2 text-sm"
            >DESSERTS</router-link
          >
          <router-link
            to="/cocktails"
            class="text-black font-montserrat font-light hover:font-semibold px-2 py-2 text-sm"
            >COCKTAILS</router-link
          >
        </div>
      </div>
    </div>
    <!-- Menu déroulant mobile -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >ACCUEUIL</router-link
        >
        <router-link
          to="/aperos"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >APÉROS</router-link
        >
        <router-link
          to="/entrees"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >ENTRÉES</router-link
        >
        <router-link
          to="/plats"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >PLATS</router-link
        >
        <router-link
          to="/desserts"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >DESSERTS</router-link
        >
        <router-link
          to="/cocktails"
          class="text-black font-montserrat font-light hover:font-semibold block px-3 py-2"
          @click="isMenuOpen = !isMenuOpen"
          >COCKTAILS</router-link
        >
      </div>
    </div>
  </nav>
</template>
