<script lang="ts" setup>
import BaseInput from '@/components/BaseInput.vue';
import EventOrganize from '@/components/EventOrganize.vue';

import OrganizerService from '@/services/OrganizerService';
import type { EventOrganizer } from '@/type';

import { ref, type Ref } from 'vue';

const organizers: Ref<Array<EventOrganizer>> = ref([])
OrganizerService.getOrganizers()
.then((response) => {
  organizers.value = response.data;
})
</script>

<template>
  <main class="flex flex-col items-center">

      <EventOrganize v-for="organizer in organizers" :key="organizer.id" :organizer="organizer"></EventOrganize>
  </main>
</template>


<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  float: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left; 
}

#page-next {
  text-align: right;
}
</style>
