<script setup lang="ts">
import { type EventOrganizer, type EventItem } from "@/type";
import { ref } from "vue";
import { useRouter } from "vue-router";
import EventService from "@/services/EventService";
import { useMessageStore } from "@/stores/message";
import BaseInput from "@/components/BaseInput.vue";
import OrganizerService from "@/services/OrganizerService";
import BaseSelect from "@/components/BaseSelect.vue";
import ImageUpload from "@/components/ImageUpload.vue";

const store = useMessageStore();
const event = ref<EventItem>({
  id: 0,
  category: "",
  title: "",
  description: "",
  location: "",
  date: "",
  time: "",
  organizer: { id: 0, name:"",image:[],roles:[] },
  petsAllowed: false,
  images:[]
});
const router = useRouter();
function saveEvent() {
  EventService.saveEvent(event.value)
    .then((response) => {
      console.log(response.data);
      router.push({
        name: "event-detail",
        params: { id: response.data.id },
      });
      store.updateMessage(
        "You are successfully add a new event for " + response.data.title
      );
      setTimeout(() => {
        store.resetMessage();
      }, 3000);
    })
    .catch(() => {
      router.push({ name: "network-error" });
    });
}
const organizers = ref<EventOrganizer[]>([]);
OrganizerService.getOrganizers().then((response) => {
  organizers.value = response.data;

});
</script>
<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="saveEvent">
      <BaseInput v-model="event.category" type="text" label="Category" />

      <h3>Name & describe your event</h3>
      <BaseInput v-model="event.title" type="text" label="Title" />
      <BaseInput v-model="event.location" type="text" label="Location" />

      <h3>Who's your organizer?</h3>
      <BaseSelect
        :options="organizers"
        v-model="event.organizer.id"
        label="Select an Organizer"
      ></BaseSelect>

      <h3>The image of the Event</h3>
      <ImageUpload v-model="event.images"/>
      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>
