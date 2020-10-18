// Getting questions from json file. For this to work you need to have live-server enabled.


document.querySelector(".answer-input").style.display = 'none';
document.getElementById("4").style.display = 'none';
let n;

// Fetching data from json file
fetch('./data/questions.json')
    .then(results => results.json())
    .then(questions => {
         
// Show random question
document.querySelector(".button-get-question").addEventListener('click', () => {
    
    document.querySelector(".answer-input").value = "";
    document.querySelector(".is-correct").textContent = "";

    n = Math.floor(Math.random() * questions.length)
       // Function call
       selectQuestion(questions[n]);
})


// Check answer button
document.querySelector(".button-check-answer").addEventListener('click', () => {
    let answerUser = document.querySelector(".answer-input").value;
    // Function call
    isCorrect(answerUser, questions[n]);
    });
});

// Function for selecting questions
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


// Function for checking answer
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