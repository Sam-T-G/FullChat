const router = require("express").Router();
const { Message } = require("../../models");

/************This will get all messages from the database. ************/
router.get("/", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});
/************Posts new messages created by the user, to the database.************/
router.post("/", (req, res) => {
  Message.create(req.body).then((data) => {
    req.io.emit("chat message", req.body.message);
    res.json(data);
  });
});

module.exports = router;
