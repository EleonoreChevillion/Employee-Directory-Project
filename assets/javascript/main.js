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

var database = firebase.database();

var fname = "";
var lname = "";
var email = "";
var title = "";
var phone = "";
var hiredate = "";
var homeaddress = "";
var salary;

$("#submit").on("click", function(event) {
  // Don't refresh the page!
  event.preventDefault();

  fname = $("#fname-input")
    .val()
    .trim();
  lname = $("#lname-input")
    .val()
    .trim();
  homeaddress = $("#address-input")
    .val()
    .trim();
  title = $("#title-input")
    .val()
    .trim();
  phone = $("#phone-number-input")
    .val()
    .trim();
  email = $("#email-address-input")
    .val()
    .trim();
  hiredate = $("#hire-date-input")
    .val()
    .trim();
  salary = $("#salary-input")
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
  });
  // Change what is saved in firebase
});

//need to add click listener
// database.ref().on("value", function(snapshot) {
//         $("#name-display").text(snapshot.val().name);
//         $("#email-display").text(snapshot.val().email);
//         $("#age-display").text(snapshot.val().age);
//         $("#comment-display").text(snapshot.val().comment);
//       });
database.ref().on("child_append", function(snapshot) {
  var newEmployee = snapshot.val();

  $("#displayed-name").text(newEmployee.val().fname);
  $("#displayed-title").text(newEmployee.val().title);
  $("#displayed-phone").text(newEmployee.val().phone);
  $("#displayed-email").text(newEmployee.val().email);
  $("#displayed-hire-date").text(newEmployee.val().hiredate);
  $("#displayed-salary").text(newEmployee.val().salary);

  // If Firebase has a highPrice and highBidder stored, update our client-side variables
});
// If Firebase has a highPrice and highBidder stored, update our client-side variables
