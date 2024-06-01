let gameSeq = []
let userSeq = []

let gameStart = false
let level = 0
let btns = ["orange", "blue", "green", "red"]

let h3 = document.querySelector("h3")



document.addEventListener("keypress", function () {
    if (gameStart == false) {
        gameStart = true
        levelUp()
    }
})

function levelUp() {
    userSeq = []
    level++
    h3.innerHTML = (`Level ${level}`)

    let randIdx = Math.floor(Math.random() * 4)
    let color = btns[randIdx]
    let flash = document.querySelector(`.${color}`)
    gameflash(flash)
    gameSeq.push(color)
    console.log(gameSeq)
}

function gameflash(btn) {
    btn.classList.add("gameflash")
    setTimeout(function () {
        btn.classList.remove("gameflash")
    }, 250)
}

function userflash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 150)
}

let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", allbtnpress)
}

function allbtnpress() {
    let btn = this
    userflash(btn)

    userColor = btn.getAttribute("id")
    userSeq.push(userColor)
    console.log(userSeq)

    checkWin(userSeq.length - 1)
}

function checkWin(idx) {

    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 500)
        }
    } else {
        h3.innerHTML = `Game over <i class="fa-solid fa-face-frown"></i> <i class="fa-solid fa-face-frown"></i> <br> Your score is <b>${level} </b> <br> Press any key to start the Game`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "lightblue"
        }, 250)
        gameReset()
    }
}

function gameReset() {
    gameStart = false
    gameSeq = []
    userSeq = []
    level = 0
}