
<script lang="ts" setup>

import type { EventItem } from '@/type'
import type { PropType } from 'vue'

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true
  }
})


</script>

<template>
  <RouterLink class="event-link" :to="{name: 'event-detail', params: {id: event?.id}}">
  <div class="event-class">
    <div class="event-card">
      <span>@{{ event?.time }} on {{ event?.date}}</span>
      <h4>{{ event?.title }}</h4>
      <span>by</span>
      <h5>{{ event?.organizer.name }}</h5>
    <div>
    </div>
    </div>
  </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
