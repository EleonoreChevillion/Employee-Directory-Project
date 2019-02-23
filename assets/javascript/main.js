// Initialize Firebase
var config = {
  apiKey: "AIzaSyD7TxoFXvcC1tdXtTszQzreV5UZpU8S3x0",
  authDomain: "saturday-project-7638e.firebaseapp.com",
  databaseURL: "https://saturday-project-7638e.firebaseio.com",
  projectId: "saturday-project-7638e",
  storageBucket: "saturday-project-7638e.appspot.com",
  messagingSenderId: "182569030754"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

let name = "";
let age = "";
let email = "";
let comment = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  // YOUR TASK!!!
    fname = $('#fname-input')
      .val()
      .trim();
    lanme = $('#lname-input')
      .val()
      .trim();
    email = $('#email-input')
      .val()
      .trim();
    phone = $("#phone-input")
      .val()
      .trim();

      database.ref().push({
      fname: fname,
      lname: lname,
      email: email,
      homeaddress: homeaddress,
      hiredate: hiredate,
      phone: phone,
      salary: salary,
      title: title

  // Code in the logic for storing and retrieving the most recent user.

  // Don't forget to provide initial data to your Firebase database.
      });
});
database.ref().on(
    'child_append',
    function(snapshot) {
      // Print the initial data to the console.
      console.log(snapshot.val());

      // Log the value of the various properties
      console.log(snapshot.val().name);
      console.log(snapshot.val().age);
      console.log(snapshot.val().email);
      console.log(snapshot.val().comment);

      $('#name-display').text(snapshot.val().name);
      $('#email-display').text(snapshot.val().email);
      $('#age-display').text(snapshot.val().age);
      $('#comment-display').text(snapshot.val().comment);
      // If any errors are experienced, log them to console.
    },
    function(errorObject) {
      console.log('The read failed: ' + errorObject.code);
    }
  );