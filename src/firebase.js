import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD4kRP2s02dEp-R9N3PB8oELwixq5PjDBg",
    authDomain: "rise-887db.firebaseapp.com",
    databaseURL: "https://rise-887db.firebaseio.com",
    projectId: "rise-887db",
    storageBucket: "rise-887db.appspot.com",
    messagingSenderId: "1079702862685"
};
firebase.initializeApp(config);
export default firebase;