const upBtn = document.querySelector(".up");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const downBtn = document.querySelector(".down");
const nameEl = document.querySelector(".name");
const positionXEl = document.querySelector(".pos-x");
const positionYEl = document.querySelector(".pos-y");
const coolDownEl = document.querySelector(".coolDown");
const restBtn = document.querySelector(".rest");
const gatherResourcesBtn = document.querySelector(".gather-resources");
const server = "https://api.artifactsmmo.com";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphcHBlbWFubmVuQGdtYWlsLmNvbSIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ._I4EWA8bk_gNUofGDgBJBzWqSvKVzyzYvVBuBNRIM5s";
const character = "jappe";
// de är de här me flödet..varje gång ja trcker på evenlistteners så uppdateras ju x o y..
// men renderas inte sidan igen som när man laddar om sidan o x o y blir 0 hela WebTransportBidirectionalStream.vill fattta d mer
let xPos = 0;
let yPos = 0;
let coolDownTimer = 5;

async function movement(x, y) {
  const url = server + "/my/" + character + "/action/move";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: `{"x":${x},"y":${y}}`,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    xPos = data.data.destination.x;
    yPos = data.data.destination.y;
    getCharacter();
    coolDown();
  } catch (error) {
    console.log(error);
  }
}

upBtn.addEventListener("click", () => {
  movement(xPos, yPos - 1);
});
downBtn.addEventListener("click", () => {
  movement(xPos, yPos + 1);
});

leftBtn.addEventListener("click", () => {
  movement(xPos - 1, yPos);
});
rightBtn.addEventListener("click", () => {
  movement(xPos + 1, yPos);
});

async function getCharacter() {
  const url = server + "/characters/" + character;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);

    nameEl.innerHTML = `Name: ${data.data.name}`;
    positionXEl.innerHTML = `Position x: ${data.data.x}`;
    positionYEl.innerHTML = `Position y: ${data.data.y}`;
    // xPos = data.data.character.x;    även här med flowet...måste gära såhär annars blir de x 0 o y 0 varje gång reaload..men inte nu nr ja gr såhär why..?
    // yPos = data.data.character.y;
  } catch (error) {
    console.log(error);
  }
}
getCharacter();

function coolDown() {
  const interval = setInterval(() => {
    if (coolDownTimer <= 5 && coolDownTimer > 0) {
      coolDownTimer--;
      console.log(coolDownTimer);
      coolDownEl.innerHTML = `Cooldown: ${coolDownTimer} sekunder`;
    } else {
      clearInterval(interval);
      coolDownTimer = 5;
      coolDownEl.innerHTML = `Cooldown: ${coolDownTimer} sekunder`;
    }
  }, 1000);
}

// snabbknappar för gå till minst 2 olika byggnader
// knapp för att vila
// knapp för att samla resurser
// Extra

// automatisera 2 olika handlingar. t ex attackera fiender på rutan, samla resurser eller smida någonting i olika workshops
