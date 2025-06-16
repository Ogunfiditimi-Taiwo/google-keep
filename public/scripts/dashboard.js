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
            <img src="${photoURL}" alt="Profile Picture" style="width: 35px; height: 35px; border-radius: 100%; object-fit: cover; background: #eee;" />`
    } else {
        setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 500)
    }
});

const inputMe = () => {
    document.getElementById('fool').style.display = 'none';
    document.getElementById('expandedDiv').style.display = 'block';
}

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
// const titleInput = document.getElementById('titleMe');
// titleInput.addEventListener('input', function() {
//   console.log('Title:', titleInput.value);
// });

window.signGitHub = signGitHub;
window.signGoogle = signGoogle;
// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('noteInput');
    const inputIcons = document.getElementById('inputIcons');
    const expandedInputs = document.getElementById('expandedInputs');
    const titleInput = document.getElementById('titleInput');
    const noteBodyInput = document.getElementById('noteBodyInput');
    const cardContainer = document.getElementById('cardContainer');
    const imageInput = document.getElementById('imageInput');
    const imageIcon = document.getElementById('imageIcon');

    // Expand input on focus
    noteInput.addEventListener('focus', function() {
        noteInput.style.display = 'none';
        inputIcons.style.display = 'none';
        expandedInputs.style.display = 'flex';
        titleInput.focus();
    });

    // Click image icon to open file picker
    imageIcon.addEventListener('click', function() {
        imageInput.click();
    });

    // Add note on Enter in either expanded input
    function addCardIfEnter(e) {
        if (e.key === 'Enter') {
            const title = titleInput.value.trim();
            const note = noteBodyInput.value.trim();
            const file = imageInput.files[0];
            if (!title && !note && !file) return;

            // Create card
            const card = document.createElement('div');
            card.className = "card";
            if (title) {
                const cardTitle = document.createElement('div');
                cardTitle.className = "card-title";
                cardTitle.textContent = title;
                card.appendChild(cardTitle);
            }
            if (note) {
                const cardNote = document.createElement('div');
                cardNote.textContent = note;
                card.appendChild(cardNote);
            }
            // Add image if selected
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.style.maxWidth = "100%";
                    img.style.marginTop = "10px";
                    img.style.borderRadius = "7px";
                    card.appendChild(img);
                };
                reader.readAsDataURL(file);
            }

            // Add delete button
            const delBtn = document.createElement('button');
            delBtn.textContent = "Delete";
            delBtn.style.marginTop = "10px";
            delBtn.style.background = "orange";
            delBtn.style.color = "#222";
            delBtn.style.border = "none";
            delBtn.style.borderRadius = "5px";
            delBtn.style.padding = "6px 16px";
            delBtn.style.cursor = "pointer";
            delBtn.onclick = function() {
                card.remove();
            };
            card.appendChild(delBtn);

            cardContainer.appendChild(card);

            // Reset and collapse
            titleInput.value = "";
            noteBodyInput.value = "";
            imageInput.value = "";
            expandedInputs.style.display = 'none';
            noteInput.style.display = 'block';
            inputIcons.style.display = 'flex';
            noteInput.value = "";
        }
    }

    titleInput.addEventListener('keydown', addCardIfEnter);
    noteBodyInput.addEventListener('keydown', addCardIfEnter);
});

