<template>
    <div class="container">
        <GFEmpty :fundFamily="true">
            <template #img>
                <img src="./assets//noSearchData.svg" alt="" />
            </template>
            <template #text>
                <div class="empty-text">换个搜索值试试呢</div>
            </template>
        </GFEmpty>
    </div>
</template>

<script setup lang="ts">
import { GFEmpty } from '@lok/fund-base'
</script>

<style lang="less" scoped>
.container {
    height: 400px;
    .empty-text {
        color: #848a94;
        font-size: 10px;
        text-align: center;
        margin: 20px auto;
    }
}
</style>
