<template>
    <div class="gf-empty-container" :class="`gf-empty-${size}`" v-show="show">
        <div>
            <!-- 图片 -->
            <slot name="img"><div class="gf-img"></div></slot>
            <!-- 文本 -->
            <slot name="text">
                <div
                    v-if="isText"
                    class="gf-text"
                    :class="{ 'fund-family': fundFamily }"
                >
                    {{ text }}
                </div>
            </slot>
            <slot name="supplement"> </slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import './assets/fonts.less'
defineOptions({
    name: 'GFEmpty',
})

withDefaults(
    defineProps<{
        text?: string
        size?: string
        fundFamily?: boolean
        isText?: boolean
        show?: boolean
    }>(),
    {
        text: '暂无数据',
        size: 'medium',
        fundFamily: false,
        isText: true,
        show: true,
    }
)
</script>
<style>
:root {
    --no-data-bg: url(./assets/noData_icon_fund.png);
}
</style>
<style lang="less">
.gf-empty-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.gf-empty-mixins(@length,@fontSize) {
    .gf-img {
        background: var(--no-data-bg) no-repeat;
        background-position: 50%;
        margin: 0 auto;
        width: @length;
        height: @length;
        background-size: @length auto;
    }
    .gf-text {
        text-align: center;
        font-size: @fontSize;
    }
}
.gf-empty-small {
    .gf-empty-mixins(50px,10px);
}
.gf-empty-medium {
    .gf-empty-mixins(100px,12px);
}
.gf-empty-large {
    .gf-empty-mixins(150px,14px);
}
.fund-family {
    font-family: menggang;
    color: #b4bbcc;
}
</style>
