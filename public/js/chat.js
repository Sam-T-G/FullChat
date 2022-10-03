var socket = io();
var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

// Event listener to submit responses
form.addEventListener("submit", function (e) {
  //Prevent listener is IMPERATIVE to prevent the default of refreshing the page > will cause us to lose message history and cause uneccessary page reload
  e.preventDefault();
  if (input.value) {
    // "emit function sends information from the client to the server "
    socket.emit("chat message", input.value);
    input.value = "";
  }

  //   Socket.io function to render messages on to application as "li"s
  socket.on("chat message", function (msg) {
    // console.log("we chattin'");
    var item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
});
