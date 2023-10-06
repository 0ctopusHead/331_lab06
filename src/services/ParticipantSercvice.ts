import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios' 
import type { EventParticipant } from '@/type'
const apiClient : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getParticipant(){
        return apiClient.get("/participants")
    },
    getParticipants(): Promise<AxiosResponse<EventParticipant[]>>{
        return apiClient.get<EventParticipant[]>('/participants')
    }
}