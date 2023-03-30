"use strict";

window.addEventListener("load", start);

async function start() {
  const characters = await getData(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  //   showAllCharacters();
  characters.forEach(showCharacter);
}

async function getData(url) {
  const response = await fetch(url); //fetch request returning a response
  const data = await response.json(); //parsing data from json to JavaScript
  return data;
}

function showCharacter(character) {
  if (
    character.nickname === null ||
    character.nickname === "undefined" ||
    character.nickname === undefined ||
    character.nickname === "Unkown" ||
    character.nickname === "null"
  ) {
    hasNickname(character);
  } else {
    const html = /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Nickname: ${character.nickname}</p>
                <p>Age: ${character.age}</p>
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
}

function showCharacterModal(character) {
  console.log(character);
  //img
  document.querySelector("#dialog_image").src = character.image;
  //name
  document.querySelector("#dialog_name").textContent = character.name;
  document.querySelector("#dialog_nickname").textContent = character.nickname;
  //personal info
  document.querySelector("#dialog_religion").textContent = character.religion;
  document.querySelector("#dialog_gender").textContent = character.gender;
  document.querySelector("#dialog_hair_color").textContent =
    character.hairColor;
  document.querySelector("#dialog_occupation").textContent =
    character.occupation;
  document.querySelector("#dialog_grade").textContent = character.schoolGrade;
  document.querySelector("#dialog_catchphrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog_appearances").textContent =
    character.appearances;
  document.querySelector("#dialog_first_appearance").textContent =
    character.firstAppearance;
  //voiced by
  document.querySelector("#dialog_voiced_by_name").textContent =
    character.voicedBy;
  // show dialog
  document.querySelector("#dialog_character").showModal();
}

function hasNickname(character) {
  const html = /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>

                <p>Age: ${character.age}</p>
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
