// define the checkAnswer function

function checkAnswer() {
    //Identify the correct answer

    let correctAnswer = "4";

    //Retrieve the User’s Answer from selected radio buttons

    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

     //Check Compare the User’s Answer with the Correct Answer

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);