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
            <img src="${photoURL}" alt="Profile Picture" style="width: 35px; height: 35px; border-radius: 100%; object-fit: cover; background: #eee;" />
        `
    } else {
        setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 500)
    }
});

// Get all the buttons with class 'yes-btn'
        var yesBtns = document.querySelectorAll('.yes-btn');

        // Function to add or remove the hover class from all buttons
        function setAllBtnHover(state) {
            for (var i = 0; i < yesBtns.length; i++) {
                if (state) {
                    yesBtns[i].classList.add('yes-btn-all-hover');
                } else {
                    yesBtns[i].classList.remove('yes-btn-all-hover');
                }
            }
        }

        // Add event listeners to each button
        for (var j = 0; j < yesBtns.length; j++) {
            yesBtns[j].addEventListener('mouseenter', function() {
                setAllBtnHover(true);
            });
            yesBtns[j].addEventListener('mouseleave', function() {
                setAllBtnHover(false);
            });
            yesBtns[j].addEventListener('focus', function() {
                setAllBtnHover(true);
            });
            yesBtns[j].addEventListener('blur', function() {
                setAllBtnHover(false);
            });
        }

// Beginner-friendly script to log the title input value when it changes
const titleInput = document.getElementById('titleMe');
titleInput.addEventListener('input', function() {
  console.log('Title:', titleInput.value);
});

window.signGitHub = signGitHub;
window.signGoogle = signGoogle;