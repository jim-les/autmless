const express = require("express");
const router = express.Router();

// Import Contollers
const userControllers = require('../controllers/userControllers');

/*
ROUTES ROUTE TO GET ALL USERS FUNCTIONALITES
*/ 
// Define users routes
router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("/users", userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/users/:id", userControllers.deleteUser);

module.exports = router;