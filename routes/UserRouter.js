var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController");
const auth = require("../middleware/auth");

router.post("/register", function(req, res) {
  UserController.signUp(
    req.body.name,
    req.body.email,
    req.body.password,
    res
  )
});

router.post("/login", function(req, res) {
  UserController.login(req.body.email,req.body.password,res)
});

router.get("/me", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});

module.exports = router;
