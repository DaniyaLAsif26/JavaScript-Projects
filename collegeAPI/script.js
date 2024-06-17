let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    showColleges(colleges);

    let allLi = document.getElementsByClassName("list");
    Array.from(allLi).forEach((li, index, a) => {
        // console.log(li)
        // console.log(index)
        if (index % 2 === 0) {
            li.classList.add("red")
        }
        else {
            li.classList.add("green")
        }
    })
})

async function getColleges(country) {
    try {
        let req = await axios.get(url + country);
        return req.data;
    } catch {
        console.log("error");
    }
}

function showColleges(colleges) {
    let ul = document.querySelector("ul");
    ul.innerText = "";
    for (let col of colleges) {
        let li = document.createElement("li");
        let anchor = document.createElement("a");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        li.classList.add("list");
        div1.classList.add("div1");
        div2.classList.add("div2");
        anchor.classList.add("link");

        div1.innerHTML = col.name;
        anchor.innerHTML = col.web_pages[0]; // col.web_pages is an array
        div2.innerHTML = `State :- ${col['state-province']}`;

        anchor.setAttribute("href", col.web_pages[0]); // Use the first URL

        ul.appendChild(li);
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(anchor);
    }
}