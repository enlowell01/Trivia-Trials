// Create Question class

class Question {
    constructor(prompt, answer, option0, option1, option2, option3) {
        this.prompt = prompt;
        this.answer = answer;
        this.option0 = option0;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }
}

// Set global variables

let questionsList = [];
let score = 0;

// Create question objects
/* Harper, H. (2023). 101 BEST Trivia Questions in Ranking Order [2023 Edition]. QuizBreaker. https://www.quizbreaker.com/trivia-questions#general-trivia-questions */

const q1 = new Question("What is 1 + 2?", "3", "5", "4", "3", "8")
Object.freeze(q1)

const q2 = new Question("What does a cow drink?", "Milk", "Water", "Milk", "Orange Juice", "Soda")
Object.freeze(q2)

const q3 = new Question("Which continent is also an island?", "Australia", "North America", "South America", "Africa", "Australia")
Object.freeze(q3)

const q4 = new Question("What geometric shape is used for stop signs?", "Octagon", "Octagon", "Square", "Triangle", "Circle")
Object.freeze(q4)

const q5 = new Question(`What is "cynophobia"?`, "Fear of dogs", "Fear of cats", "Fear of negativity", "Fear of the sky", "Fear of dogs")
Object.freeze(q5)

const q6 = new Question("How many languages are written from right to left?", "12", "8", "21", "12", "13")
Object.freeze(q6)

const q7 = new Question("Which animal can be seen on the Porsche logo?", "Horse", "Lion", "Horse", "Jaguar", "Eagle")
Object.freeze(q7)

const q8 = new Question("What is the name of the World's largest ocean?", "Pacific", "Indian", "Atlantic", "Arctic", "Pacific")
Object.freeze(q8)

const q9 = new Question("Who was the first woman pilot to fly solo across the Atlantic?", "Amelia Earhart", "Sunny Monroe", "Marie Curie", "Jane Austen", "Amelia Earhart")
Object.freeze(q9)

const q10 = new Question("How long is an Olympic swimming pool (in meters)?", "50 meters", "50 meters", "40 meters", "60 meters", "80 meters")
Object.freeze(q10)

questionsList.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);

// Puts current questions and answers on screen and implements ability to select an answer and proceed

function renderOptions (questionVariable) {

    let prompts = document.getElementsByClassName('answer-label')
    const answers = document.querySelectorAll('.answer-choice')
    let currentIndex = questionsList.indexOf(questionVariable)

    const solutionVar = questionVariable.answer;

    
    document.getElementById('score-tag').textContent='Your score is: '+score;

    document.getElementById("question-text").innerHTML = questionVariable.prompt;

    for (let i = 0; i < prompts.length; i++) {
        prompts[i].style.backgroundColor = '#00beff';
    }

    /* JavaScript insertAfter. javascripttutorial.net. https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/ */ 
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    for (let i = 0; i < prompts.length; i++) {
        Object.entries(questionVariable).forEach(([propName, propValue]) => {
            if (propName.includes(i)) {
                if (prompts[i].childNodes.length > 1) {
                    prompts[i].lastChild.remove();
                    insertAfter(document.createTextNode(propValue), prompts[i].lastChild)
                    answers[i].setAttribute("value", propValue)
                } else {
                    insertAfter(document.createTextNode(propValue), prompts[i].lastChild)
                    answers[i].setAttribute("value", "")
                    answers[i].setAttribute("value", propValue)
                }
            }
        })
    }

    for(let i = 0; i < answers.length; i++) {
        answers[i].setAttribute('checked', false)
    }

    let completionStatus = false;

    function continueQuiz() {
        try {
            if (completionStatus) {
            console.log(currentIndex)
            renderOptions(questionsList[currentIndex])
            }
        }
        catch(err) {
            showResults();
        }
    }

    answers.forEach(function(item) {
        console.log(questionVariable.answer)
        let internalSolution = questionVariable.answer
        console.log(questionVariable.answer)
        console.log(internalSolution)
        item.addEventListener('click', function(e) {
            console.log(internalSolution)
            let confirmation = confirm("Are you sure?")
            if (confirmation) {
                if (item.value == internalSolution) {
                    console.log(internalSolution) 
                    alert("Good job!")
                    score++;
                    currentIndex++;
                    console.log(currentIndex);
                    completionStatus = true;
                    let readyStatus = false;
                    setTimeout(() => {
                        continueQuiz()
                    }, 800)
                    item.parentNode.style.backgroundColor = '#00ff00';
                } else if (item.value !== internalSolution) {
                    console.log(internalSolution) 
                    alert("Sorry, no cigar!")
                    currentIndex++;
                    console.log(currentIndex);
                    completionStatus = true;
                    let readyStatus = false;
                    setTimeout(() => {
                        continueQuiz()
                    }, 800)
                    item.parentNode.style.backgroundColor = '#cc0000';
                }
            }
            e.stopPropagation();
            e.preventDefault();
            e.stopImmediatePropagation();
        })
    })
}   

