import { initializeApp } from 'firebase/app'
import { getAuth,  } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC7wF01VgTAz4qGeBjI7R7lA_ZGSVt_Es4",
    authDomain: "demou-c3618.firebaseapp.com",
    projectId: "demou-c3618",
    storageBucket: "demou-c3618.firebasestorage.app",
    messagingSenderId: "876572340678",
    appId: "1:876572340678:web:d63a4135628893c5a782c7",
    measurementId: "G-06EDYX6TYQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)