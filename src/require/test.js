import {db, database, lessons, users} from "./firebase";

// lessons.add({
//   id: 1,
//   lesson1: "Lovelace",
//   test: 1815
// })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//     console.error("Ошибко: ", error);
//   });

// lessons.get().then((snapshot) =>{
//  console.log(snapshot.val(),5000 )
// });


//работает
let dataFromDB =  database.ref('flows');
dataFromDB.on('value', (snapshot) => {
   dataFromDB = snapshot.val()});
setTimeout(()=>console.log(dataFromDB), 2000);
setTimeout(()=>console.log(dataFromDB['Поток 15']), 3000);