import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDm8FJLSl_jZzA78Shpgu_zyw-92TpiraU",
    authDomain: "catch-of-the-day-alexmac.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-alexmac.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
