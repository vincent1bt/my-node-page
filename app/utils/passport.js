const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { findUser } = require('./../models/user');

function configurePassport() {
  passport.use(new Strategy(
    async (username, password, callback) => {
      try {
        const [user] = await findUser(username);
        if (!user) { return callback(null, false); }
        const { password: userPassword } = user;
        const matchPasswords = await bcrypt.compare(password, userPassword);
        if (!matchPasswords) { return callback(null, false); }
        return callback(null, user);
      } catch (error) {
        return callback(null, false);
      }
  }));

  passport.serializeUser((user, callback) =>{
    callback(null, user.username);
  });

  passport.deserializeUser( async (username, callback) => {
    try {
      const [user] = await findUser(username);
      if (!user) { return callback(null); }
      callback(null, user);
    } catch (error) {
      callback(error);
    }
  });
}

module.exports = configurePassport;
