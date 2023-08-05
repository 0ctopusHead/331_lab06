<template>
  <div class="organize-class">
   <div class="organize-card">
    <span>
       Category : {{ event.category }}
    </span> 
     <br/>
    <span>
       Organizer : {{ event.organizer }}
    </span>
  
   
   </div>
  </div>
</template>

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