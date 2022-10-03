const Chat = require("./Chat");
const Message = require("./Message");
const User = require("./User");

// belongsToMany signifies that individual user may have many chat entries
Chat.belongsToMany(User, {
  through: {
    model: Message,
    unique: false,
  },
  as: "user_chats",
});

// belongsToMany signifies that chatrooms may have many individual users
User.belongsToMany(Chat, {
  through: {
    model: Message,
    unique: false,
  },
  as: "chatrooms",
});

module.exports = {
  Chat,
  Message,
  User,
};
