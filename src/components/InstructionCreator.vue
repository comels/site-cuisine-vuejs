<script setup>
import { reactive } from "vue";

const emit = defineEmits(["create-instruction"]);

const instructionState = reactive({
  instruction: "",
  invalid: null,
  errMsg: "",
});

const createInstruction = () => {
  instructionState.invalid = null;
  if (instructionState.instruction !== "") {
    emit("create-instruction", instructionState.instruction);
    instructionState.instruction = "";
    return;
  }
  instructionState.invalid = true;
  instructionState.errMsg = "Texte manquant !";
};
</script>

<template>
  <!-- input instruction -->

  <div class="mt-10 flex justify-center gap-2">
    <input
      class="border-none w-full placeholder-stone-500 focus:border-transparent cursor-pointer focus:ring-transparent focus:shadow-md rounded-md"
      type="text"
      placeholder="Instruction"
      @keyup.enter="createInstruction"
      v-model="instructionState.instruction"
      required
    />

    <button
      class="font-roboto py-4 px-6 font-semibold text-white bg-stone-400 hover:bg-stone-500 rounded-md text-lg cursor-pointer transition duration-500 ease-in-out"
      @click="createInstruction"
    >
      Ajouter
    </button>
  </div>

  <p
    v-show="instructionState.invalid"
    class="mt-6 text-sm text-center text-stone-600"
  >
    {{ instructionState.errMsg }}
  </p>
</template>
