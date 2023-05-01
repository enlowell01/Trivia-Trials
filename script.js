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

let questionsList = [];
let score = 0;

const q1 = new Question("What is 1 + 2?", "3", "5", "4", "3", "8")
Object.freeze(q1)

const q2 = new Question("What does a cow drink?", "Milk", "Water", "Milk", "Orange Juice", "Soda")
Object.freeze(q2)

const q3 = new Question("What continent is also an island?", "Australia", "North America", "South America", "Africa", "Australia")
Object.freeze(q3)


questionsList.push(q1, q2, q3);

function renderOptions (questionVariable) {

    let prompts = document.getElementsByClassName('answer-label')
    let answers = document.getElementsByClassName('answer-choice')

    const solutionVar = questionVariable.answer;
    console.log(solutionVar);
    
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
                    answers[i].setAttribute("value", "")
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
    let currentIndex = questionsList.indexOf(questionVariable);

    console.log(solutionVar);
    console.log(questionVariable.answer)
    function continueQuiz() {
        if (completionStatus) {
            currentIndex++;
            console.log(currentIndex)
            renderOptions(questionsList[currentIndex])
        }
    }

    for(let i = 0; i < answers.length; i++) {
        prompts[i].addEventListener('click', function(e) {
            //let confirmation = confirm("Are you sure?")
            e.stopPropagation();
            e.preventDefault();
            e.stopImmediatePropagation();
            //if (confirmation) {
            console.log(solutionVar)
            if (answers[i].value == solutionVar) {   
                alert("Good job!")
                score++;
                completionStatus = true;
                let readyStatus = false;
                setTimeout(() => {
                    continueQuiz()
                }, 800)
                answers[i].parentNode.style.backgroundColor = '#00ff00';
            } else if (answers[i].value !== solutionVar) {
                console.log(solutionVar)
                console.log(answers[i].value == solutionVar);
                console.log(answers[i].value)
                alert("Sorry, no cigar!")
                completionStatus = true;
                let readyStatus = false;
                setTimeout(() => {
                    continueQuiz()
                }, 800)
                answers[i].parentNode.style.backgroundColor = '#cc0000';
            }
            //} 
        //})
        })
    }   
}

renderOptions(questionsList[0]);

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



