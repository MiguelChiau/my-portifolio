 import firebase from "firebase"

  var firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyCLH6gWFwrlwFBxkWFCsK0fZBY-5G_AlxM",
    authDomain: "my-portfolio-4a60e.firebaseapp.com",
    projectId: "my-portfolio-4a60e",
    storageBucket: "my-portfolio-4a60e.appspot.com",
    messagingSenderId: "316491146086",
    appId: "1:316491146086:web:b857bdf52010260b211ea7"
  })

  var db = firebaseApp.firestore()
  export {db}

  