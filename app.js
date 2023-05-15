const dotenv = require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi =require( "swagger-ui-express");
const yamljs = require("yamljs");
const swagger_ui_express = (require("swagger-ui-express"));



const movieRoutes = require('./routes/movie.routes');
const swaggerDocument = yamljs.load("./swagger.yaml");


const app = express();
const port = process.env.PORT || 3004;

// Connect to MongoDB
mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(express.json());
// app.use("/swagger-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/my-top-100-movies', movieRoutes);
app.use(
  "/",
  swagger_ui_express.serve,
  swagger_ui_express.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