renderOptions(questionsList[0]);

// Renders final results

function showResults() {

    let gameContent = document.getElementById('game-box').children;

    for(let i = 0; i < gameContent.length; i++) {
        if(gameContent[i].id == 'score-tag') {
            continue
        } else {
            gameContent[i].remove();
        }
    }

    let scoreTag = document.getElementById('score-tag')
    
    scoreTag.style.position = 'absolute';
    scoreTag.style.display = 'inline-block';
    scoreTag.style.textAlign = 'center';
    scoreTag.style.margin = 'auto';
    scoreTag.style.top = '250px';
    scoreTag.style.bottom = '250px';
    scoreTag.style.left = '250px';
    scoreTag.style.right = '250px';
    scoreTag.style.opacity = '1.0';
    scoreTag.style.padding = null;
    scoreTag.style.fontSize = '3em';
    scoreTag.textContent += ' Thanks for playing!';
}

/*for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('change', function () {
        answers.forEach(item => {
            if (answers[i].checked) {
                answers[i].parentNode.style.backgroundColor = '#24146d';
            } else if (answers)
        })
        if (answers[i].checked) {
            answers.forEach((item) => {
                if(!item.checked) {
                    item.parentNode.style.backgroundColor = '#00beff';
                }
            }),
            answers[i].parentNode.style.backgroundColor = '#24146d';
        } 
    })
};*/


/*answers.forEach((item) => {
    item.addEventListener('change', function() {
        if (item.checked == true) {
            item.parentNode.style.backgroundColor = '#24146d';
            alert('hello')
        } else {
            item.parentNode.style.backgroundColor = '#24146d';
        }
    })
})*/

/*function answerSelection() {
    for(let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('change', function() {
            const confirmation = confirm("Are you sure?")
            if (confirmation) {
                if (answers[i].checked == true) {
                    const confirmation = confirm("Are you sure?")
                    if (confirmation) {
                        answers[i].parentNode.style.backgroundColor = '#d30fa2';
                        if (answers[i].value == questionVariable.answer) {
                            alert("Good job!")
                            score++;
                            return true;
                        } else {
                            alert("Sorry, no cigar!")
                            return true;
                        }
                    } 
                }
        })
    }
}*/


/*function renderOptions (questionVariable) {

    document.getElementById("question-text").innerHTML = questionVariable.prompt;

    for (let i = 0; i < prompts.length; i++) {
        prompts[i].style.backgroundColor = '#00beff';
    }

    JavaScript insertAfter. javascripttutorial.net. https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/ 
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    for (let i = 0; i < prompts.length; i++) {
        Object.entries(questionVariable).forEach(([propName, propValue]) => {
            if (propName.includes(i)) {
                if (prompts[i].childNodes.length > 1) {
                    prompts[i].lastChild.remove();
                    insertAfter(document.createTextNode(propValue), prompts[i].lastChild)
                } else {
                    insertAfter(document.createTextNode(propValue), prompts[i].lastChild)
                }
                answers[i].setAttribute("value", "")
                console.log(answers[i].value)
                answers[i].setAttribute("value", propValue)
                console.log(answers[i].value)
                if (answers[i].value == questionVariable.answer) {
                    console.log('yes')
                }
            }
        })
    }

    let completionStatus = false;
    let currentIndex = questionsList.indexOf(questionVariable);
    
    function continueQuiz (ready) {
        if (completionStatus && ready) {
            currentIndex++;
            console.log(currentIndex);
            renderOptions(questionsList[currentIndex])
        }
    }

    function answerSelection() {
        for(let i = 0; i < answers.length; i++) {
            answers[i].addEventListener('change', function() {
                const confirmation = confirm("Are you sure?")
                if (confirmation) {
                    if (answers[i].checked == true && answers[i].value == questionVariable.answer) {
                        console.log('good');        
                        alert("Good job!")
                        score++;
                        completionStatus = true;
                        console.log(completionStatus);
                        console.log(answers[i].value)
                        let readyStatus = false;
                        setTimeout(() => {
                            readyStatus = confirm("Are you ready for the next question?")
                            if (readyStatus) {
                                continueQuiz(readyStatus)
                            }
                        }, 1000)
                        answers[i].parentNode.style.backgroundColor = '#00ff00';
                    } else if (answers[i].checked == true && answers[i].value !== questionVariable.answer){
                        alert("Sorry, no cigar!")
                        completionStatus = true;
                        console.log(completionStatus);
                        console.log(answers[i].value)
                        let readyStatus = false;
                        setTimeout(() => {
                            readyStatus = confirm("Are you ready for the next question?")
                            if (readyStatus) {
                                continueQuiz(readyStatus)
                            }
                        }, 1000)
                        answers[i].parentNode.style.backgroundColor = '#cc0000';
                    }
                } 
            })
        }
    }
    answerSelection();
}*/



