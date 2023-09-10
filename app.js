
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



// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate first and last name (no special characters or numbers)
function validateName(name) {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
}

// Modify the signUp function to include name validation
const signUp = () => {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validateName(firstName)) {
    alert("Please enter a valid First Name.");
    return;
  }

  if (!validateName(lastName)) {
    alert("Please enter a valid Last Name.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid Email.");
    return;
  }

  // Continue with Firebase signup code
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You Are Signed up");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
