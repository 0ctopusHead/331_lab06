<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue';
import ImageUploadVue from '@/components/ImageUpload.vue';
import OrganizerService from '@/services/OrganizerService';
import { useMessageStore } from '@/stores/message';
import type { EventOrganizer } from '@/type';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useMessageStore();
const organizer = ref<EventOrganizer>({
    id:0,
    name: "",
    image: [],
    roles:[]

})
const router = useRouter();
function saveOrganizer(){
    OrganizerService.saveOrganizer(organizer.value)
    .then((response) => {
        router.push({
            name: 'organizer-detail',
            params: {id: response.data.id}
        })
    })
    .catch(() => {
        router.push({ name:"network-error"})
    })
}
</script>
<template>
    <div>
        <h1>Create an organizer</h1>
        <form @submit.prevent="saveOrganizer">
            <BaseInput v-model="organizer.name" type="text" label="Name"/>

            <h3>The image of Organizer</h3>
            <ImageUploadVue v-model="organizer.image" :max="1"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  <pre>{{ organizer }}</pre>
</template>