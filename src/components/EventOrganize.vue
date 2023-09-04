<template>
  <div class="organize-class">
   <div class="organize-card">
    <span>
       ID : {{organizer?.id}}
    </span> 
     <br/>
    <span>
       Organizer : {{ organizer?.organizer }}
    </span>
    <br/>
    <span>
      Location : {{ organizer?.address }}
    </span>
   
   </div>
  </div>
</template>

<script lang="ts" setup>
import type { OrganizerItem } from '@/organizer';
import type { PropType } from 'vue';

defineProps({
  organizer: {
    type: Object as PropType<OrganizerItem>,
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