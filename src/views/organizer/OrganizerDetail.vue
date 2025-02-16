<script setup lang="ts">
import type { PropType } from 'vue';
import type { EventOrganizer } from '@/type'

defineProps({
    organizer:{
        type: Object as PropType<EventOrganizer>,
        required: true
    }
})
</script>
<template>
    <div v-if="organizer">
    <img v-for="image in organizer.image"
    :key="image"
    :src="image"
    class="border-solid border-gray-200 border-2 rounded p-1 m-1 w-40 hover:shadow-lg"/>
    <p>{{ organizer.name }}</p>
    </div> 
</template>