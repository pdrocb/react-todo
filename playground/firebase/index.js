import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD2cdwmX-vXUvltprLfRX6jPnaYb_-WSzE",
  authDomain: "todo-app-42453.firebaseapp.com",
  databaseURL: "https://todo-app-42453.firebaseio.com",
  storageBucket: "todo-app-42453.appspot.com",
  messagingSenderId: "2330438159"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Pedro',
    age: 28
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Smile every morning',
});

todosRef.push({
  text: 'Take a walk',
});

/////////////////////////////
// Listeners
/*
// Listener that gets fire averytime a child is added to a reference
notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

// Listener that gets fire averytime a child is changed from reference
notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

// Listener that gets fire averytime a child is removed from reference
notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});
*/

/////////////////////////////
// Arrays
/*
var newNoteRef = notesRef.push({
  text: 'Walk the carnes'
});

console.log('Todo id', newNoteRef.key);
var notesRef = firebaseRef.child('notes');
*/

/////////////////////////////////
// Update value

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('updated worked!');
// }, (e) => {
//   console.log('updated failed');
// });

// firebaseRef.update({
//   'app/name': 'Todo Applications',
//   'user/name': 'Chompiras'
// });


/////////////////////////////////
// Remove values from database

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got the entire DB',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });


/////////////////////////////////
// Remove all listeners

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning:false});

/////////////////////////////////
// Remove just one listeners

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning:false});


/////////////////////////////////
// Remove all listeners


// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User Ref Changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Melis'});
// firebaseRef.child('app').update({name: 'Todo Application'});
