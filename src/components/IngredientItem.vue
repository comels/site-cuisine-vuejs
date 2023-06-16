<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  ingredient: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
defineEmits(["delete-ingredient"]);
</script>

<template>
  <!-- liste des ingrédients -->
  <li
    class="rounded-md items-center gap-7 bg-white px-3 py-4 flex text-stone-600"
  >
    <div class="flex-1 text-lg">
      <span class="text-base">
        {{ ingredient.quantity }}
        {{ ingredient.measure.toLowerCase() }}
        {{ ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1) }}
      </span>
    </div>
    <div class="flex gap-2">
      <Icon
        icon="ph:trash"
        class="icon cursor-pointer"
        color="f95e5e"
        width="22"
        @click="$emit('delete-ingredient', ingredient.id)"
      />
    </div>
  </li>
</template>
