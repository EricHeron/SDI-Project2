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
	console.log("They have to complete " + numberOfChores + " chores.");
	
	
// Confirm
	var myConfirm = confirm("Would you like to continue the story?");
	if (myConfirm === true) {
		console.log("Glad you chose to hear more of the story! They work together to get all the chores done.");

// Boolean Function
		var choreInfo = function(nameOfChore, timeItTakes) {
			console.log(nameOfChore + " takes " + timeItTakes + " minutes to complete.");
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
		choreInfo("Kitchen", "1 hour and 30");
		choreInfo("Living Room", "1 hour and 15");

// String Function
		var bedroom = function(subRoom1, subRoom2) {
			console.log(subRoom1 + " clean " + subRoom2 + " clean ");
		}
		console.log("All done with the bedroom! It only took an hour.");

// Return String
		bedroom("Master bathroom", "and bedroom closet");
		
		console.log("The final chore they had was cleaning the pet areas. They completed that task in 20 minutes");
		
// Number Function
		var choresDone = function(number) {
			for (number; number > 0; number--) {
				console.log("They had " + number + " chores to go!");
				
			}
		}
		choresDone(5);
		console.log("NO MORE CHORES!!!");
		console.log("After " + worker1 + " and " + worker2 + " finished their chores, they went to a movie to relax.");
		
	}
	else {
		console.log("Refresh the page to start over");
	}
}
else {
	console.log("Thanks for stopping by.");
};


