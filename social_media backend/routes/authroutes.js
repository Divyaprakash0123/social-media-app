const express = require("express");
console.log("AUTH ROUTES FILE LOADED");

const router = express.Router();

const { register, login } = require("../controllers/authcontroller");

router.get("/test", (req, res) => {
  res.send("Auth Route Working");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
