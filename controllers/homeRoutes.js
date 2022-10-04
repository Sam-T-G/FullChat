const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// Get user

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Chat
router.get("/chat", withAuth, (req, res) => {
  res.render("chatApp", {
    loggedIn: req.session.loggedIn,
  });
});

// login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/chat");
    return;
  }
  res.render("login");
});

module.exports = router;
