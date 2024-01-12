const mongoose = require('mongoose');

// mongoose string for db connection
const databaseUrl = 'mongodb+srv://Leston:Leston123@cluster0.ucyqgtn.mongodb.net/';

// connect to MongoDB
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
});

module.exports = mongoose.connection;