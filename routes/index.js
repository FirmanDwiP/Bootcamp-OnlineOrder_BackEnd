var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({
    author : "Firman Dwi",
    github : "https://github.com/FirmanDwiP"
  })
});

module.exports = router;
