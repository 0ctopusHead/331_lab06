<template>
  <RouterLink :to="{name:'organizer-detail', params:{id:organizer?.id}}">
    <div class="organize-class">
   <div class="organize-card">
    <span>
       ID : {{organizer?.id}}
    </span> 
     <br/>
    <span>
       Organizer : {{ organizer?.name}}
    </span>
    <br/>
   </div>
  </div></RouterLink>

</template>

<script lang="ts" setup>
import type { EventOrganizer } from '@/type';
import type { PropType } from 'vue';

defineProps({
  organizer: {
    type: Object as PropType<EventOrganizer>,
    required: true
  }
})
</script>

<style>
.organize-card {
  padding: 20px;
  width: 250px;
  margin-bottom: 18px;
  cursor: pointer;
  border: 1px solid #39495c;
  text-align: right;
}
.organize-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>