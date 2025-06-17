<template>
    <div>
        auth

        <div class="mx-auto flex flex-col justify-center">

            <form @submit.prevent="onSubmit"
                class="mx-auto flex flex-col gap-4 justify-center shadow rounded ps-5 pe-5 pb-5 pt-4 bg-gray-100">

                <h1 class="text-center">SignUp</h1>

                <div class="flex flex-row gap-2">
                    <label for="email" class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</label>
                    
                    <input type="email" name="email" id="email" placeholder="Enter Email"
                        class="p-1 border-spacing-1 rounded bg-slate-300 text-gray-100 ps-2 ms-7 placeholder-slate-50" />
                </div>

                <div class="flex flex-row gap-2">
                    <label for="pass" class="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter Password"
                        class="p-1 ps-2 border-spacing-1 rounded bg-slate-300 text-gray-50 placeholder-slate-50" />
                </div>

                <div class="text-center mt-3">
                    <button type="submit" class="p-2 bg-green-500 rounded w-2/3 text-gray-100">Submit</button>
                </div>

                <div class="flex flex-col gap-3 mt-5">
                    <button class="bg-green-400 p-1 rounded text-red-100">Firebase Google</button>
                    <button class="bg-blue-700 p-1 rounded text-gray-100">Firebase Facebook</button>
                    <button class="bg-neutral-600 p-1 rounded text-gray-100">Firebase Apple</button>

                    <button class="btn btn-success">Success</button>
                    <button class="btn btn-accent">Accent</button>

                    <VaBadge overlap :text="badge" class="rounded-full" placement="bottom-end">
                        <VaButton @click="() => badge++">
                            Button
                        </VaButton>
                    </VaBadge>

                </div>

            </form>

            <h1></h1>




        </div>

    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const badge = ref(2)


const { } = useAuthStore()

const { } = useNuxtApp()

console.log("module#:",)


const firebaseGoogleUserSignin = async () => {
    try {

    } catch (error) {
        console.log("error:", error)
    }
}

const onSubmit = () => {
    console.log("onSubmit")
}

</script>

<style scoped></style>