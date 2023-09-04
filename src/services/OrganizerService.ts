import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios"
import type { OrganizerItem } from "@/organizer"

const apiClient : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default{
    getOrganizers(perPage: Number, page: Number): Promise<AxiosResponse<OrganizerItem[]>>{
        return apiClient.get<OrganizerItem[]>('/organizers?_limit=' + perPage + '&_page=' + page)
    },
    saveOrganizer(organizer: OrganizerItem): Promise<AxiosResponse<OrganizerItem>>{
        return apiClient.post<OrganizerItem>('/organizers', organizer)
    }
}