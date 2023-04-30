let prompts = document.getElementsByClassName("answer-label")
let answers = document.getElementsByClassName("answer-choice")


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

let q1 = new Question("What is 1 + 2?", 3, 5, 4, 3, 8)
let q2 = new Question("What does a cow drink?", "Milk", "Water", "Milk", "Orange Juice", "Soda")

questionsList.push[q1, q2];


function renderOptions (questionVariable) {
    document.getElementById("question-text").innerHTML = questionVariable.prompt;
    for (let i = 0; i < prompts.length; i++) {
        Object.entries(questionVariable).forEach(([propName, propValue]) => {
            if (propName.includes(i)) {
                prompts[i].appendChild(document.createTextNode(propValue))
                answers[i].setAttribute("value", propValue)
            }
        })
    }
    function answerSelection () {
        for(let i = 0; i < answers.length; i++) {
            answers[i].addEventListener('change', function() {
                if (answers[i].checked == true) {
                    const confirmation = confirm("Are you sure?")
                    if (confirmation) {
                        answers[i].parentNode.style.backgroundColor = '#24146d';
                        if (answers[i].value == questionVariable.answer) {
                            alert("Good job!")
                            return true;
                        } else {
                            alert("Sorry, no cigar!")
                        }
                    } 
                }
            })
        }
    }
    answerSelection();
    /*if (answerSelection == true) {
        renderOptions(questionsList.next)
    }*/
}

renderOptions(questionsList[0])

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







