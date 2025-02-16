import type { AxiosResponse } from 'axios' 
import type { EventItem } from '@/type'
import apiClient from './AxiosClient'

export default{
    getEvent(perPage: Number, page: Number): Promise<AxiosResponse<EventItem[]>>{
        return apiClient.get<EventItem[]>('/events?_limit=' + perPage +'&_page='+ page)
    },
    getEventById(id:number): Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>('events/'+id.toString())
    },
    saveEvent(event: EventItem): Promise<AxiosResponse<EventItem>>{
        return apiClient.post<EventItem>('/events', event)
    },
    getEventsByKeyWord(keyword: string,perPage: number, page: number): Promise<AxiosResponse<EventItem[]>>{
        return apiClient.get<EventItem[]>('/events?title=' +keyword+'&_limit='+ perPage+ '&_page='+ page)
    }
}