const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// This will fire our mongoose.connect to create the database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

//This is whewe we import the jokes routes function
const AllProductsRoutes = require("./server/routes/product.routes");
AllProductsRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));