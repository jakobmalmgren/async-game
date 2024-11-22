// const upBtn = document.querySelector(".up");
// const leftBtn = document.querySelector(".left");
// const rightBtn = document.querySelector(".right");
// const downBtn = document.querySelector(".down");
// const nameEl = document.querySelector(".name");
// const positionXEl = document.querySelector(".pos-x");
// const positionYEl = document.querySelector(".pos-y");
// const coolDownEl = document.querySelector(".coolDown");
// const restBtn = document.querySelector(".rest");
// const jewelCraftingBtn = document.querySelector(
//   ".fast-track-workshop-jewel-crafting"
// );
// const checkboxEl = document.querySelector("#automate");
// const gatheringBtn = document.querySelector(".gather-resources");
// const fightBtn = document.querySelector(".fight");
// const cookingbBtn = document.querySelector(".fast-track-workshop-cooking");
// const gatherResourcesBtn = document.querySelector(".gather-resources");
// const server = "https://api.artifactsmmo.com";
// const token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphcHBlbWFubmVuQGdtYWlsLmNvbSIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ._I4EWA8bk_gNUofGDgBJBzWqSvKVzyzYvVBuBNRIM5s";
// const character = "jappe";
// // de är de här me flödet..varje gång ja trcker på evenlistteners så uppdateras ju x o y..
// // men renderas inte sidan igen som när man laddar om sidan o x o y blir 0 hela WebTransportBidirectionalStream.vill fattta d mer
// let xPos = 0;
// let yPos = 0;
// // let hp;
// // let resultWinLose;

// let coolDownTimer;
// let intervalFight;
// let intervalGathering;

// async function movement(x, y) {
//   const url = server + "/my/" + character + "/action/move";
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: `{"x":${x},"y":${y}}`,
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     // console.log(data.data.cooldown.remaining_seconds);
//     coolDownTimer = data.data.cooldown.remaining_seconds;
//     xPos = data.data.destination.x;
//     yPos = data.data.destination.y;
//     getCharacter();
//     coolDown();
//   } catch (error) {
//     console.log(error);
//   }
// }

// upBtn.addEventListener("click", () => {
//   movement(xPos, yPos - 1);
// });
// downBtn.addEventListener("click", () => {
//   movement(xPos, yPos + 1);
// });

// leftBtn.addEventListener("click", () => {
//   movement(xPos - 1, yPos);
// });
// rightBtn.addEventListener("click", () => {
//   movement(xPos + 1, yPos);
// });

// async function getCharacter() {
//   const url = server + "/characters/" + character;
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data);
//     hp = data.data.hp;
//     // resultWinLose=..
//     nameEl.innerHTML = `Name: ${data.data.name}`;
//     positionXEl.innerHTML = `Position x: ${data.data.x}`;
//     positionYEl.innerHTML = `Position y: ${data.data.y}`;
//     // xPos = data.data.character.x;    även här med flowet...måste gära såhär annars blir de x 0 o y 0 varje gång reaload..men inte nu nr ja gr såhär why..?
//     // yPos = data.data.character.y;
//   } catch (error) {
//     console.log(error);
//   }
// }
// getCharacter();

// function coolDown() {
//   const interval = setInterval(() => {
//     if (coolDownTimer <= coolDownTimer && coolDownTimer > 0) {
//       coolDownTimer--;
//       console.log(coolDownTimer);
//       coolDownEl.innerHTML = `Cooldown: ${coolDownTimer} sekunder`;
//     } else {
//       clearInterval(interval);
//       coolDownTimer = 0;
//       coolDownEl.innerHTML = `Cooldown: ${coolDownTimer} sekunder`;
//     }
//   }, 1000);
// }
// cookingbBtn.addEventListener("click", () => {
//   movement(1, 1);
// });
// jewelCraftingBtn.addEventListener("click", () => {
//   movement(1, 3);
// });

// async function rest() {
//   console.log("rest");

//   // action här
//   const url = server + "/my/" + character + "/action/rest";
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: {},
//   };

