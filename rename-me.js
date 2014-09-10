// Eric Heron
// SDI 1409
// Project 2
// Story about chores



// Variables
var worker1 = "Eric";
var worker2 = "Jennifer";
var numberOfChores = 5;
var completedChores = true;
var myPrompt;

// Prompt
var myPrompt = prompt("Ready to begin?", "Type yes or no in lowercase");

// Procedure
if (myPrompt === "yes") {
	console.log("Let me tell you a little story about " + worker2 + " and " + worker1);
	console.log(worker1 + " and " + worker2 + " are two young newly weds.");
	console.log("They have to complete " + numberOfChores + " chores daily");
	
// Confirm
	var myConfirm = confirm("Would you like to continue the story?");
	if (myConfirm === true) {
		console.log("Good! They have 3 amazing pets to take care of together.");
	}
	else {
		console.log("Refresh the page to start over");
	}
}
else {
	console.log("Thanks for stopping by.");
};


