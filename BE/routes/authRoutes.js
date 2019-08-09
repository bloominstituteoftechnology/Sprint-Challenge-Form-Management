const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET || 'secret', {
    expiresIn: '24h'
  });
}

router.post('/register', function (req, res, next) {

  console.log(req.body);
  let { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({
      error: true,
      message: 'Please provide a Username, Password'
    });

  password = bcrypt.hashSync(password, SALT_ROUNDS);

  let token = generateToken({ password });
  res.json({
    error: false,
    message: 'User created succesfully',
    token
  });

});

module.exports = router;
