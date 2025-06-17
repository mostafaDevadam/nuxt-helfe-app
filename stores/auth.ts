import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "~/firebase/firebase.client";

interface UserPayloadInterface {
    username: string,
    password: string,
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
       authenticated: false,
       loading: false,
    }),
    actions: {
        async authenticateUser({username, password}: UserPayloadInterface) {
            this.loading = true
            try{
                
                this.loading = false
                return true
            }catch(error){
                return error
            }

        },
        async authenticateFirebaseGoogleUser(){
            this.loading = true
            try{
                const fb_usr: any = await signInWithPopup(auth, new GoogleAuthProvider())
                if(fb_usr){
                    console.log("firebase google user:", fb_usr, fb_usr.user['accessToken'])
                }
                this.loading = false
                return true
            }catch(error){
                return error
            }

        },
        async authenticateFirebaseFacebookUser(){
            this.loading = true
            try{
                const fb_usr: any = await signInWithPopup(auth, new FacebookAuthProvider())
                if(fb_usr){
                    console.log("firebase facebook user:", fb_usr, fb_usr.user['accessToken'])
                }
                this.loading = false
                return true
            }catch(error){
                return error
            }
        },
        logUserOut(){
           const token = useCookie('token')
           this.authenticated = false
           token.value = null
        }

    }
})