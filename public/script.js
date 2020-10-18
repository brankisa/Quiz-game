
// Class constructor 
 class Question {
    constructor(question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }
}

// Instanciate questions /////////////////////////////////////////////
const question1 = new Question (
    question = 'What is JavaScript?',
    answer = ['A programming language', 'Video editing software'],
    correctAnswer = 1
)

const question2 = new Question (
    question = 'Is the Earth flat?',
    answer = ['Yes', 'No'],
    correctAnswer = 2
)

const question3 = new Question (
    question = 'Is Belgrade capital city of Serbia?',
    answer = ['No', 'Yes'],
    correctAnswer = 2
) 

const question4 = new Question (
    question = 'Linux is?',
    answer = ['Programming language', 'Operating system'],
    correctAnswer = 2
) 


const question5 = new Question (
    question = 'Xbox is a console?',
    answer = ['No', 'Yes'],
    correctAnswer = 2
) 


const question6 = new Question (
    question = 'Android is based on Linux?',
    answer = ['Yes', 'No'],
    correctAnswer = 1
) 


const question7 = new Question (
    question = 'Free throw in basketball is worth one point?',
    answer = ['No', 'Yes'],
    correctAnswer = 2
) 


const question8 = new Question (
    question = 'ROM is a standard connector on PC?',
    answer = ['Yes', 'No'],
    correctAnswer = 2
) 


const question9 = new Question (
    question = 'What is ReactJS?',
    answer = ['A JavaScript framework', 'Operating system'],
    correctAnswer = 1
) 


const question10 = new Question (
    question = 'Node.js is a JavaScript runtime environment?',
    answer = ['No', 'Yes'],
    correctAnswer = 2
) 


//////////////////////////////////////////////////////////////////////

// Hide input and check answer
document.querySelector(".answer-input").style.display = 'none';
document.getElementById("4").style.display = 'none';

// Putting questions in array
const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let n;


// Show random question
document.querySelector(".button-get-question").addEventListener('click', () => {
    
    document.querySelector(".answer-input").value = "";
    document.querySelector(".is-correct").textContent = "";

    n = Math.floor(Math.random() * questions.length)
       // Pozivanje funckije
       selectQuestion(questions[n]);
})


// Check answer button
document.querySelector(".button-check-answer").addEventListener('click', () => {
    let answerUser = document.querySelector(".answer-input").value;
    // Pozivanje metode za provjeru odgovora
    isCorrect(answerUser, questions[n]);

})


// Function for question select
const selectQuestion = (input) => {
    const q = input.question;
        document.getElementById("1").innerHTML = q;
        document.querySelector(".answer-input").style.display = 'block';
        document.getElementById("4").style.display = 'inline';

        let a = [];
            for (let i = 0; i < input.answer.length; i++) {
                a.push(`${i+1}: ${input.answer[i]}`);
            }
        document.getElementById("2").innerHTML = a[0];
        document.getElementById("3").innerHTML = a[1];
}

// Function for checking correct answer
const isCorrect = (input, question) => {
    if (input > question.answer.length || isNaN(input)) {
        document.querySelector(".is-correct").innerHTML = "Wrong Input!"
    }
    else if (input == question.correctAnswer) {
        document.querySelector(".is-correct").innerHTML = "CORRECT!"
    } else {
        document.querySelector(".is-correct").innerHTML = "WRONG!"
    } 
}



 