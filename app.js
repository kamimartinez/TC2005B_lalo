const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

const registroRoutes = require("./routes/registro.routes");

const preguntasRoutes = require("./routes/preguntas.routes");

app.use("/", registroRoutes);

app.use("/", preguntasRoutes);

app.use((request, response, next) => {
  console.log("ERROR");
  response.status(404).send("ERROR! hola mundo lol");
});

app.listen(3000);
