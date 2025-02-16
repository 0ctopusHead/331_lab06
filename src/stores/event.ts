import type { EventItem } from "@/type"
import { defineStore } from "pinia"
export const useEventStore = defineStore('event',{
    state: () => ({
        event: null as EventItem | null,
        events: null as EventItem[] | null
    }),
    actions: {
        setEvent(event: EventItem){
            this.event = event
        },
        setEvents(events: EventItem[]){
            this.events = events
        }
    }
})