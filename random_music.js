var groups = ["BTS", "Ateez", "Dreamcatcher", "Itzy", "Mamamoo", "Blackpink", "Kard", "Everglow", "Enhypen", "Le Sserafim"]
let resultEl = document.getElementById("result-el")

function randomArtist() {
    let idx = Math.floor(Math.random()*groups.length)
    console.log(idx)
    resultEl.innerText = groups[idx]
}
