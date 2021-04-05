import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyDQhDNui9HS0cwkZYXg7lxROmbtyiJmLbE",
    authDomain: "whosayparlo.firebaseapp.com",
    projectId: "whosayparlo",
    storageBucket: "whosayparlo.appspot.com",
    messagingSenderId: "536678387300",
    databaseURL: "https://whosayparlo-default-rtdb.firebaseio.com/",
    appId: "1:536678387300:web:5ca7478f93251ebb60d971"
});
// utils
const db = firebase.firestore()


const lessons = db.collection('lessons')


let getLessons = lessons.doc('lessons');
getLessons.get().then((lesson) => {
    if (lesson.exists) {
        console.log("My lwssons:" + lesson.data());
    } else {
        console.log('No such document!');
    }
}).catch((error) => {
    console.log("Error hetting document:", error);
})