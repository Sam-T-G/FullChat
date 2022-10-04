const router = require("express").Router();
const { Message, User } = require("../../models");

/************This will get all messages from the database. ************/
router.get("/", (req, res) => {
  Message.findAll({include: [User]}).then(data => {
    res.json(data)
  })
});
/************Posts new messages created by the user, to the database.************/
router.post("/", async (req, res) => {
  const userData = await User.findByPk(req.session.user_id)
  const user = userData.get({plain: true})
  Message.create({message: req.body.message, user_id: req.session.user_id}).then((data) => {
    req.io.emit("chat message", `${user.username}: ${req.body.message}`);
    res.json(data);
  });
});

module.exports = router;
