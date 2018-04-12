$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

	// Input pet name
	var name = prompt("Please name your jellyfish gigapet!", "Jumpy");

	if (name == null) {
	    pet_info['name'] = 'Jumpy';
	    checkAndUpdatePetInfoInHtml();
	} else {
		pet_info['name'] = name;
		checkAndUpdatePetInfoInHtml();
	}

	var random_sick = Math.floor((Math.random() * 10) + 1);
	random_sick = 1; //debug

	if (random_sick = 1) {
		pet_info['sick'] = true;
		pet_info['happiness'] = 0;
		pet_info['frustrated'] = 4;
		alert(pet_info['name'] + " is sick!");
		addComment("I'm not feeling so well.");
	}

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.discipline-button').click(clickedDisciplineButton);
    $('.medicine-button').click(clickedMedicineButton);
    
  })

	// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name: 'Jumpy',
      weight: 15,
      happiness: 5,
      frustrated: 0,
      sick: false,
      medicine: 0
    }
  
    function clickedTreatButton() {
	    if (pet_info['sick']) {
	    	addComment("I don't feel like eating right now.");
        } else {
      	  	// Increase pet happiness
		    pet_info['happiness'] += 1;
		    // Increase pet weight
		    pet_info['weight'] += 1;

		    checkAndUpdatePetInfoInHtml();
	  	    addComment("Thanks for the treat!");
		  }
    }
    
    function clickedPlayButton() {
	    if (pet_info['sick']) {
	      	addComment("I'm too weak to play right now.");
	      } else {
	        // Increase pet happiness
	        pet_info['happiness'] += 1;
	        // Decrease pet weight
	        pet_info['weight'] -= 1;

	        checkAndUpdatePetInfoInHtml();
	        addComment("I love to play!");
	      }
    }
    
    function clickedExerciseButton() {
	    if (pet_info['sick']) {
	      	addComment("I'm too weak to play right now.");
	      } else {
      	    // Decrease pet happiness
      		pet_info['happiness'] -= 1;
      		// Decrease pet weight
      		pet_info['weight'] -= 1;
      		// Increase pet frustrated
      		pet_info['frustrated'] += 1;

      		checkAndUpdatePetInfoInHtml();
      		addComment("I'm tired now.");
      	}
    }

    function clickedDisciplineButton() {
      // Decrease pet happiness
      pet_info['happiness'] -= 1;
      // Decrease pet frustrated
      pet_info['frustrated'] -= 1;

      checkAndUpdatePetInfoInHtml();
      addComment("Okay, okay, I'll stop.");
    }

    function clickedMedicineButton() {

    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if (pet_info['happiness'] < 0) {
      	pet_info['weight'] = 0;
      }
      // Also check for frustrated under zero
      if (pet_info['frustrated'] < 0) {
      	pet_info['frustrated'] = 0;
      }
    }

    function addComment(comment) {
      $('.comment').text(pet_info['name'] + " says: " + "\"" + comment + "\"");
    }
    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.frustrated').text(pet_info['frustrated']);
    }
  