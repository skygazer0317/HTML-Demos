class QuestionStatement{
    Question;
    option1;
    option2;
    option3;
    option4;
    correctanswer
    
    constructor(Question,option1,option2,option3,option4){
        this.Question=Question;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        
    }
    get Question(){
        return this.Question
    }
    get option1(){
        return this.option1
    }
    get option2(){
        return this.option2
    } 
    get option3(){
        return this.option3
    }
    get option4(){
        return this.option4
    }
    get correctanswer(){
        return this.correctanswer
    }
    set option1(option1){
        this.option1=option1
    }
    set option2(option2){
        this.option1=option2
    }
    set option3(option3){
        this.option3=option3
    }
    set option4(option4){
        this.option4=option4
    }
    set correctanswer(correctanswer){
        this.correctanswer=correctanswer
    }
}

function checkAnswer(qno){
if(qno===1){
    if(document.getElementById('option1').checked){
        console.log('your answer is correct')
    }
    else{
        console.log("wrong answer")
    }
}
if(qno===2){
    if(document.getElementById('option2').checked){
        console.log('your answer is correct')
    }
    else{
        console.log("wrong answer")
    }
}

}


let q1= new QuestionStatement("What is the capital of India?","New Delhi","Mumbai","Chennai","Kolkata","New Delhi")
let q2= new QuestionStatement("What is the captial of Tamil Nadu? ","New Delhi","Bangalore","Chennai","Hyderbad","Chennai")
let question=[q1,q2]
let content =''
for(let q of question){
    content=content+
    `<br> ${q.Question}<br>
    <input type='radio' id='option1' name='option' value='${q.option1}'>${q.option1} <br>
    <input type='radio' id='option2' name='option' value='${q.option2}'>${q.option2} <br>
    <input type='radio' id='option1' name='option' value='${q.option3}'>${q.option3} <br>
    <input type='radio' id='option1' name='option' value='${q.option4}'>${q.option4} <br> `
}
document.getElementById("Question").innerHTML=content;