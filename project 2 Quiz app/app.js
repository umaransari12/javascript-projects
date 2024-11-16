const question = [
    {
        'que' : 'Which of the following is markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'javascript',
        'd' : 'PhP',
        'correct' : 'a'
    },
    {
        'que' : 'What year was java script launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above',
        'correct' : 'b'
    },
    {
        'que' : 'What does CSS stand for?',
        'a' : 'Hyper Text Markup Language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Jason Object Notation',
        'd' : 'Object Oreanted Language',
        'correct' : 'b'
    },

]

let index=0;
let total=question.length;
let right=0,
    wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset();
   const data=question[index]
   console.log(data)
   quesBox.innerText = ` ${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () =>{
    const data=question[index];
  const ans=getAnswer()
  if(ans===data.correct){
      right++;
  } else{
    wrong++;
  }
  index++;
  loadQuestion();
    return;
}

const getAnswer =()=>{
    let answer;
    optionInputs.forEach((input) => {
        if(input.checked){
            answer= input.value;
        }
    }
)
return answer;
}

const reset = () =>{
    optionInputs.forEach((input)=>{
     input.checked=false;
    }
)
}


const endQuiz = () =>{
    document.getElementById("box").innerHTML= `
    <div style="text-align:center">
    <h3> Thankyou for playing the Quiz. </h3>
    <h2> ${right} / ${total} are correct. </h2>
    </div>
    `
}


loadQuestion();