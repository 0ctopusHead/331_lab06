<script setup lang="ts">
import { useOrganizerStore } from '@/stores/organizer'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const store = useOrganizerStore()
const organizer = storeToRefs(store).organizer
const id = ref(organizer?.value?.id)
</script>
<template>
        <div class="flex flex-col items-center" v-if="organizer">
        <h1>{{ organizer.name }} </h1>
        <div id="nav">
            <router-link class="underline text-lime-500 hover:text-lime-800 focus:text-green-900" :to="{name: 'organizer-detail', params: {id}}">Details</router-link>
        </div>
        <RouterView :organizer="organizer"></RouterView>
    </div>
</template>