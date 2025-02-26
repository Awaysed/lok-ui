<template>
    <div class="container">
        <div><GFEmpty size="small" /></div>
        <div><GFEmpty /></div>
        <div><GFEmpty size="large" /></div>
    </div>
</template>

<script setup lang="ts">
import { GFEmpty } from '@lok/fund-base'
</script>

<style lang="less" scoped>
.container {
    height: 400px;
    display: grid;
    grid-template-columns: repeat(3, 32%);
}
</style>
