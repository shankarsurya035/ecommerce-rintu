//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyAJ4Pmgx6djFu1O5VPX1BOkxCOqX7p9f0k",
      authDomain: "form-4896b.firebaseapp.com",
      projectId: "form-4896b",
      storageBucket: "form-4896b.appspot.com",
      messagingSenderId: "189037396117",
      appId: "1:189037396117:web:474be63333c02780ffdb9c"
  };
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("fomData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let firstName = document.getElementById('fname').value
    let lastName = document.getElementById('lname').value
    let productName = document.getElementById('pname').value
    let productSize = document.getElementById('size').value
    let country = document.getElementById('country').value
    let phonenumber = document.getElementById('pnum').value
  
    //Save Form Data To Firebase
    db.doc().set({
      fname: firstName,
      lname: lastName,
      pname: productName,
      size : productSize,
      country: country,
      pnum: phonenumber
    }).then( () => {
      console.log("Data saved")
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Your Form Has Been Submitted Successfully")
  })