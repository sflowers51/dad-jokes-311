const jokeDiv = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", loadJoke );

loadJoke();

sampledata = {
    "joke":"What did the mama bullet say to the daddy bullet? We're having a BB.",
    "likes" : 45
};
    
async function loadJoke() {

    const config = {
        headers : {
            Accept: "application/json"
        }
    };

    const result = await fetch("https://icanhazdadjoke.com", config);
    const data = await result.json();

    jokeDiv.innerHTML = data.joke;

}