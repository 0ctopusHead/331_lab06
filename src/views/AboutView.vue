<script setup lang="ts">
import ParticipantCard from '@/components/ParticipantCard.vue';
import ParticipantSercvice from '@/services/ParticipantSercvice';
import type { EventParticipant } from '@/type';
import {type Ref } from 'vue';
import {ref} from 'vue'


const participants: Ref<Array<EventParticipant>> = ref([])
ParticipantSercvice.getParticipants()
.then((response) => {
  console.log(response.data)
  participants.value = response.data
})
</script>
<template>
  <div class="flex flex-col items-center">
    <ParticipantCard v-for="participant in participants" :key="participant.id" :participant="participant"></ParticipantCard>
  </div>
</template>

<style>

</style>