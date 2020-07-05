const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings =['Leave me Alone!', 'Why do you care, I saw you with that beep',"I'm good you little peace of love",
"Doing good Homeboi"];

const weather=["Why do you care? All day you stay at home","It's nice, now go find a job","For you it's bad, because you are jobless"];

btn.addEventListener('click',()=>{
    recognition.start();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = ()=>{
    console.log("Voice is Activates!");
    
}


recognition.onresult=(event)=>{
    const current = event.resultIndex;
    const transcript = event.result[current][0].transcript;
    content.textContent = transcript;
    readOutAloud(transcript);
}

const readOutAloud = (message)=>{
    const speech = new SpeechSynthesisUtterance();
    speech.text= "Sorry! I did not get you! Speak Clearly you freak!";
    if(message.includes('How are you')){
        const final = greetings[Math.floor(Math.random()*greetings.length)];
        speech.text=final;
    }
    if(message.includes('How is the Weather')){
        const final = weather[Math.floor(Math.random()*greetings.length)];
        speech.text=final;
    }
    speech.pitch=1;
    speech.voice=1;
    speech.volume=1;

    window.speechSynthesis.speak();
}
