<template>
  <!-- 测试pinia -->
  <button @click="number += 1">{{ number }}</button>
  <div bg-black w-50 h-50></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTestStore } from "@/store";

const store = useTestStore();
const number = computed<number>({
  get() {
    return store.number;
  },
  set(value) {
    store.setNumber(value);
  },
});
</script>
<style>
</style>