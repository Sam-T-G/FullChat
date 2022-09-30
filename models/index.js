const Chat = require("./Chat");
const Message = require("./Message");
const User = require("./User");

Chat.belongsToMany(User, {
  through: {
    model: Message,
    unique: false
  },
  as: 'user_chats'
});

User.belongsToMany(Chat, {
  through: {
    model: Message,
    unique: false
  },
  as: 'chatrooms'
});

module.exports = {
  Chat,
  Message,
  User,
};
