const joke = document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

function getJoke() {
    joke.classList.remove("fade");
     fetch(url)
    .then(data => data.json())
    .then(value => {
        joke.innerText = `${value.joke}`;
        joke.classList.add("fade");
    });
} 
getJoke();