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

// Procedure with Prompt Argument
if (myPrompt === "yes") {
	console.log("Let me tell you a little story about " + worker2 + " and " + worker1);
	console.log(worker1 + " and " + worker2 + " are two young newly weds.");
	console.log("They have to complete " + numberOfChores + " chores daily.");
	
	
// Confirm
	var myConfirm = confirm("Would you like to continue the story?");
	if (myConfirm === true) {
		console.log("Good! They work together to get all the chores done.");

// Boolean Function
		var choreInfo = function(nameOfChore, timeItTakes) {
			console.log(nameOfChore + " takes " + timeItTakes + " minutes to complete.");
			var cleanUp = function(trash) {
			cleanUp("materials used");
				console.log(trash + " are picked up");
			}
		} 
		choreInfo("Laundry", 10);
// Initiator of While loop
		var laundry = 10;
		while (laundry > 0){
			console.log(laundry + " minutes to go.");
			laundry-= 5;
		}
// Return Boolean
		console.log("All done!");
		
	}
	else {
		console.log("Refresh the page to start over");
	}
}
else {
	console.log("Thanks for stopping by.");
};


