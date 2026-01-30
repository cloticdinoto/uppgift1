const button = document.getElementById("newNumBut");
const display = document.getElementById("randNumDisp");

function newNum() {
    fetch("/api/randomNum")
        .then(res => res.json())
        .then(data => {
            display.innerHTML = data.number
        })
}

button.onclick(newNum)