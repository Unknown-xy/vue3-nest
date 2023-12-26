<template>
  <n-button type="primary" @click="a = '3'"> 点击 </n-button>
  <HelloWorld :msg="a" />
</template>

<script setup lang="ts">
import { forEach } from "lodash-es";

const a = ref("1");

const arr = [1, 2, 3, 4, 5];

forEach(arr, (item) => {
  console.log("🚀 ~ file: store.vue:14 ~ forEach ~ item:", item);
});
</script>
<style></style>
