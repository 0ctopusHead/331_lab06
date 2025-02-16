<script setup lang="ts">
import type { EventParticipant } from '@/type';
import type { PropType } from 'vue';
defineProps({
    participant: {
        type: Object as PropType<EventParticipant>,
        required: true
    }
})
</script>
<template>
    <div class="participant-class">
        <div class="participant-card">
            <span>
                ID: {{ participant?.id }}
            </span>
            <br/>
            <span>
                Name: {{ participant?.name }}
            </span>
            <br/>
            <span>
                Telephone No.: {{ participant?.telNo }}
            </span>
        </div>

    </div>
</template>
<style>
.participant-card {
  padding: 20px;
  width: 250px;
  margin-bottom: 18px;
  cursor: pointer;
  border: 1px solid #39495c;
  text-align: right;
}
.participant-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>