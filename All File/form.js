var firebaseConfig = {
    apiKey: "AIzaSyAXyLi930kLd83TUGzsksU8Fzs1p7Lcn10",
    authDomain: "universityproject77.firebaseapp.com",
    projectId: "universityproject77",
    storageBucket: "universityproject77.appspot.com",
    messagingSenderId: "849443090254",
    appId: "1:849443090254:web:94001c639a51e5d5a0781f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();


  //signup function
  function signUp(){
    var email = document.getElementById("emailup");
    var password = document.getElementById("passup");
    auth.createUserWithEmailAndPassword(email.value,password.value)
    .then(cred=>{
        console.log(cred.user.uid);
        window.location.href = "login.html";
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
    });
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    auth.signInWithEmailAndPassword(email.value,password.value)
    .then(cred=>{
        console.log(cred.user);
        localStorage.setItem("user",JSON.stringify(cred.user.email));
        window.location.href = "home.html";
    })
    .catch(e=>alert(e.message));
  }

  function googleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

  function logout(){
    auth.signOut()
    .then(function() {
        window.location.href = "login.html";
      })
      .catch(function(error) {
      });
  }