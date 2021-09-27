const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "How many players are allowed on a soccer pitch ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

let wrongAnswers = [] // empty array that wrong answers will be added to.
let wrongQuestions = [] // empty array that wrong questions will be added to. This is used for display at the end

// function for displaying next question in the array to dom
function NextQuestion(index) {
	
	document.getElementById('score-modal').style.display = "none"
	
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {

        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            wrongAttempt++
            indexNumber++
			

			wrongQuestions.push(currentQuestion.question)
			
			if (currentQuestion.correctOption === "optionA")
				wrongAnswers.push(currentQuestion.optionA)
			else if (currentQuestion.correctOption === "optionB")
				wrongAnswers.push(currentQuestion.optionB)
			else if (currentQuestion.correctOption === "optionC")
				wrongAnswers.push(currentQuestion.optionC)
			else if (currentQuestion.correctOption === "optionD")
				wrongAnswers.push(currentQuestion.optionD)
			
			
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


// This first started out as just a lazy way to change the bg color. But I ran into this problem where 
// when trying to select a button, it wouldn't select while the mouse is moving. that's why I lazy
// added the checked=true to help out with drag clicks.
function changeLabelBG1() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-one").checked=true;
}
function changeLabelBG2() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two").checked=true;
}
function changeLabelBG3() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three").checked=true;
}
function changeLabelBG4() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four").checked=true;
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "<B>Bad Grades, Keep Practicing.</B>"
        remarkColor = "#e98080"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "<B>Average Grades, You can do better.</B>"
        remarkColor = "#f2b681"
    }
    else if (playerScore >= 7) {
        remark = "<B>Excellent, Keep the good work going.</B>"
        remarkColor = "#81f281"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "block"
	document.getElementById('mainQuiz').style.display = "none"
	
	document.getElementById('wrongQuestion').innerHTML = ""
	
	for (let i = 0; i < wrongQuestions.length; i++) {
		document.getElementById('wrongQuestion').innerHTML += wrongQuestions[i] + "<br />"
		document.getElementById('wrongQuestion').innerHTML += "<b>" + wrongAnswers[i] + "</b><br /><br />"
	}
	
	
	wrongQuestions[0]

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
	document.getElementById('mainQuiz').style.display = "block"
	wrongQuestions = []
	wrongAnswers = []
	
	console.log(wrongAnswers.length)
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}