// Eric Heron
// SDI 1409
// Project 2
// Story about Eric and Jennifer and their chores.



// Variables
var worker1 = "Eric";
var worker2 = "Jennifer";
var numberOfChores = 5;
var completedChores = true;
var myPrompt;

// Prompt (This will pop up allowing the user to input information that will dictate the flow of the code
var myPrompt = prompt("Ready to begin?", "Type yes or no in lowercase");

// Procedure with Prompt Argument (If the prompt is yes this will run), see bottom for "no" answer code
if (myPrompt === "yes") {
	console.log("Let me tell you a little story about " + worker2 + " and " + worker1);
	console.log(worker1 + " and " + worker2 + " are two young newly weds.");
	console.log("They have to complete " + numberOfChores + " chores.");
	
	
// Confirm (This conditional will determine if the true or false code will run
	var myConfirm = confirm("Would you like to continue the story?");
	if (myConfirm === true) {
		console.log("Glad you chose to hear more of the story! They work together to get all the chores done.");

// String Function will show that, (laundry takes 10 minutes to complete)
		var choreInfo = function(nameOfChore, timeItTakes) {

// Return String for ("laundry",10)
			console.log(nameOfChore + " takes " + timeItTakes + " minutes to complete.");
			
// Boolean Function (2 >= 0, 3 >= 0) = true, if false the, "Get to work" code does not run
			var boolean = function (randomNumber1, randomNumber2) {
				if (randomNumber1 >= 0 && randomNumber2 >= 0) {
					console.log("Get to work");
				}
				
			}
// Return Boolean (since both numbers were greater than or equal to 0, they sent the message, "Get to work")
			boolean(2, 3);
		}
		choreInfo("Laundry", 10);
		
// Initiator of While loop (While loop will count down by 5's until it hits 0)
		var laundry = 10;
		while (laundry > 0){
			console.log(laundry + " minutes to go.");
			laundry-= 5;
		}
		
// Return Boolean (When the variable laundry is equal to the number 0 the loop will stop and return, "All done!")
		console.log("All done!");
		choreInfo("Kitchen", "1 hour and 30");
		choreInfo("Living Room", "1 hour and 15");

// String Function (This function is concatenating string data to for a statement), see Return String for outcome
		var bedroom = function(subRoom1, subRoom2) {
			console.log(subRoom1 + " clean " + subRoom2 + " clean ");
		}
		console.log("All done with the bedroom! It only took an hour.");

// Return String (Will display, "Master bathroom clean and bedroom closet clean")
		bedroom("Master bathroom", "and bedroom closet");
		
		console.log("The final chore they had was cleaning the pet areas. They completed that task in 20 minutes");
		
// Number Function and For loop (This code will subtract one from the number each time the loop is completed)
		var choresDone = function(number) {
			for (number; number > 0; number--) {
				console.log("They had " + number + " chores to go!");

// Number Function (Subtracts first number from second number) which in this case is, (5-5)				
				var subtract = function(firstNumber, secondNumber) {
					var math = firstNumber - secondNumber;
					console.log(math + " to go!");
				}
			}

// Return Number is 0 (displayed by saying, "0 to go!")
			subtract(5, 5);
		}
		choresDone(5);
	
// Return Number is 0 and it is displayed by the console.log("NO MORE CHORES!!!")
		console.log("NO MORE CHORES!!!");
		console.log("After " + worker1 + " and " + worker2 + " finished their chores, they went to a movie to relax.");
		
	}

// This code runs if the confirm comes back false
	else {
		console.log("Refresh the page to start over");
	}
}

// This code runs if the Prompt Argument comes back "no"
else {
	console.log("Thanks for stopping by.");
};


