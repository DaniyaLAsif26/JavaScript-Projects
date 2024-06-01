
let input = document.querySelector("input")
let btn1 = document.querySelector("button")
let ul = document.querySelector("ul")

btn1.addEventListener("click", function () {
    if (input.value === "") {
        // console.log("hi")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value.toUpperCase()

        let checkbox = document.createElement("span")
        checkbox.classList.add("checkbox")
        li.insertAdjacentElement("afterbegin", checkbox)

        let btn2 = document.createElement("button")
        btn2.classList.add('deletebtn')
        btn2.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(btn2)

        ul.appendChild(li)
        input.value = ""
    }
})

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        if (input.value === "") {
            // console.log("hi")
        }
        else {
            let li = document.createElement("li")
            li.innerHTML = input.value.toUpperCase()

            let checkbox = document.createElement("span")
            checkbox.classList.add("checkbox")
            li.insertAdjacentElement("afterbegin", checkbox)

            let btn2 = document.createElement("button")
            btn2.classList.add('deletebtn')
            btn2.innerHTML = `<i class="fa-solid fa-trash"></i>`
            li.appendChild(btn2)

            ul.appendChild(li)
            input.value = ""
        }
    }
})


ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let a = event.target.parentElement
        a.remove()
    } else if (event.target.nodeName === "I") {
        let b = event.target.parentElement
        b.parentElement.remove()
    }
})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "SPAN") {
        event.target.classList.toggle("green")
    }
})


