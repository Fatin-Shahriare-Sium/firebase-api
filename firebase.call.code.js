//How to set up firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import db from '../twitter-clone/src/component/firebase'

var firebaseConfig = {
    apiKey:"AIzaSyDE0SmgQvfPjfxHE-bdlmRL9OR5kaXKTOM",
    authDomain: "practising-38620.firebaseapp.com",
    projectId: "practising-38620",
    storageBucket: "practising-38620.appspot.com",
    messagingSenderId: "1027234416587",
    appId: "1:1027234416587:web:2f66110c7bc6675e5f584e",
    measurementId: "G-QBM9PMBQW0"
  }

  let app=firebase.initializeApp(firebaseConfig)
  export let auth=app.auth()
  export db=app.firestore()
  export let storage=app.storage()
//firebase firestore
//import db from 'uppercode'
//1.getting
db.collection('post').onSnapshot(snapShot=>{
    let getData=snapShot.docs.map(doc=>doc.data());
    console.log(getData);//it gives data with array which we want.
    //if we want the id of data,we can write doc.id.
    //if we want that array with data plus id ,we have make a function like
    // function formattedDoc(doc){
    //     return{
    //         id:doc.id,
    //         ...doc.data()
    //     }
    // }
    //it is great thing 
    
        
      })

//2.delete

db.collection('post').doc('id of document').delete()

//3.update
db.collection('post').doc('id of document').update({
    objectName: '',  //what you want to do with it,
    text: 'objectName is the document object.key'  //what you want to do with it
})
//4.add
db.collection('post').add({
    //object what you want to push here
})





//firebase storage
//import storage from 'uppercode'
//1.sending file

let uploadTask=storage.ref('path name').put('file') //let uploadTask=storage.ref(`/files/${userx.uid}/${filePath}`).put(e.target.files[0])
uploadTask.on('state_changed',snapshot=>{
    console.log(snapshot);
    setProgress(Math.round(snapshot.bytesTransferred/snapshot.totalBytes*100))//it is the percentage of uploading file.
},
()=>{
//here to handle error

},()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
        //it give url of what file you have uploaded
      database.file.add({
          url:url,
          name:fileName,
          FolderId:currentFolder.id,
          userId:userx.uid

      })
      
    })

})



//firebase auth
//import auth from 'uppercode'

//1.signUp
function signUp(email,password){
    return auth.createUserWithEmailAndPassword(email,password)
 }
//Log out
 function logout(){
     auth.signOut()
 }
//onAuthStateChanged

auth.onAuthStateChanged(user=>{
    //if you logged in,this function will give userdetails like name,email,picture,user uid etc
    //if you not logged in,it will return null
    //So,through this onAuthStateChanged function,we will understand we are logged or not logged and can get lot of important details.
 })

     
