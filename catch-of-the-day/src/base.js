import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANgNkoqoMGkWWvCImLuI--YsNb9Bu9OfE",
    authDomain: "catch-of-the-day-lex.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lex.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
