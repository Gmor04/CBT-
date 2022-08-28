
let corectAnswer = ['A','B','A','A','A','B','A','B','B','A'];
let form = document.querySelector('.foorm')
let show = document.querySelector('.dispala')
let show2 = document.querySelector('.dis')


form.addEventListener('submit', cbtt )


function cbtt() {
   
    let score = 0;

    let userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]
    // console.log(userAnswer);


    userAnswer.forEach((answer, index) => {
        if (answer === corectAnswer[index]) {
            score += 1
        }
    })
    // console.log(score);

    let result = Math.floor( (score/ 10) * 100)

    // console.log(result);

    scrollTo(0, 0)
   


    //Animation of score

    let output = 0;

    let timer = setInterval(() => {
     show2.innerHTML = `SCORE ${output}%`
    if(result > output){
        output++
        show2.innerHTML = `SCORE ${output}%`
     }
     
    if(result == output){
        clearInterval(timer)
    }
    }, 10);
   
    

    
    setTimeout(() => {
        if (result <= 50 ) {
            show.innerHTML = `Olodo oshi nah ${result}% you score 😂 `
        } else {
            show.innerHTML = `You try small you have ${result}% 🤝 <br> if nah exam malpratice you do we will soon catch you 🙄.  `
        }
    }, 1000);

// form.disabled()
    form.reset()
    
    
}



// Clicking on submit

form.addEventListener('submit', e=> {
    e.preventDefault()

    cbtt()

    clearInterval(t)
    tiiimee.innerHTML = `${0}min:${0}sec`
    
    return
})



//COUNTDOWN TIMER
let startTime = 0.34;
let tiiimee = document.querySelector('.counttimee');
let time = startTime * 60 ;

 let t = setInterval(updateCountdown, 1000);

function updateCountdown() {
    let minutes = Math.floor(time/60);
    let second = Math.floor(time % 60)

    tiiimee.innerHTML = `${minutes}min:${second}sec`
    time--

    if (time === 0 || time < 0) {

       time = 0
        tiiimee.innerHTML = ` Time Up 😂`
        cbtt()
        clearInterval(t)
        return
    }

}

