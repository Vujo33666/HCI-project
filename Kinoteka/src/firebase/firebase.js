import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvu-t14rKO5Jv6Ec7X8p0JOr9owErBiV0",
    authDomain: "kinotekahci.firebaseapp.com",
    projectId: "kinotekahci",
    storageBucket: "kinotekahci.appspot.com",
    messagingSenderId: "386258454713",
    appId: "1:386258454713:web:c84caf679ff2270c9bb368",
    measurementId: "G-Q0M4BEY0ZS"
  });

firebase.initializeApp(firebaseApp);

const db = firebase.firestore();

export { db };
