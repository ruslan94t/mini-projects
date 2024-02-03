

const slidePage = document.querySelector('.slidepage');
const firtNextBtn = document.querySelector('.nextBtn');

const prevBtnSec = document.querySelector('.prev-1');
const prevBtnThird = document.querySelector('.prev-2');
const prevBtnFourth = document.querySelector('.prev-3');
const nextBtnSec = document.querySelector('.next-1'); 
const nextBtnThird = document.querySelector('.next-2'); 
const submit = document.querySelector('.submit'); 


const progressText = document.querySelectorAll('.step p');

const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');


let max = 4;
let current = 1;

console.log(bullet[current-1]);
firtNextBtn.addEventListener('click', function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current+=1;
})
nextBtnSec.addEventListener('click', function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current+=1;
})
nextBtnThird.addEventListener('click', function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current+=1;
})

submit.addEventListener('click', function(){
    bullet[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    progressText[current-1].classList.add('active');
    current+=1;
    setTimeout(function(){
          alert('You"re successfully Signed up');
          location.relode();
    }, 800)
})

prevBtnSec.addEventListener('click', function(){
    slidePage.style.marginLeft = "0%";
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current-=1;
   
})
prevBtnThird.addEventListener('click', function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current-=1;
})
prevBtnFourth.addEventListener('click', function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    progressText[current-2].classList.remove('active');
    current-=1;
})













// const synth = window.speechSynthesis;


// function populateVoiceList() {
//     if (typeof speechSynthesis === "undefined") {
//       return;
//     }
  
//     const voices = speechSynthesis.getVoices();
  
//     for (let i = 0; i < voices.length; i++) {
//       const option = document.createElement("option");
//       option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
//       if (voices[i].default) {
//         option.textContent += " — DEFAULT";
//       }
  
//       option.setAttribute("data-lang", voices[i].lang);
//       option.setAttribute("data-name", voices[i].name);
//       document.getElementById("voiceSelect").appendChild(option);
//     }
//   }
//   populateVoiceList();
// if (
//   typeof speechSynthesis !== "undefined" &&
//   speechSynthesis.onvoiceschanged !== undefined
// ) {
//   speechSynthesis.onvoiceschanged = populateVoiceList;
// }







// const utterance1 = new SpeechSynthesisUtterance(
//   "Привет Это программа работает",
// );
// const utterance2 = new SpeechSynthesisUtterance(
//   "We should say another sentence too, just to be on the safe side.",
// );

// synth.speak(utterance1);
// synth.speak(utterance2);

// const amISpeaking = synth.speaking; // will return true if utterance 1 or utterance 2 are currently being spoken