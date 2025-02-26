<script setup>
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
onMounted(() => {
    const htmlEl = document.documentElement
    htmlEl.setAttribute('data-color-mode', 'light')
    htmlEl.setAttribute('data-light-theme', 'light fund _pro')
    // if (!import.meta.env.SSR)
    //     import('./hookOnClient').then((module) => module.hookOnClient())
})
</script>

<template>
    <Layout> </Layout>
</template>
