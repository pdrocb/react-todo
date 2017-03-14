import firebase from 'firebase';

/*
* Try is for the initialization only happens once
* because firebase could try to connect several times.
*/

// process variable doesn't exist in the browser this is a node specific thing
try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
