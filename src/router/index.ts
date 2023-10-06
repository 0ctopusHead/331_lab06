import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import MenuView from '../views/MenuView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '@/views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from "@/views/event/EventRegisterView.vue"
import EventLayoutView from "@/views/event/EventLayoutView.vue"
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import AddEventView from '@/views/EventFormView.vue'
import OrganizerFormView from '@/views/OrganizerFormView.vue'
import NProgress  from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'
import OrganizerDetailVue from '@/views/organizer/OrganizerDetail.vue'
import OrganizerLayoutView from '@/views/organizer/OrganizerLayoutView.vue'
import { useOrganizerStore } from '@/stores/organizer'
import OrganizerService from '@/services/OrganizerService'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({page : parseInt(route.query?.page as string || '1') }),

    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/add-event',
      name: 'add-event',
      component: AddEventView
    },
    {
      path: '/add-organizer',
      name: 'add-organizer',
      component: OrganizerFormView
    },
    // {
    //   path: '/add-organizer',
    //   name: 'add-organizer',
    //   component:AddOrganizerView
    // },
    {
      path: '/',
      name: 'menu',
      component: MenuView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1')})
    },
    {
      path: '/studentInfo',
      name: 'student-info',
      component: StudentView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/event/:id/',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEventById(id)
        .then((respond) => {
          // need to setup the data for the component
          eventStore.setEvent(respond.data)
        })
        .catch((error) => {
          if(error.request.status === 404){
            return {
              name: '404-resource',
              params: {resource: 'event'}
            }
          }
          else{
            return { name: 'network-error' }
          }
        })
      },
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: '/event/:id/edit',
          name: 'event-edit',
          component: EventEditView
        },
        {
          path: '/event/:id/register',
          name: 'event-register',
          component: EventRegisterView
        }
      ]
    },
    {
      path:'/organizer/:id/',
      name: 'organizer-layout',
      component: OrganizerLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const organizerStore = useOrganizerStore()
        return OrganizerService.getOrganizerById(id)
        .then((respond) => {
          // need to setup the data for the component
          organizerStore.setOrganizer(respond.data)
        })
        .catch((error) => {
          if(error.request.status === 404){
            return {
              name: '404-resource',
              params: {resource: 'event'}
            }
          }
          else{
            return { name: 'network-error' }
          }
        })
      },
      children:[
        {
          path:'',
          name:'organizer-detail',
          component: OrganizerDetailVue
      }
    ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
  ],
  scrollBehavior(to, from , savePosition) {
    if(savePosition) {
      return savePosition
    } else{
      return {top: 0}
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
