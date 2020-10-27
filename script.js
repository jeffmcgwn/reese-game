const main = document.querySelector('main');
const scoreEl = document.querySelector('score');
const animation = document.querySelector('.animation')
const showGame = document.querySelector('.showGame')
const intro = document.querySelector('.intro')
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const question = document.getElementById('question');
const playAgain = document.getElementById('playAgain');
const clickHere = document.getElementById('clickhere')

var score = 0;
  muted=false;
  var endTheme = new Audio('./sounds/endtheme.mp3')
  var theme = new Audio('./sounds/mario.mp3');




function playYay(){
var yay = new Audio('./sounds/yay.mp3');
yay.play();
};

function playBoo(){

  var boo = new Audio('./sounds/boo.mp3');
  var boo2 = new Audio('./sounds/boo2.mp3');
  var boo3 = new Audio('./sounds/boo3.mp3');
  var rand = Math.floor(Math.random() * 3)

  if(rand === 0) {
  boo.play();
  } else if (rand === 1) {
  boo2.play();
  } else if (rand === 2) {
    boo3.play();
  }
  };

const data = [
    {
      image: './img/tom.PNG',
      text: "Dada"
    },
    {
      image: './img/melissa.PNG',
      text: "Mama"
    },
    {
      image: './img/janet.PNG',
      text: "Nana"
    },
    {
      image: './img/dad.PNG',
      text: "Papa"
    },
    {
      image: './img/grampy.jpg',
      text: "Grampy"
    },
    {
      image: './img/yiayia.jpg',
      text: "Yiayia Patenaude"
    },
    {
      image: './img/mike.jpg',
      text: "Uncle Mike"
    },
    {
      image: './img/jeff.PNG',
      text: "Uncle Jeff"
    },
    {
      image: './img/kevin.jpg',
      text: "Uncle Kevin"
    },
    {
      image: './img/kait.jpg',
      text: "Kait"
    },
    {
      image: './img/danielle.jpg',
      text: "Danielle"
    },
    {
      image: './img/kaylyn.jpg',
      text: "Kaylyn"
    },
    {
      image: './img/max.jpg',
      text: "Max"
    },
    {
      image: './img/mia.jpg',
      text: "Mia"
    },
    {
      image: './img/stella.jpg',
      text: "Stella"
    },
    {
      image: './img/savannah.jpg',
      text: "Savannah"
    },
    {
      image: './img/nanap.jpg',
      text: "Nana Patenaude"
    },
    {
      image: './img/connie.jpg',
      text: "Yiayia Connie"
    },
    {
      image: './img/wally.jpg',
      text: "Wally"
    },
    {
      image: './img/lizzy.jpg',
      text: "Aunt Lizzy"
    },
    {
      image: './img/emily.jpg',
      text: "Aunt Emily"
    },
    {
      image: './img/unclechris.jpg',
      text: "Uncle Chris"
    }
  ];

  shuffle(data);
  // Randomizers

  let randomData = [data[0], data[1], data[2], data[3], data[4], data[5]];
  let randomFromArray = Math.floor(Math.random() * 6);
  question.innerHTML = `<h1>Where's ${randomData[randomFromArray].text}?</h1>`
  randomData.forEach(createBox);

  function newQuestion() {

     randomData = [data[6], data[7], data[8], data[9], data[10], data[11]];
  
    randomFromArray = Math.floor(Math.random() * 6);
    question.innerHTML = `<h1>Where's ${randomData[randomFromArray].text}?</h1>`
    randomData.forEach(createBox);
    shuffle(data);
    askQuestion();
  }

  function askQuestion(){
  setTextMessage(`Where's ${randomData[randomFromArray].text}?`);
  speakText();
  }

