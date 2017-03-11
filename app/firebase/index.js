import firebase from 'firebase';

/*
* Try is for the initialization only happens once
* because firebase could try to connect several times.
*/
try {
  var config = {
    apiKey: "AIzaSyD2cdwmX-vXUvltprLfRX6jPnaYb_-WSzE",
    authDomain: "todo-app-42453.firebaseapp.com",
    databaseURL: "https://todo-app-42453.firebaseio.com",
    storageBucket: "todo-app-42453.appspot.com",
    messagingSenderId: "2330438159"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
