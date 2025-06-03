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
            <div style="display: flex; gap: 30px; align-items: center; justify-content: center; margin-top: 20px;"><img src="${photoURL}" alt="Profile Picture" style="width: 50px; height: 50px; border-radius: 100%; object-fit: cover; background: #eee;" />
            <p>${displayName}</p></div>
        `
    } else {
        setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 500)
    }
});

