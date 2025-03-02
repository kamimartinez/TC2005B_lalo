const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

const plantasRoutes = require("./routes/plantas.routes");

app.use("/plantas", plantasRoutes);
app.use("/plants", plantasRoutes);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  //Manda la respuesta
  response.send("No se encuentra el recurso que estas buscando");
  response.statusCode = 404;
});

app.listen(3000);
