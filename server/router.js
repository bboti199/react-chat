const router = require('express').Router();

router.get('/', (_, res) => {
  res.send('Server is running!');
});

module.exports = router;
