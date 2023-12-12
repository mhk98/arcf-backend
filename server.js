const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var http = require("http");

// const { notFoundHandler, errorHandler } = require("./middlewares/error");
// const { createResponse } = require("././utils/responseGenerator");
require("./models");
require("dotenv").config();
const shortid = require("shortid");
// const swaggerJSDoc = require("swagger-jsdoc");
// const recharge = require('./models/recharge/recharge');

// middlewares
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "http://localhost:5000"],
//   })
// );

app.use(cors({ origin: true, credentials: true }));

// const swaggerOptions = {
//   swaggerDefinition:{
//     info:{
//       title: 'Customer API',
//       description: 'Customer API Information',
//       contact: {
//         name:"Amazing Developer"
//       },
//       servers:["http://localhost:5000"]
//     }
//     ,apis:['./routes/index.js']
//   }
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", routes);

// port initializing
const port = 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//static image folder
app.use("/Images", express.static("Images"));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// main route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// error handler
// app.use([notFoundHandler, errorHandler]);

//create a server object:

// Catch-all route for handling API not found
app.use((req, res, next) => {
  res.status(404).json({ error: "API not found" });
});

const server = http.createServer(app);

// listening server
server.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
