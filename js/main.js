/*Like this*/

function askQuestions () {


var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' +lastName;
console.log (fullName);

var age = prompt('How old are you?');
age= parseInt(age);
}
if (age >= 18) {
	console.log ('User is an adult');
	}else if (age >=13) {
		console.log ('User is a teenager');
	}else {
			console.log ('User is a child');
}
var faveColour = prompt('What is your favourite colour?');
faveColour = faveColour.toLowerCase();

}
	
if (faveCoulour == 'red' ||
	faveColour == 'green' ||
	faveColour== 'blue' ||
	faveColour == 'yellow') {
	$('h1').css('color',faveColour) 
}

//when the page has loaded

$(function () {
	//When the user clicks the img, run AskQuestions
		$('img').on('click', askQuestions);

	//When the user clicks an h3 element
	$('h3').on('click', function () {
	//Toggle the next section
	$ (this).next().toggle();

	}); 

});
