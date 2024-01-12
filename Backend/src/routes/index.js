const express = require("express");
const router = express.Router();

// Import Contollers
const userControllers = require('../controllers/userControllers');

router.get("/", (req, res) => {
    res.send("Hello, this is the homepage!");
})

router.use("/users", require("./userRoutes"));

module.exports = router;