function reloadPage(){
  location.reload()
}
let gif;
function randomGif(){
  let num = Math.floor(Math.random() * 10)

  if (num === 0) {
    gif = 'https://media.giphy.com/media/EgyISdpQIePYs/source.gif'
  } else if (num === 1) {
    gif = 'https://thumbs.gfycat.com/BlackandwhitePoshAnemone.webp'
  } else if (num === 2) {
    gif = 'https://thumbs.gfycat.com/CluelessTanArawana.webp'
  } else if (num === 3) {
    gif = 'https://thumbs.gfycat.com/WideeyedColorlessArabianhorse.webp'
  } else if (num === 4) {
    gif = 'https://thumbs.gfycat.com/PolishedNiceHairstreakbutterfly.webp'
  } else if (num === 5) {
    gif = 'https://thumbs.gfycat.com/EachImperfectBoar.webp'
  } else if (num === 6) {
    gif = 'https://thumbs.gfycat.com/JollyPartialGossamerwingedbutterfly.webp'
  } else if (num === 7) {
    gif = 'https://thumbs.gfycat.com/VictoriousSoggyGlassfrog.webp'
  } else if (num === 8) {
    gif = 'https://thumbs.gfycat.com/AmusedTallCirriped.webp'
  } else if (num === 9) {
    gif = 'https://thumbs.gfycat.com/BewitchedClearDogwoodclubgall.webp'
  } else if (num === 10) {
    gif = 'https://thumbs.gfycat.com/FatSlowAmericanbobtail.webp'
  }
}
function win() {
  randomGif();
  scoreEl.innerHTML = `<h1>YOU WIN!</h1>`
  main.innerHTML = ``;
  question.innerHTML = ``;
  theme.pause();
  endTheme.play();
  animation.innerHTML = `<img src="${gif}">`
  playAgain.innerHTML = `<h2>Play again!</h2>`
  toggleBtn.style.display = 'none';

}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

  // Create speech boxes
  function createBox(item) {
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');

    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();
        var myVar;
        if (text === randomData[randomFromArray].text) {
          score += 1;
          setTimeout(function(){box.classList.add('rotateBox')}, 1000)
          setTimeout(function(){main.classList.add('clearScreen')}, 2000)
          setTimeout(function() {main.innerHTML = ``}, 3000)
          setTimeout(function(){main.classList.remove('clearScreen')}, 3000)
          setTimeout(function(){box.classList.remove('rotateBox')}, 3000)
          playYay();
          // setTimeout(reloadPage, 4000)

          console.log(randomData[randomFromArray].text)
          console.log(score)
          if (score === 10) {
            setTimeout(win, 3000)
          } else {
          scoreEl.innerHTML = `<h2>SCORE: ${score}`
          setTimeout(newQuestion, 3000)
          }
        } else {
          playBoo();

        }

        // Add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    })
    // @todo - speak event

    main.appendChild(box);
 }

 
 // Init speech synth
 const message = new SpeechSynthesisUtterance();

 // Store voices
 let voices = [];

 function getVoices() {
     voices = speechSynthesis.getVoices();

     voices.forEach(voice => {
         const option = document.createElement('option')

         option.value = voice.name;
         option.innerText = `${voice.name} ${voice.lang}`;

         voicesSelect.appendChild(option);
     })
 }


// Set text
function setTextMessage(text) {
    message.text = text;
}

// Speak text
function speakText() {
    speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}
 // Voices changed
 speechSynthesis.addEventListener('voiceschanged', getVoices);

 // Toggle text box
 toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

  // Close button
  closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

  // Change voice
  voicesSelect.addEventListener('change', setVoice);

  // Play again
  playAgain.addEventListener('click', function(){
    score = 0;
    endTheme.pause();
    theme.play();
    newQuestion();
    animation.innerHTML = ``;
    playAgain.innerHTML = ``;
    scoreEl.innerHTML = `<h2>SCORE: ${score}`;
    toggleBtn.style.display = 'flex';
  })

  // Read text button
  readBtn.addEventListener('click', () => {
      setTextMessage(textarea.value);
      speakText();
  })

  // Click here
  clickHere.addEventListener('click', () => {
    intro.style.display = 'none';
    showGame.style.display = 'block';
    setTimeout(function(){theme.play()}, 200);
    askQuestion();
  })
  // Score
scoreEl.innerHTML = `<h2>SCORE: ${score}`


  getVoices();

  playTheme();