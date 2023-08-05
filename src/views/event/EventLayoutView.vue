<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
</script>
<template>
    <div class="flex flex-col items-center" v-if="event">
        <h1>{{ event.title }} </h1>
        <div id="nav">
            <router-link class="underline text-lime-500 hover:text-lime-800 focus:text-green-900" :to="{name: 'event-detail', params: {id}}">Details</router-link>
            |
            <router-link class="underline text-lime-500 hover:text-lime-800 focus:text-green-900" :to="{name: 'event-register', params: {id}}">Register</router-link>
            |
            <router-link class="underline text-lime-500 hover:text-lime-800 focus:text-green-900" :to="{name: 'event-edit', params:{id}}">Edit</router-link>
        </div>
        <RouterView :event="event"></RouterView>
    </div>
</template>
<style>
</style>