const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const speakBtn = document.getElementById('speak')

const music1 = document.getElementById('music1');
const music2 = document.getElementById('music2');
const music3 = document.getElementById('music3');
const music4 = document.getElementById('music4');


//speach Recognition

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const recognition = new SpeechRecognition();

//sr start
recognition.onstart = function (){
    console.log("Meena is Live");
}

//sr result
recognition.onresult = function(event){
    let current = event.resultIndex;
    let recorded = event.results[current][0].transcript;
    recorded = recorded.toLowerCase();   
    
    console.log(`Me : ${recorded}`)
    
    document.getElementById("voice-box").classList.remove("hidden");
    document.getElementById("speechInput").value = recorded;
     
    if(recorded.includes("hello")){
        
        let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let zone;
  
  if(hours>=12 && hours<17){
      zone = "GOOD AFTER NOON"
  }else if(hours>=17 && hours<24){
      zone = "GOOD EVENING"
  }else{
      zone = "GOOD MORNING"
  }
        
        readOut(`hello sir,${zone}`)
    }
    
    if(recorded.includes("what is your name")){
        readOut("hello sir i am meena,Developed by Anshu")
    }
    if(recorded.includes("love me")){
        readOut("Yes,I love you so much")
    }
    if(recorded.includes("i love you")){
        readOut("I love you to")
    }
    if(recorded.includes("who is your developer")){
        readOut("I am developed by Anshu")
    }
    if(recorded.includes("open youtube")){
        readOut("opening youtube.")
        window.open("https://www.youtube.com")
    }
    if(recorded.includes("open google")){
        readOut("opening google")
        window.open("https://www.google.com")
    }
    if(recorded.includes("open gmail")){
        readOut("opening gmail")
        window.open("https://www.gmail.com")
    }
    if(recorded.includes("play my favourite")){
        readOut("playing your favourite song")
        window.open("https://open.spotify.com/track/4eFnk661RcdOuH9ajiTO3j?si=GCW7aFIQT-eP6pvMQSlCGA")
    }
    if(recorded.includes("search on google")){
        //readOut("searching on google")
            
        let input = recorded.split("");
        input.splice(0,17);
        input = input.join("");
        console.log(input)
        
        readOut(`searching${input}`)
        
        window.open(`https://www.google.com/search?q=${input}`)
    }
    if(recorded.includes("search on youtube")){
        
            
        let input = recorded.split("");
        input.splice(0,18);
        input = input.join("");
        console.log(input)
        
        readOut(`searching for${input}`)
        
        window.open(`https://m.youtube.com/results?sp=mAEA&search_query=${input}`)
    }
    if(recorded.includes("time")){
        
        let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let zone;
  
  if(hours>12){
      zone="PM"
  }else{
      zone="AM"
  }
  if(hours>12){
      hours-=12
  }
    readOut(`it's ${hours}:${minutes} ${zone},Sir`)
        
    }
    if(recorded.includes("instagram")){
        readOut("opening your instagram profile")
        window.open("https://www.instagram.com/anshu_pandey_g?igsh=MmtubTFlMHg2Zmxs")
    }
    if(recorded.includes("dark")){
        readOut("Turning on Dark mode")
        
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('h4').style.color="white";
    }
    if(recorded.includes("light")){
        readOut("Turning on Light mode")
        
        document.querySelector('body').style.backgroundColor="white";
        document.querySelector('h4').style.color="black";
    }
    if(recorded.includes("play sad song")){
        readOut("playing sad song")
        music1.play();
    }
    if(recorded.includes("play another sad song")){
        music2.play();
    }
    if(recorded.includes("play another song")){
        music3.play();
    }
    if(recorded.includes("play dance song")){
        music4.play();
    }
    
    //calculator
    if(recorded.includes("calculate") || recorded.includes("do calculation") || recorded.includes("open calculator")){
        
        readOut("I am ready to calculate.")
        
            
        
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true; // Continuously listen for speech
recognition.lang = 'en-US'; // Set language to US English //en-US

const synth = window.speechSynthesis;

recognition.onresult = function(event) {
  const result = event.results[event.results.length - 1][0].transcript.trim();
  console.log('Me :', result);
  
//Check

document.getElementById("voice-box").classList.remove("hidden");
document.getElementById("speechInput").value = recorded;

  const answer = calculate(result);
  speak(`The answer is ${answer}`);


  
};

function calculate(command) {
  command = command.toLowerCase().replace(/[^0-9+\-*/]/g, ''); // Sanitize input
  try {
    return eval(command); // Evaluate the arithmetic expression
  } catch (error) {
    return 'Sorry, I couldn\'t understand the command.';
  }
}

function speak(text) {
    console.log(`answer is : ${text}`)
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

recognition.start();


    }
    //Boomer
    if(recorded.includes("boom on")){
        readOut("Boomer has been start shortely");
        
        let input = recorded.split("");
        input.splice(0,8);
        input = input.join("");
        readOut(`Boomber has going to start on ${input}`)
        input = input.replace(/\s/g, '');

        
        window.open(`https://anshucoder.000webhostapp.com/Boom/boomer.php?no=${input}&submit=submit`)
        
    }
    //Movies Download
    if(recorded.includes("search a movie")){
        
        let input = recorded.split("");
        input.splice(0,15);
        input = input.join("");
        readOut(`searching for ${input}`)
        input = input.replace(/\s+/g, '+');
        
        window.open(`https://filmyfly.tel/site-1.html?to-search=${input}`)


    }
    if(recorded.includes("what you think about me")){
        readOut("you can do anything. just trust in yourself")
    }   
    
    
    
}



//sr stop

recognition.onend = function (){
    //console.log("vr stop");
}

//sr continue
recognition.continuous = true;


startBtn.addEventListener("click",() => {
    recognition.start();
    
    //Music Pause
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
});

stopBtn.addEventListener("click",() => {
    recognition.stop();
    
    //Music Pause
    music1.pause();
    music2.pause();
    music3.pause();
    music4.pause();
});


// function readOut(message){
    
//     const speech = new SpeechSynthesisUtterance();
//     const allVoices = speechSynthesis.getVoices();
//     speech.lang = 'en-US';
//     speech.text = message;
//     speech.voice = allVoices[36];
//     speech.volume = 1;
//     window.speechSynthesis.speak(speech);
    
//     console.log(`Meena => ${message}`)
// }

function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    const allVoices = window.speechSynthesis.getVoices();
    speech.lang = 'en-US';
    speech.text = message;
    speech.voice = allVoices.find(v => v.lang === 'en-US') || allVoices[0];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    showResponseTyping(message);
    console.log(`Meena => ${message}`);
}

function showResponseTyping(message) {
    const responseBox = document.getElementById('response-box');
    const responseOutput = document.getElementById('responseOutput');
    responseBox.classList.remove('hidden');
    responseOutput.textContent = ""; // Clear previous

    let index = 0;
    const typingSpeed = 40;

    function typeChar() {
        if (index < message.length) {
            responseOutput.textContent += message.charAt(index);
            index++;
            setTimeout(typeChar, typingSpeed);
        }
    }

    typeChar();
}



//example




window.onload = function(){
    readOut("Hello sir nice to meet you again");
};