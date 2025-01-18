<template>
    <GFData val="0.88888" :formatData="{ format: 120 }" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { GFData } from '@lok/fund-base'
export default defineComponent({
    setup() {
    },
    components: { GFData }
});
</script>