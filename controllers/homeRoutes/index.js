const { Router } = require('express');

const router = Router();

router.get('/blogs', (req, res) => {
  return res.send('Blogs page');
});

router.get('/', (req, res) => {
  return res.render('homepage');
});

module.exports = router;
