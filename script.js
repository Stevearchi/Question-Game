let score = 0;
let questions = [
    {
        question: "Who is the boat point guard?",
        answer: "johnson"
    },
    {
        question: "Who is the 2nd boat point guard?",
        answer: "stockton"
    },
    {
        question: "who is the boat defensive player?",
        answer: "gobert"
    },
    {
        question: "Who is the boat shooting guard?",
        answer: "jordan"
    },
    {
        question: "Who is the boat small forward?",
        answer: "james"
    },
    {
        question: "Who is the boat power forward?",
        answer: "malone"
    },
    {
        question: "Who is the boat center",
        answer: "Abdul-Jabbar"
    }

]

for (a=0; a<questions.length; a++){
    let answer = prompt(questions[a].question)
    if (answer === questions[a].answer){
        alert("Correct!")
        score++;
    }
    else
        alert("incorrect")
    
}

alert ("Your score is " + score + "/7")
