let startTime = Date.now();

function saveScore() {
    let time = Math.floor((Date.now() - startTime) / 1000);

    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push(time);
    scores.sort((a, b) => a - b);
    scores = scores.slice(0, 5);

    localStorage.setItem("scores", JSON.stringify(scores));
    showScores();
}

function showScores() {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    let list = document.getElementById("scores");
    list.innerHTML = "";

    scores.forEach(s => {
        let li = document.createElement("li");
        li.innerText = s + " seconds";
        list.appendChild(li);
    });
}

setInterval(() => {
    let t = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").innerText = "Time: " + t + "s";
}, 1000);