import type { AxiosResponse } from "axios"
import type { EventOrganizer } from "@/type";
import apiClient from "./AxiosClient"

export default{
    getOrganizers():Promise<AxiosResponse<EventOrganizer[]>>{
        return apiClient.get<EventOrganizer[]>('/organizers')
    },
    getOrganizerById(id: number):Promise<AxiosResponse<EventOrganizer>>{
        return apiClient.get<EventOrganizer>('organizers/'+id.toString())
    },
    saveOrganizer(organizer: EventOrganizer): Promise<AxiosResponse<EventOrganizer>>{
        return apiClient.post<EventOrganizer>('/organizers',organizer)
    }
}
