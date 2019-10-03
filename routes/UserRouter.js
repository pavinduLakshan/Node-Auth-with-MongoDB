var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController");
const auth = require("../middleware/auth");

router.post("/register", function(req, res) {
  UserController.signUp(
    req.body.name,
    req.body.email,
    req.body.password,
    (err, data) => {
      let status = 200 
      if (err) {
        status = 400
        console.log(err);
      }
      res.status(status).send(data)
    }
  )
});

router.post("/login", function(req, res) {
  UserController.login(req.body.email,req.body.password,(err,data) => {
    let status = 200
    if(err){
        status = 400
    }
    res.status(status).send(data)
  })
});

router.get("/me", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});

module.exports = router;
