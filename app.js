let CountEl = document.getElementById("counter")
let count = 0
let saveEl = document.getElementById("saveEl")

function increment() {
    count += 1
    CountEl.innerText = count
}

function save() {
    let info = count + " - "
    saveEl.textContent += info
    count = 0
    CountEl.innerText = 0
}


