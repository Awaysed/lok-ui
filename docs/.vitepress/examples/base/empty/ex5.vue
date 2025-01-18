<template>
    <div class="container">
        <GFEmpty>
            <template #supplement>
                <div style="margin: 20px auto">您还未创建组合，快去创建吧</div>
                <GButton
                    theme="primary"
                    size="small"
                    style="display: block; margin: 10px auto"
                    >+组合构建</GButton
                >
                <div class="group-tip">组合示例如下</div>
            </template>
        </GFEmpty>
    </div>
</template>

<script setup lang="ts">
import { GFEmpty } from '@lok/fund-base'
import { GButton } from 'goal-design'
</script>

<style lang="less" scoped>
.container {
    height: 400px;
    .group-tip {
        font-size: 12px;
        margin-top: 50px;
        text-align: center;
        color: #848a94;
    }
}
</style>
