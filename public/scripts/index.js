import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { firebaseConfig } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GithubAuthProvider()
const googleProvider = new GoogleAuthProvider()


const signUpUser = () => {
    const username = document.getElementById('uName').value
    const email = document.getElementById('mail').value
    const password = document.getElementById('pass').value

    if (username === '' || email === '' || password === '') {
        alert('Input cannot be empty, fill it up')
    } else {
        const userObj = { username, email, password }
        console.log(userObj);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setTimeout(() => {
                    window.location.href = 'signin.html'
                }, 1000)
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === 'auth/password-does-not-meet-requirements') {
                    alert('password must contain special character, lowercase, uppercase, number and not less than 8 characters.')
                }
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.')
                }
                if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email address.');
                }
                if (errorCode === 'auth/operation-not-allowed') {
                    alert('Email/password accounts are not enabled.');
                }
                if (errorCode === 'auth/missing-password') {
                    alert('Password is required.');
                }
                if (errorCode === 'auth/internal-error') {
                    alert('An internal error occurred. Please try again.');
                }
            });
    }
}

const signGitHub = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            user ? window.location.href = 'dashboard.html' : window.location.href = 'index.html'
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);

            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail')
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                alert('The sign-in popup was closed before completing the sign in.');
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                alert('Popup sign in was canceled because another popup was opened.');
            }
            if (errorCode === 'auth/popup-blocked') {
                alert('The browser blocked the sign-in popup. Please allow popups and try again.');
            }
            if (errorCode === 'auth/operation-not-allowed') {
                alert('GitHub sign-in is not enabled in your Firebase project.');
            }
            if (errorCode === 'auth/unauthorized-domain') {
                alert('This domain is not authorized for OAuth operations.');
            }
            if (errorCode === 'auth/network-request-failed') {
                alert('Network error. Please check your connection and try again.');
            }
        });
}

const signGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            user ? window.location.href = 'dashboard.html' : window.location.href = 'index.html';
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail')
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                alert('The sign-in popup was closed before completing the sign in.');
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                alert('Popup sign in was canceled because another popup was opened.');
            }
            if (errorCode === 'auth/popup-blocked') {
                alert('The browser blocked the sign-in popup. Please allow popups and try again.');
            }
            if (errorCode === 'auth/operation-not-allowed') {
                alert('Google sign-in is not enabled in your Firebase project.');
            }
            if (errorCode === 'auth/unauthorized-domain') {
                alert('This domain is not authorized for OAuth operations.');
            }
            if (errorCode === 'auth/network-request-failed') {
                alert('Network error. Please check your connection and try again.');
            }
        });
}


window.signUpUser = signUpUser;
window.signGitHub = signGitHub;
window.signGoogle = signGoogle;