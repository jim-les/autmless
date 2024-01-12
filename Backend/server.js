//import modules 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require('./src/config/database'); // Adjust the path based on your project structure


//app and the middelwares
const app = express();
app.use(cors());


//app vataibles used 
const port = process.env.PORT || 3003;

/*ROUTES: The routes link used in the file.*/
const routes =require("./src/routes");
app.use("/", routes);


// APP:listerning to client link
app.listen(port, ()=> {
    console.log("Server Started...");
    console.log("Press CTRL + C to stop server");
    console.log(`vist the server on http://localhost:${port}`);
});