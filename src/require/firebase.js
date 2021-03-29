import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'


firebase.initializeApp({
  apiKey: "AIzaSyDQhDNui9HS0cwkZYXg7lxROmbtyiJmLbE",
  authDomain: "whosayparlo.firebaseapp.com",
  projectId: "whosayparlo",
  storageBucket: "whosayparlo.appspot.com",
  messagingSenderId: "536678387300",
  databaseURL:"https://whosayparlo-default-rtdb.firebaseio.com/",
  appId: "1:536678387300:web:5ca7478f93251ebb60d971"
});
// utils
const db = firebase.firestore()
const database = firebase.database()

const lessons = db.collection('lessons')
const users = db.collection('users')




// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  database,
  lessons,
  users,

}