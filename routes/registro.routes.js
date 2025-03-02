const express = require("express");
const file_system = require("fs");

const router = express.Router();

const html_firstpage = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>`;

const html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap Example</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
        <div class="container mt-4">
            <form action='/registro' method="POST" >
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputUser" class="col-form-label">Username</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" id="inputUser" class="form-control" aria-describedby="userHelpInline">
                    </div>
                    <div class="col-auto">
                        <span id="userHelpInline" class="form-text">
                            Must be 8-20 characters long
                        </span>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" name="password">
                    </div>
                </div>
                <input class="button is-info" type="submit" value="Enviar">
            </form>
        </div>
    </body>
</html>`;

router.get("/", (request, response, send) => {
  response.send(html_firstpage);
});

router.get("/registro", (request, response, next) => {
  response.send(html);
});

router.post("/registro", (request, response, next) => {
  console.log(request.body.password);
  const contras = request.body.password;
  file_system.appendFileSync("hola.txt", contras + "\n");
  response.send("paso");
});

module.exports = router;
