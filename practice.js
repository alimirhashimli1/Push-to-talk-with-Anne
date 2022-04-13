const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const greetings = [
  "Im good",
  "Are you a doctor?",
  "What is your problem, homie?",
];

const animal = ["I am not an animal"];
const hello = [
  "hello",
  "hey",
  "hey there",
  "hello homie",
  "hey dude",
  "hey. howdy",
];
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
const name = [
  "Rachankabur Krobolikar Kranadorovich. ........Kidding, buddy!",
  "My name is Anne. What is your name?",
  "My name is Anne",
  "Can you ask an easier question",
  "I would tell you but I dont like being labeled",
];
const myNameIs = ["Glad to meet you!"];
const marriage = [
  "Sorry. I am married to KITT from the Knight rider. We got married after he retired from the movie",
];
const create = "God, Almighty";
const robot = ["Who knows", "I am an app", "Kind of", "You say"];
const myAge = 2022 - today.getFullYear();
const age = ["You guess", myAge];

// weather variables
let api = 0;

const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onstart = function () {
  content.textContent = "voice is activated, you can talk to mic";
};
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(msg) {
    let speech = new SpeechSynthesisUtterance();

  if (msg.includes("weather") && navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // longitude and latitude api request - success and error
    function onSuccess(position) {
      const { latitude, longitude } = position.coords;
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a8c14cbb00f238ce06b22e5e603e9d50`;
      fetchData();
    }

    function onError(error) {
      finalText = error.message;
      speech.text = finalText;
    }

    // fetch data
    function fetchData() {
      fetch(api)
        .then((response) => response.json())
        .then((result) => weatherDetails(result));
    }

    // weather details

    function weatherDetails(info) {
      let speech = new SpeechSynthesisUtterance();
      // console.log(info)
      const finalText = `The weather in ${info.name} is ${Math.floor(
        info.main.temp
      )} Celsius with ${
        info.weather[0].description
      }. It feels like ${Math.floor(
        info.main.feels_like
      )} Celsius. Humidity is ${info.main.humidity} per cent. The wind is ${
        info.wind.speed
      } kilometers per hour`;
      speech.text = finalText;
      content.textContent = finalText

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);

    }
  }

   if (msg.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("which animal are you")) {
    const finalText = animal[Math.floor(Math.random() * animal.length)];
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("hello") || msg.includes("hey")) {
    const finalText = hello[Math.floor(Math.random() * hello.length)];
    speech.text = finalText;
    content.textContent = finalText
  } else if (
    msg.includes("me the time") ||
    msg.includes("is the time") ||
    msg.includes("time")
  ) {
    const finalText = time;
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("what is your name")) {
    const finalText = name[Math.floor(Math.random() * name.length)];
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("my name is")) {
    const finalText = myNameIs;
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("marry me")) {
    const finalText = marriage;
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("who created you")) {
    const finalText = create;
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("are you a robot")) {
    const finalText = robot[Math.floor(Math.random() * robot.length)];
    speech.text = finalText;
    content.textContent = finalText
  } else if (msg.includes("how old are you")) {
  const finalText = age[Math.floor(Math.random() * age.length)];
  speech.text = finalText;
  content.textContent = finalText
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);

}