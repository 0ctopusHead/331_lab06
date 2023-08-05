<script setup lang="ts">
defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>
<template>
   <div class="flex flex-col items-center">
    <h1 class="text-3xl">Oops!</h1>
    <h3>The {{ resource }} you looking for is not here</h3>
    <RouterLink class="underline text-blue-700" :to="{name: 'event-list'}">Back to home page</RouterLink>
    </div>
</template>