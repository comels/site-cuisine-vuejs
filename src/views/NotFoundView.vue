<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section
    class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100"
  >
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold mb-10 md:text-3xl">
          Désolé, cette page n'existe pas.
        </p>
        <RouterLink to="/">
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-titre focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2"
          >
            Acceuil
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
