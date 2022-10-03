var socket = io();
var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

// Event listener to submit responses
form.addEventListener("submit", function (e) {
  //Prevent listener is IMPERATIVE to prevent the default of refreshing the page > will cause us to lose message history and cause uneccessary page reload
  e.preventDefault();
  if (input.value) {
    fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({ message: input.value }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      console.log(data);
    });
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  console.log(msg);
  var item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
