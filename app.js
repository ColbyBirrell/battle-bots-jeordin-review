console.log("App is connected");

//THIS ADDS AN ONSUBMIT EVENT TO OUR HTML FORM SO THAT WE CAN FIRE THE CREATE BOT FUNCTION
const botForm = document.getElementById("bot-form");
botForm.addEventListener("submit", e => {
  // console.log(e) -- shows that it is listening
  e.preventDefault();
  createBot();
});

function createBot() {
  // console.log("hit createBot function");

  //now we need to grab the values we entered into the form
  let name = document.getElementById("name-input").value;
  let attack = document.getElementById("attack-input").value;
  let hp = document.getElementById("hp-input").value;

  //we do not want to be able to create a bot missing any values,
  // we will use an if statement to account for that

  if (name === "" || attack === "" || hp === "")
    return alert(
      "Unable to build bot. Our builders need more information! Please double check that you have entered your information correctly."
    );

  //We are creating a new div to hold our created bot
  let div = document.createElement("div");

  //Now we set a classname on the div so we can style later
  div.className = "bot";

  //This adds inner html to our div
  div.innerHTML = `<h2> ${name}</h2>
   <p id="attack">Attack: ${attack}</p>
   <p id="hp">HP: ${hp}</p>
   <button id="delete-btn">Destroy Bot</button>`;

  //we want to add an event listener to this newly created bot
  div.lastChild.addEventListener("click", removeBot);

  //this selects the bot display section and adds our newly created
  //div as a child
  let botDisplay = document.querySelector(".bot-display");
  botDisplay.appendChild(div);

  // This clears all the input fields
  document.getElementById("name-input").value = "";
  document.getElementById("attack-input").value = "";
  document.getElementById("hp-input").value = "";
}

//This deletes bots from the page
function removeBot(e) {
//   console.log("hit removeBot function");

  if (confirm("Are you sure you want to obliterate your bot?")) {
    e.target.parentElement.remove();
  }
}
