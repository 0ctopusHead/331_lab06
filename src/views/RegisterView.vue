<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg">

            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                    <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                    <InputText type="text"  v-model="firstName" :error="errors['firstName']"></InputText>
                </div>
                <div>
                    <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                    <InputText type="text"  v-model="lastName" :error="errors['lastName']"></InputText>
                </div>
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <InputText type="text"  v-model="username" :error="errors['username']"></InputText>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <InputText type="email"  v-model="email" :error="errors['email']"></InputText>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <InputText type="password" v-model="password" :error="errors['password']"></InputText>
            </div>
            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2">Sign in</button>
            </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const router = useRouter()
const messageStore = useMessageStore()
const authStore = useAuthStore()
const validationSchema = yup.object({
    firstName: yup.string().required('The first name is required'),
    lastName: yup.string().required('The last name is required'),
    username: yup.string().required('The username is required'),
    email: yup.string().required('The email is required').email('The input is not a email format'),
    password: yup.string().required('The password is required')
})
const {errors, handleSubmit} = useForm({
    validationSchema,
    initialValues: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }
})
const { value: firstName} = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')
const { value: username } = useField<string>('username')
const { value:email } = useField<string>('email')
const { value:password } = useField<string>('password')
const onSubmit = handleSubmit((value) => {
    authStore.register(value.firstName,value.lastName,value.username,value.email, value.password)
    .then(() => 
    router.push({name: 'login'})
    )
    .catch((err) =>{
        messageStore.updateMessage('could not register')
        setTimeout(() => {
            messageStore.resetMessage()
        },3000)
    })
})
</script>