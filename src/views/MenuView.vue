<script lang="ts" setup>
import EventOrganize from '@/components/EventOrganize.vue';
import type { OrganizerItem } from '@/organizer';
import OrganizerService from '@/services/OrganizerService';
import type { AxiosResponse } from 'axios';
import { computed, ref, type Ref } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
const organizers: Ref<Array<OrganizerItem>> = ref([])
const totalOrganizer = ref<number>(0)
const router = useRouter()
const props = defineProps ({
  page:{
    type: Number,
    required: true,
  }
})
  OrganizerService.getOrganizers(2, props.page)
  .then((response: AxiosResponse<OrganizerItem[]>) => {
    organizers.value = response.data
    totalOrganizer.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({name: 'network-error'})
  })
  onBeforeRouteUpdate((to, from, next) => {
    const toPage = Number(to.query.page)
    OrganizerService.getOrganizers(2, toPage)
    .then((response: AxiosResponse<OrganizerItem[]>) => {
      organizers.value = response.data
      totalOrganizer.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({name: 'network-error'})
    })
  })

  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalOrganizer.value / 2)
    return props.page.valueOf() < totalPages
  })
</script>

<template>
  <main class="flex flex-col items-center">
      <EventOrganize v-for="organizer in organizers" :key="organizer.id" :organizer="organizer"></EventOrganize>
    <div class="pagination">
      <RouterLink :to="{ name: 'menu', query: { page: page - 1 } }" rel="prev" v-if="page != 1" id="page-prev"
      >Prev Page</RouterLink
    >
    <RouterLink :to="{ name: 'menu', query: { page: page + 1 } }" rel="next" v-if="hasNextPage" id="page-next"
      >Next Page</RouterLink
    >
    </div>
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
