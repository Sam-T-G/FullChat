/************This will get all messages from the database. ************/
app.get(/*'/messages'*/, (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })
/************Posts new messages created by the user, to the database.************/
app.post(/*'/messages'*/, (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    res.sendStatus(200);
  })
})

