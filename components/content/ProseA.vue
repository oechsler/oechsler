<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    blank: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <NuxtLink :href="href" external class="text-gray-500 hover:text-gray-700 active:text-gray-700">
        <slot />
    </NuxtLink>
</template>