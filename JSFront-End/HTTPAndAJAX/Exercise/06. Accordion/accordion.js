const articlesURL = "http://localhost:3030/jsonstore/advanced/articles/list";
const mainSection = document.querySelector("#main");

async function solution() {

    const articlesTitles = await ((await fetch(articlesURL)).json());

    articlesTitles.forEach(article => {
        mainSection.appendChild(createDivAccorion(article));
    });

}

function createDivAccorion(obj){
    const divAccordion = document.createElement("div");
    divAccordion.classList.add("accordion");
    const divHead = document.createElement("div");
    divHead.classList.add("head");
    const span = document.createElement("span");
    span.textContent = `${obj.title}`
    divHead.appendChild(span);
    divHead.appendChild(createMoreButton(obj));
    divAccordion.appendChild(divHead);
    divAccordion.appendChild(createExtraDiv(obj))
    return divAccordion;
}

function createMoreButton(obj){
    const button = document.createElement("button");
    button.textContent = "More";
    button.classList.add("button");
    button.id = `${obj._id}`;
    button.addEventListener("click", showText)
    return button;
}

function showText(e) {
    const targetButton = e.target;
    const extraDiv = targetButton.parentElement.parentElement.querySelector(".extra");

    if (extraDiv.style.display === "none" || extraDiv.style.display === "") {
        targetButton.textContent = "Less";
        extraDiv.style.display = "block";
    } else {
        targetButton.textContent = "More";
        extraDiv.style.display = "none";
    }
}

function createExtraDiv(obj){
    const extraDiv = document.createElement("div");
    extraDiv.classList.add("extra");
    const extraDivP = document.createElement("p");
    getExtraPText(obj).then(content => extraDivP.textContent = content);
    extraDiv.appendChild(extraDivP);
    return extraDiv;
}

async function getExtraPText(obj){
    const article = await ((await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${obj._id}`)).json());
    return article.content;
}

solution();