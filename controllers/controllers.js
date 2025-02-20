const { Router } = require('express');
const Queue = require('../models/queueModel');
const passport = require('passport');
const ensureAuthenticated = require('../controllers/authController');
const router = Router();

router.post('/queue', ensureAuthenticated, (req, res) => {

  const newMatch = new Queue({
    groundName: req.body.gname,
    groundLocation: req.body.gLocation,
    price: req.body.price,
    PlayersLen: req.body.PlayersLen,
    Date: req.body.Date,
    gameType: req.body.gameType,
    playersJoined: [],
  });

  newMatch
    .save()
    .then((savedData) => {
      console.log('Data Saved');
    })
    .catch(err => {
      console.log('Error saving queue:', err);
    });
});

router.post('/joinGame', ensureAuthenticated, async (req, res) => {
  const gameID = req.body.gameId;
  const playerName = req.body.playerName;
  const playerContact = req.body.playerContact;
  try {
    if (String(playerContact).length !== 10) throw new Error("Incorrect number");
    const game = await Queue.findById(gameID)
    game.playersJoined.push({ playerName, playerContact });
    await game.save();
    res.redirect('/queue');
  }
  catch (err) {
    console.error("Error joining the game:", err);
    res.status(500).json({ message: err.message || "Internal Server Error" });
  }
})

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
      if (err) return res.render("relogin", { error: "Internal server error" });
      if (!user) return res.render("relogin", { error: info.message });

      req.logIn(user, (err) => {
          if (err) return res.render("relogin", { error: "Login failed" });
          return res.redirect("/profile"); 
      });
  })(req, res, next);
});




router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.redirect('/login');
    });
  });
});



module.exports = router;