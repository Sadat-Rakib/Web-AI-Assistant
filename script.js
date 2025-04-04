// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
const btn = document.querySelector("#listen-btn");
const output = document.createElement("div");
output.className = "output";
document.querySelector(".container").appendChild(output);

// Function to convert text to speech
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    output.textContent = text;
}

// Function to handle recognized commands
function handleCommand(command) {
    output.textContent = `Command: ${command}`;
    if (command.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    } else if (command.includes("open calculator")) {
        speak("Opening Calculator...");
        window.open("calc:", "_blank");
    } else if (command.includes("open weather")) {
        speak("Checking weather...");
        window.open("https://www.weather.com", "_blank");
    } else if (command.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    } else if (command.includes("open twitter")) {
        speak("Opening Twitter...");
        window.open("https://www.twitter.com", "_blank");
    } else if (command.includes("open github")) {
        speak("Opening GitHub...");
        window.open("https://www.github.com", "_blank");
    } else if (command.includes("open linkedin")) {
        speak("Opening LinkedIn...");
        window.open("https://www.linkedin.com", "_blank");
    } else if (command.includes("open stackoverflow")) {
        speak("Opening Stack Overflow...");
        window.open("https://www.stackoverflow.com", "_blank");
    } else if (command.includes("open amazon")) {
        speak("Opening Amazon...");
        window.open("https://www.amazon.com", "_blank");
    } else {
        speak("Searching Google for " + command);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
    }
}

// Button click event
btn.addEventListener("click", function () {
    speak("Hello, how can I help you?");
    setTimeout(() => {
        btn.innerHTML = "Listening...👂";
        btn.classList.add("listening");
        recognition.start();
    }, 2000);
});

// Speech recognition event handlers
recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    handleCommand(command);
};

recognition.onend = () => {
    btn.innerHTML = "Start Listening";
    btn.classList.remove("listening");
};

document.addEventListener("DOMContentLoaded", function () {
    const listenBtn = document.getElementById("listen-btn");
    const outputDiv = document.getElementById("output");

    listenBtn.addEventListener("click", function () {
        listenBtn.classList.add("listening");
        outputDiv.textContent = "Listening...";
        outputDiv.classList.add("typing");

        setTimeout(() => {
            listenBtn.classList.remove("listening");
            outputDiv.classList.remove("typing");
            outputDiv.textContent = "Command received! 🎯";
        }, 6000);
    });
});

