const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/authenticate', (req, res) => {
  console.log('Req params:' + JSON.stringify(req.params));
  res.send(JSON.stringify({
        id: "1",
        username:"test.user",
        firstName:"test",
        lastName:"user",
        token: "123"
      })
  );
  console.log("login ok");
});

module.exports = router;
