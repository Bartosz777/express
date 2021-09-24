const express = require('express');
const router = express.Router();
const log = 'admin';
const pass = '123';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
  const {login, password} = req.body;
  req.session.admin = 1;
  
  if (log === login && pass === password) {
    res.redirect('/admin')
  } else {
    res.redirect('/login')
  }
});

module.exports = router;
