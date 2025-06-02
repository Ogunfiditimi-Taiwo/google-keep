import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { firebaseConfig } from "./config.js";
import { getAuth, GithubAuthProvider, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const signGitHub = () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            user ? window.location.href = 'dashboard.html' : window.location.href = 'signin.html';
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail');
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
            // if (errorCode === 'auth/unauthorized-domain') {
            //     alert('This domain is not authorized for OAuth operations.');
            // }
            if (errorCode === 'auth/network-request-failed') {
                alert('Network error. Please check your connection and try again.');
            }
        });
};

const signGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            user ? window.location.href = 'dashboard.html' : window.location.href = 'signin.html';
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail');
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
};

window.signGitHub = signGitHub;
window.signGoogle = signGoogle;
