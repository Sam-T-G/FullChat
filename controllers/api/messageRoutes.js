const router = require("express").Router();

/************This will get all messages from the database. ************/
router.get('/message', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
/************Posts new messages created by the user, to the database.************/
router.post('/message', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

module.exports = router;