<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  instruction: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
defineEmits(["delete-instruction", "edit-instruction"]);
</script>

<template>
  <!-- liste des instructions -->
  <li
    class="rounded-md items-center gap-7 bg-white px-3 py-4 flex text-stone-600 transition duration-700 ease-in-out"
  >
    <div class="flex-1 text-lg">
      <input
        class="border-stone-500 px-2 py-2 w-full placeholder-stone-500 focus:border-stone-500 cursor-pointer focus:ring-transparent rounded-md"
        v-if="instruction.isEditing"
        type="text"
        :value="instruction.instruction"
        @input="$emit('update-instruction', $event.target.value, index)"
      />
      <span class="text-base" v-else>
        {{
          instruction.instruction.charAt(0).toUpperCase() +
          instruction.instruction.slice(1)
        }}
      </span>
    </div>
    <div class="flex gap-2">
      <Icon
        v-if="instruction.isEditing"
        icon="ph:check-circle"
        class="icon cursor-pointer"
        color="#78716c"
        width="22"
        @click="$emit('edit-instruction', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        class="icon cursor-pointer"
        color="#78716c"
        width="22"
        @click="$emit('edit-instruction', index)"
      />
      <Icon
        icon="ph:trash"
        class="icon cursor-pointer"
        color="#f87171"
        width="22"
        @click="$emit('delete-instruction', instruction.id)"
      />
    </div>
  </li>
</template>
