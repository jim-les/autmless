const User = require('../models/userModel');

// controllers/userControllers.
const getAllUsers = (req, res) => {
    // Logic to get all users
    res.send("Getting all users");
};

const getUserById = (req, res) => {
    // Logic to get a user by ID
    const userId = req.params.id;
    res.send(`Getting user with ID ${userId}`);
};
  

// Contoller for crete a new user
const createUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.state(201).json(newUser);
        console.log(`New user created: ${newUser}`)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
  
const updateUser = (req, res) => {
    // Logic to update a user by ID
    const userId = req.params.id;
    res.send(`Updating user with ID ${userId}`);
};
  
const deleteUser = (req, res) => {
    // Logic to delete a user by ID
    const userId = req.params.id;
    res.send(`Deleting user with ID ${userId}`);
};
  
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};