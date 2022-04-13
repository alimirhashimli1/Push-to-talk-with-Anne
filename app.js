const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition()

recognition.onstart = function() {
    console.log('voice is actived you can talk to microphone')
}

recognition.onresult = function(event) {
    console.log(event)
}

btn.addEventListener('click', ()=> {
    recognition.onstart()
})