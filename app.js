"use strict";

window.addEventListener("load", start);

function start() {
  const data = getData();
  showAllCharacters(data);
}

function getData() {
  const data = [];
  return data;
}

function showAllCharacters(list) {
  showCharacter(kyle);
  showCharacter(kyle);
  showCharacter(kyle);
}

function showCharacter(character) {
  const html = /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.nickname}</p>
                <p>Age: ${character.age}</p>
                <p>Voiced by ${character.voicedBy}</p>
            </article>
        `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
}

function showDialog(charatcer) {}

function closeDialog() {}

function getDescription() {}

function formatDate() {}

function calcAge() {}

//temporary
const kyle = {
  name: "Kyle Broflovski",
  nickname: "Daywalker",
  image: "https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png",
  occupation: "student",
  age: "10",
  voicedBy: "Matt Stone",
  gender: "male",
  religion: "Judaism",
  catchPhrase: "God Dammit Cartman!",
  hairColor: "red",
  schoolGrade: 4,
  episodes: null,
  appearances: undefined,
  firstAppearance: "S01E01",
};
