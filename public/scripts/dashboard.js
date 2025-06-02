import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { firebaseConfig } from "./config.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
const show = document.querySelector('.show');


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        // Fallbacks for missing displayName or photoURL
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        show.innerHTML = `
            <h3>Welcome ${displayName}</h3>
            <img src="${photoURL}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 100%; object-fit: cover; background: #eee;" />
        `
    } else {
        setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 500)
    }
});

