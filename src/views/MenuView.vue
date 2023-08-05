
<template>
  <main class="flex flex-col items-center">
    <div>
      <EventOrganize v-for="event in events" :key="event.id" :event="event"></EventOrganize>
    </div>
  </main>
</template>

<script lang="ts" setup>

import EventOrganize from '@/components/EventOrganize.vue'
import type { EventItem } from '@/type'
import { ref } from 'vue'
import EventService from '@/services/EventService'
import type { Ref } from 'vue'

const events: Ref<Array<EventItem>> = ref([])
  EventService.getMenu().then((respond) =>{
    events.value = respond.data
  })
  
</script>

<style>
.event {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
