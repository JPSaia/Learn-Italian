const questions = [
    {
        question: "I speak",
        optionA: "Lui legge",
        optionB: "Lui parla",
        optionC: "Io leggo",
        optionD: "Io parlo",
        correctOption: "optionD"
    },

    {
        question: "Tu dormi",
        optionA: "I sleep",
        optionB: "You sleep",
        optionC: "I eat",
        optionD: "You eat",
        correctOption: "optionB"
    },

    {
        question: "He eats and she swims",
        optionA: "Lei mangia e lei nuota",
        optionB: "el come y ella nada",
        optionC: "Io mangio e tu nuoti",
        optionD: "Lui mangia e lei nuota",
        correctOption: "optionD"
    },

    {
        question: "They have food",
        optionA: "Loro tengan cibo",
        optionB: "Ho Cibo",
        optionC: "Loro hanno cibo",
        optionD: "Loro averan cibo",
        correctOption: "optionC"
    },

    {
        question: "I understand",
        optionA: "Io nuoto",
        optionB: "Io ho",
        optionC: "Io entenio",
        optionD: "Io capisco",
        correctOption: "optionD"
    },

    {
        question: "I am not fat",
        optionA: "Non sono grasso/a",
        optionB: "Non soi grasso/a",
        optionC: "Non soy gordo/a",
        optionD: "Non sono gordo/a",
        correctOption: "optionA"
    },

    {
        question: "____ siete tutti simpatici",
        optionA: "Io",
        optionB: "Lui",
        optionC: "Voi",
        optionD: "Loro",
        correctOption: "optionC"
    },

    {
        question: "He works?",
        optionA: "Lui lavora",
        optionB: "Lui lavore",
        optionC: "Lui lavor",
        optionD: "Lui trabaja",
        correctOption: "optionA"
    },

    {
        question: "Noi corriamo",
        optionA: "We chat",
        optionB: "She chats",
        optionC: "She runs",
        optionD: "We run",
        correctOption: "optionD"
    },

    {
        question: "I am 26 years old",
        optionA: "Abbiamo ventisei anni",
        optionB: "Hai ventisei anni",
        optionC: "Lui ha ventisei anni",
        optionD: "Ho ventisei anni",
        correctOption: "optionD"
    },

    {
        question: "She sings",
        optionA: "Lui canta",
        optionB: "tu canti",
        optionC: "Lei canta",
        optionD: "Io canto",
        correctOption: "optionC"
    },

    {
        question: "You drive",
        optionA: "Tu guidi",
        optionB: "Lui guida",
        optionC: "Tu guidis",
        optionD: "Tu guidas",
        correctOption: "optionA"
    },


    {
        question: "Ecrivono",
        optionA: "I write",
        optionB: "They write",
        optionC: "He writes",
        optionD: "We write",
        correctOption: "optionB"
    },

    {
        question: "We love",
        optionA: "Amo",
        optionB: "Che ami",
        optionC: "ama",
        optionD: "Amiamo",
        correctOption: "optionD"
    },

    {
        question: "You cook",
        optionA: "Tu cucini",
        optionB: "Io cucino",
        optionC: "Lui cucina",
        optionD: "Noi cuciniamo",
        correctOption: "optionA"
    },

    {
        question: "We are messy",
        optionA: "Sono disordinato/a",
        optionB: "Sei disordinato/a",
        optionC: "Siamo disordinati",
        optionD: "Loro disordinati",
        correctOption: "optionC"
    },

    {
        question: "The dog is blue",
        optionA: "Il cane è blu",
        optionB: "Il cani sono blu",
        optionC: "Il pero e blu",
        optionD: "Il pero sono blu",
        correctOption: "optionA"
    },

    {
        question: "I bring flowers",
        optionA: "Io trao flori",
        optionB: "Porti fioros",
        optionC: "Io porto fiori",
        optionD: "Io trai flori",
        correctOption: "optionC"
    },

    {
        question: "Mangia bistecca",
        optionA: "We eat steak",
        optionB: "You eat steak",
        optionC: "I eat steak",
        optionD: "He eats steak",
        correctOption: "optionD"
    },

    {
        question: "I use soap",
        optionA: "Io uso il sapone",
        optionB: "Uso il jabon",
        optionC: "Lui usa il jabon",
        optionD: "Lui usa il sapone",
        correctOption: "optionA"
    },

    {
        question: "You all",
        optionA: "Tu",
        optionB: "Io",
        optionC: "Loro",
        optionD: "Voi",
        correctOption: "optionD"
    },

    {
        question: "You all learn italian",
        optionA: "Tu imparai l'italiano",
        optionB: "Voi imparate l'italiano",
        optionC: "Io imparo l'italiano",
        optionD: "Loro imparano l'italiano",
        correctOption: "optionB"
    },

    {
        question: "L'uccello vola",
        optionA: "The ant crawls",
        optionB: "The bird flies",
        optionC: "He flies",
        optionD: "I fly",
        correctOption: "optionB"
    },

    {
        question: "L'insegnante insegna",
        optionA: "The student learns",
        optionB: "I eat salad",
        optionC: "The teacher teaches",
        optionD: "A general orders",
        correctOption: "optionC"
    },

    {
        question: "I don't know",
        optionA: "no io se",
        optionB: "nonio seo",
        optionC: "Non lo so",
        optionD: "no seo",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
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
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
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
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}