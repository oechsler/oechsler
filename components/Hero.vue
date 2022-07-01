<script lang="ts" setup>
defineProps<{
    image?: {
        src: string,
        alt: string
    }
}>()
</script>

<template>
    <header class="mt-12">
        <h1 class="text-5xl font-extrabold">
            <div class="text-3xl">
                <Markdown :use="$slots.greeting" unwrap />
            </div>
            <div class="flex flex-row items-center">
                <img v-if="image !== undefined" :src="image?.src" :alt="image?.alt" class="w-8 h-auto">
                <div :class="image !== undefined && 'ml-1'">
                    <Markdown :use="$slots.name" unwrap />
                </div>
            </div>
        </h1>
    </header>
</template>