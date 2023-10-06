import { defineStore } from "pinia";
import axios from "axios";
import type { AxiosInstance } from "axios";
import type { EventOrganizer } from "@/type";
const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export const useAuthStore = defineStore('auth',{
    state: () => ({
        token: null as string | null,
        user: null as EventOrganizer | null
    }),
    getters:{
        currentUserName(): string{
            return this.user?.name || ''
        },
        isAdmin(): boolean {
            return this.user?.roles.includes('ROLE_ADMIN') || false
        }
    },
    actions: {
        login(email: string, password: string) {
            return apiClient
            .post('/api/v1/auth/authenticate', {
                username: email,
                password: password
            })
            .then((response) => {
                this.token = response.data.access_token
                this.user = response.data.user
                localStorage.setItem('access_token',this.token as string)
                localStorage.setItem('user',JSON.stringify(this.user))
                console.log(this.user)
                return response
            })
        },
        register(firstName: string, lastName: string,username:string, email:string, password:string){
            return apiClient
            .post('api/v1/auth/register',{
                email: email,
                firstname: firstName,
                lastname: lastName,
                username:username,
                password: password
            })
        },
        logout(){
            console.log('logout')
            this.token = null
            this.user = null
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
        },
        reload(token: string, user:EventOrganizer){
            this.token = token
            this.user = user
        }
    }
})