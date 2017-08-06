var config = {
    apiKey: "AIzaSyD7nQyucYKJ06yW53kbh5_olAsbNLc11lQ",
    authDomain: "click-2f296.firebaseapp.com",
    databaseURL: "https://click-2f296.firebaseio.com",
    projectId: "click-2f296",
    storageBucket: "click-2f296.appspot.com",
    messagingSenderId: "317352618119"
  };
firebase.initializeApp(config);


var database = firebase.database();

// 2. Button for adding Employees
$("#submitbtn").on("click", function (event) {

	event.preventDefault();

	console.log()

	// Grabs user input
	var name= $("#trainname").val().trim();
	var Dest = $("#destination").val().trim();
	var Time = $("#traintime").val().trim();
	var Frequency = $("#arrivalfreq").val().trim();
	
	console.log(name);
	console.log(Dest);
	console.log(Time);
	console.log(Frequency);
	
	// Creates local "temporary" object for holding employee data
	var newTrain = {
		trainName: name,
		trainDest: Dest,
		trainTime: Time,
		trainFreq: Frequency
		
	};
	console.log(newTrain);

	// Uploads employee data to the database
	database.ref().push(newTrain);

	// Logs everything to console
		

	// Alert
	alert("New Train Schedule Added");

	// Clears all of the text-boxes
	$("#trainname").val("");
	$("#destination").val("");
	$("#traintime").val("");
	$("#arrivalfreq").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

	

	// Store everything into a variable.
	var trainName = childSnapshot.val().trainName;
	var trainDest = childSnapshot.val().trainDest;
	var trainTime = childSnapshot.val().trainTime;
	var trainFreq = childSnapshot.val().trainFreq;
	var nextArrival = "12:00 PM";
	var minsToNext = "5";
	

	// Add each train's data into the table
	$("#currenttrain > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
		+ trainFreq + " </td><td>" + nextArrival + "</td><td>" + minsToNext + "</td></tr>");
});