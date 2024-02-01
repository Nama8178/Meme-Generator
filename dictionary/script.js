const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
let song = document.getElementById("sound");

function get() {  
    let word = document.getElementById("inp").value; 
    fetch(`${url}${word}`)
    .then(data => data.json())
    .then((val) => {
        document.getElementById("sample").innerText = word;
        document.getElementById("speech").innerText = `${val[0].meanings[0].partOfSpeech}/${val[0].phonetic}`;
        document.getElementById("op").innerText = `${val[0].meanings[0].definitions[0].definition}`;
        document.getElementById("para").innerText = `${val[0].meanings[0].definitions[0].example}`;
        song.src = `${val[0].phonetics[0].audio}`;
    })
}
function playSound(){
     song.play();
}