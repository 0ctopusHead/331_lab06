<script lang="ts" setup>
import type { EventItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})
const router = useRouter()
const store = useMessageStore()
function register(){
  store.updateMessage('You are successfully for ' +  props.event?.title)
  setTimeout(() =>{
    store.resetMessage()
  },3000)
  router.push({
    name: 'event-detail',
    params: {
      id: props.event?.id
    }
  })
}
</script>
<template>
  <p>Register from here</p>
  <button class="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full" @click="register">Register Me</button>
</template>
