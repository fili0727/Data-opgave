"use strict";

window.addEventListener("load", start);

async function start() {
  // const data = getData();
  const kyle = await getData("kyle.json");
  const tuong = await getData(
    "https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json"
  );
  //   showAllCharacters();
  showCharacter(kyle);
  showCharacter(kyle);
  showCharacter(tuong);
}

async function getData(url) {
  const response = await fetch(url); //fetch request returning a response
  const data = await response.json(); //parsing data from json to JavaScript
  return data;
}

// function showAllCharacters(character) {
//   showCharacter(kyle);
// }

function showCharacter(character) {
  const html = /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>nickname: ${character.nickname}</p>
                <p>Age: ${character.age}</p>
                <p>Voiced by ${character.voicedBy}</p>
            </article>
        `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  console.log(character);
  document.querySelector("#dialog_image").src = character.image;
  document.querySelector("#dialog_title").textContent = character.name;
  document.querySelector("#dialog_religion").textContent = character.religion;
  document.querySelector("#dialog_gender").textContent = character.gender;
  document.querySelector("#dialog_hair_color").textContent =
    character.hairColor;
  document.querySelector("#dialog_occupation").textContent =
    character.occupation;
  document.querySelector("#dialog_catchphrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog_appearances").textContent =
    character.appearances;
  document.querySelector("#dialog_first_appearance").textContent =
    character.firstAppearance;

  document.querySelector("#dialog_name").textContent = character.name;
  document.querySelector("#dialog_voiced_by_name").textContent =
    character.voicedBy;

  // show dialog
  document.querySelector("#dialog_character").showModal();
}

function showDialog(charatcer) {}

function closeDialog() {}

function getDescription() {}

function formatDate() {}

function calcAge() {}
