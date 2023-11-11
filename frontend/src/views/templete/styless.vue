<script setup >
import {ref} from 'vue'
import { getTodos } from '@/api/test/index';

getTodos().then(res => {
    console.log('res :>> ', res);
})

</script>

<template>
<div>
    <div block h-30 w-full bg-gray-100>222</div>
</div>
</template>

<style scoped>

</style>