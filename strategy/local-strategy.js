const passport = require('passport');
const { Strategy } = require('passport-local');
const Register = require('../models/registerModel');

passport.use(
  new Strategy(async (username, password, done) => {

    try {
      const user = await Register.findOne({ username });
        if (!user) {
            return done(null, false, { message: "Invalid Username" });
        }
        let isMatch = false;
        if(user.password == password) isMatch = true;
        if (isMatch === false) {
            return done(null, false, { message: "Invalid Password" });
        }
        return done(null, user);
    }
    catch (err) {
      done(err, null)
    }
  })
)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Register.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});


module.exports = passport;