<template>
    <div class="container">
        <GFEmpty :fundFamily="true" />
    </div>
</template>

<script setup lang="ts">
import { GFEmpty } from '@lok/fund-base'
</script>

<style lang="less" scoped>
.container {
    height: 400px;
}
</style>
