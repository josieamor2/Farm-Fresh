import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBpb57JwJA53OAHfgek4kSSlE-r56vc7nk",
    authDomain: "farm-fresh-61d24.firebaseapp.com",
    databaseURL: "https://farm-fresh-61d24.firebaseio.com",
    projectId: "farm-fresh-61d24",
    storageBucket: "farm-fresh-61d24.appspot.com",
    messagingSenderId: "501000657784"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
export default db;