
//setting up firbase with our webssite
   const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyD6fSj5uCT5sfQPCWYFN7yR2GZhUEM4UqM",
  authDomain: "auth-form-d3cd2.firebaseapp.com",
  projectId: "auth-form-d3cd2",
  storageBucket: "auth-form-d3cd2.appspot.com",
  messagingSenderId: "509532602979",
  appId: "1:509532602979:web:47f131e05e49478d89ae56",
  measurementId: "G-3T36C3EMTT"
    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//    Signup Function
const signUp= ()=>{
    const email = document.getElementById("email").value
    const password =document.getElementById('password').value;
    console.log(email,password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
  document.write("You Are Signup")
  console.log("result")
    // ...
  })
  .catch((error) => {
console.log(error.code)
console.log(error.message)
    // ..
  });
}


//signin function 
const signIn = ()=>{
    const email = document.getElementById("email").value
    const password =document.getElementById('password').value;
    //firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    window.location.href = "admin.html";
    console.log("result")
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}
