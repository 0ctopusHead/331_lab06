export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: EventOrganizer
  images: string[]
}

export interface EventOrganizer {
  id : number
  name: string
  image: string[]
  roles: string[]
}

export interface EventParticipant{
  id: number
  name: string
  telNo: string

}