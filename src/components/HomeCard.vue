<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const color = props.card.color;
</script>

<template>
  <RouterLink :to="card.route"
    ><div class="p-6 m-4 max-w-xs rounded overflow-hidden shadow-lg">
      <div class="h-32 w-32" :class="[color]"></div>
      <div class="pt-4">
        <div class="font-titre text-2xl">{{ card.name }}</div>
      </div>
    </div></RouterLink
  >
</template>

<style lang="scss" scoped></style>