//   try {
//     const response = await fetch(url, options);
//     const { data } = await response.json();
//     coolDownTimer = data.cooldown.remaining_seconds;
//     coolDown();
//   } catch (error) {
//     console.log(error);
//   }
//   //   if (action) {
//   //     setTimeout(fight, 5000);
//   //   }

//   /// ändra här..
// }
// restBtn.addEventListener("click", () => {
//   rest();
// });

// async function fight() {
//   const url = server + "/my/" + character + "/action/fight";

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: {},
//   };

//   try {
//     const response = await fetch(url, options);
//     const { data } = await response.json();
//     console.log({ data });
//     // console.log(data.character.hp);
//     // resultWinLose = data.fight.result;
//     // hp = data.character.hp;
//     // console.log(data.fight.result);

//     coolDownTimer = data.cooldown.remaining_seconds;
//     coolDown();
//   } catch (error) {
//     console.log(error);
//   }
// }
// //imed hp sätts till nåt här...måste jag ha eventlisteneren eftter fightt( ) då?
// fightBtn.addEventListener("click", () => {
//   //   getCharacter();
//   //   if (checkboxEl.checked === true && hp < 85) {
//   //     if (hp < 60) {
//   //       rest(fight);
//   //     } else
//   //       intervalFight = setInterval(() => {
//   //         console.log("Interval triggered!");
//   //         fight();
//   //       }, 60000);
//   //   } else if (resultWinLose === "loss") {
//   //     checkboxEl.checked === false;
//   //   }
//   //   getCharacter(); // kaske väck var ska den in.....................

//   if (checkboxEl.checked) {

//     fight();
//     intervalFight = setInterval(() => {
//       console.log("Interval triggered!");

//       fight();
//     }, 60000);
//   } else if (!checkboxEl.checked) {
//     console.log("Interval INTE triggered!");
//     fight();
//   }
// });

// async function gathering() {
//   const url = server + "/my/" + character + "/action/gathering";

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: {},
//   };

//   try {
//     const response = await fetch(url, options);
//     const { data } = await response.json();
//     console.log(data);
//     coolDownTimer = data.cooldown.remaining_seconds;
//     coolDown();
//   } catch (error) {
//     console.log(error);
//   }
// }

// gatheringBtn.addEventListener("click", () => {
//   if (checkboxEl.checked) {
//     gathering();
//     intervalGathering = setInterval(() => {
//       console.log("Interval triggered!");
//       gathering();
//     }, 30000);
//   } else if (!checkboxEl.checked) {
//     console.log("Interval IIIITNTE triggered!");
//     gathering();
//   }
// });

// checkboxEl.addEventListener("click", () => {
//   console.log(checkboxEl.checked);
//   if (!checkboxEl.checked) {
//     clearInterval(intervalGathering);
//     clearInterval(intervalFight);
//   }
// });

//--------------------------------------------------------------------------------------------------------------------//

const jewelCraftingBtn = document.querySelector(
  ".fast-track-workshop-jewel-crafting"
);

const cookingbBtn = document.querySelector(".fast-track-workshop-cooking");
const test = document.querySelector(".test");
const upBtn = document.querySelector(".up");
const rightBtn = document.querySelector(".right");
const downBtn = document.querySelector(".down");
const leftBtn = document.querySelector(".left");
const characterName = document.querySelector(".name");
const xPosEl = document.querySelector(".pos-x");
const yPosEl = document.querySelector(".pos-y");
const cooldownEl = document.querySelector(".cooldown");
const restBtnEl = document.querySelector(".rest");
const fightBtnEl = document.querySelector(".fight");
const craftingBtn = document.querySelector(".crafting");
const gatherBtnEl = document.querySelector(".gather-resources");
const automateEl = document.querySelector("#automate");
const server = "https://api.artifactsmmo.com";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphcHBlbWFubmVuQGdtYWlsLmNvbSIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ._I4EWA8bk_gNUofGDgBJBzWqSvKVzyzYvVBuBNRIM5s";

const character = "jappe";

