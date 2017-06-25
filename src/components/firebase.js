import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyCCN3USnjztk1GcnrHVScsyRvedRdpI7YQ",
  authDomain: "vue-trial-1.firebaseapp.com",
  databaseURL: "https://vue-trial-1.firebaseio.com",
  projectId: "vue-trial-1",
  storageBucket: "vue-trial-1.appspot.com",
  messagingSenderId: "136352030230"
});

// const adminEmail = document.getElementById('email');
// const adminPass = document.getElementById('password');
// const btnLogin = document.getElementById('btnLogin');
//
// //login event
// if(btnLogin){
//   btnLogin.addEventListener('click', e
//
// btnLogin.addEventListener('click',e=>{
//   const email = adminEmail;
//   const pass = adminPass;
//   const auth = firebase.auth();
//
//   //sign in
//   const promise = auth.signInWithEmailAndPassword(email,pass);
//   promise.catch(e => console.log(e.message));
// })
// }

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