// Character variables
let currentXPos = 0;
let currentYPos = 0;
let cooldownTimer = 0;

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

    console.log(data);

    currentXPos = data.data.x;
    currentYPos = data.data.y;

    characterName.innerText = `Name: ${data.data.name}`;
    xPosEl.innerText = `Position X: ${data.data.x}`;
    yPosEl.innerText = `Position Y: ${data.data.y}`;
    cooldownEl.innerText = `cooldown: ${cooldownTimer}`;

    console.log("we have gotten our character information");
  } catch (error) {
    console.log(error);
  }
}
getCharacter();

async function movement(gotoX, gotoY) {
  const url = server + "/my/" + character + "/action/move";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: `{"x":${gotoX},"y":${gotoY}}`,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    console.log(`x: ${data.data.character.x}, y: ${data.data.character.y}`);

    currentXPos = data.data.destination.x;
    currentYPos = data.data.destination.y;
    cooldownTimer = data.data.cooldown.remaining_seconds;
    xPosEl.innerText = `Position X: ${data.data.character.x}`;
    yPosEl.innerText = `Position Y: ${data.data.character.y}`;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }
}

upBtn.addEventListener("click", () => {
  movement(currentXPos, currentYPos - 1);
});

rightBtn.addEventListener("click", () => {
  movement(currentXPos + 1, currentYPos);
});

downBtn.addEventListener("click", () => {
  movement(currentXPos, currentYPos + 1);
});

leftBtn.addEventListener("click", () => {
  movement(currentXPos - 1, currentYPos);
});
cookingbBtn.addEventListener("click", () => {
  movement(1, 1);
});
restBtnEl.addEventListener("click", rest);
craftingBtn.addEventListener("click", craft);
fightBtnEl.addEventListener("click", fight);
gatherBtnEl.addEventListener("click", gather);
jewelCraftingBtn.addEventListener("click", () => movement(1, 3));
// test.addEventListener("click", equipe);

function cooldown() {
  cooldownEl.innerText = `cooldown: ${cooldownTimer}`;
  if (cooldownTimer > 0) {
    setTimeout(cooldown, 1000);
    cooldownTimer--;

    console.log(cooldownTimer);
  } else {
    console.log("cooldown complete!");
  }
}

async function rest(action) {
  const url = server + "/my/" + character + "/action/rest";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    cooldownTimer = data.data.cooldown.remaining_seconds;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }

  if (action) {
    setTimeout(action, (cooldownTimer + 3) * 1000);
  }
}

async function fight() {
  const url = server + "/my/" + character + "/action/fight";
  let data = null;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    data = await response.json();

    console.log(data);
    cooldownTimer = data.data.cooldown.remaining_seconds;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }

  if (automateEl.checked && data.data.fight.result === "win") {
    if (data.data.character.hp < 70) {
      setTimeout(() => rest(fight), (cooldownTimer + 3) * 1000);
    } else {
      console.log("automatic fighting");
      console.log("cooldown: " + (cooldownTimer + 3) * 1000);
      setTimeout(fight, (cooldownTimer + 3) * 1000);
    }
  } else if (data.data.fight.result === "loss") {
    console.log("loss");
    automateEl.checked = false;
  }
}

async function gather() {
  const url = server + "/my/" + character + "/action/gathering";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    cooldownTimer = data.data.cooldown.remaining_seconds;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }

  if (automateEl.checked) {
    console.log("automatic gathering");
    setTimeout(gather, 30000);
  }
}

async function craft() {
  const url = server + "/my/" + character + "/action/crafting";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      code: "copper",
      quantity: 1,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    cooldownTimer = data.data.cooldown.remaining_seconds;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }
}

// async function unEquipe() {
//   const url = server + "/my/" + character + "/action/unequip";

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     },
//     body: JSON.stringify({
//       slot: "weapon",
//       quantity: 1,
//     }),
//   };
//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     console.log(data);
//     cooldownTimer = data.data.cooldown.remaining_seconds;

//     if (cooldownTimer > 0) {
//       cooldown();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// unEquipe();

async function equipe() {
  const url = server + "/my/" + character + "/action/equip";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      code: "wooden_staff",
      slot: "weapon",
      quantity: 1,
    }),
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    cooldownTimer = data.data.cooldown.remaining_seconds;

    if (cooldownTimer > 0) {
      cooldown();
    }
  } catch (error) {
    console.log(error);
  }
}
equipe();
