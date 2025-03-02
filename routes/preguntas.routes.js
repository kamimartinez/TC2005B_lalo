const express = require("express");
const file_system = require("fs");

const router = express.Router();

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>
<body>
    
    <h2 class="titleLab">Laboratorio 1: </h2>
        <div class="box">
            <div class="questions">
                <h3>1. ¿Cuál es la diferencia entre Internet y la World Wide Web?</h3>
                <p>
                    Internet es una red de computadoras que se encuentran interconectadas a nivel mundial para compartir 
                    información, en cambio, la Wold Wide Web es en un complejo sistema de hipertextos e hipermedios 
                    interconectados entre sí y a los que puede tenerse acceso mediante una conexión a Internet y un
                    conjunto de software especializado. 
                </p>

                <h3>2. ¿Cuáles son las partes de un URL?</h3>
                <p>
                    <b>Protocolo:</b> 
                    Es el primer componente de una URL y determina cómo se transmiten los datos.Como HTTP, HTTPS, FTP</p>
                <p> 
                    <b>Dominio:</b> 
                    Es la dirección del sitio web. Proporciona una forma fácil de recordar los sitios en lugar de usar direcciones IP.
                </p>
                <p>
                    <b>Subdominio:</b> Es una parte adicional del nombre de dominio que puede representar una sección específica del sitio. 
                    Generalmente se encuentra antes del nombre de dominio principal.
                </p>
                <p>
                    <b>Ruta:</b> Indica la ubicación específica de un recurso en el servidor.
                    >Se puede comparar con una dirección en una casa donde cada carpeta o archivo tiene su propio lugar.
                </p> 
                <p>
                    <b>Parámetros de consulta:</b> 
                    Son valores que se envían al servidor para modificar o personalizar la respuesta.
                    Se añaden al final de la URL usando un signo de interrogación (?)</p>
                <p>
                    <b>Fragento:</b> 
                    Es una parte opcional que puede dirigir a una sección específica de una página.Se indica con un signo de número (#)
                </p>
                
                <h3>3. ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h3>
                <p>
                    Son métodos de petición para indicar la acción que se desea realizar para un recurso determinado. 
                    Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. 
                </p>
                <ul>
                    <li><b>GET:</b> Solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben <br> recuperar datos.</li>
                    <li><b>HEAD:</b> Pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.</li>
                    <li><b>POST:</b> se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos <br>secundarios en el servidor.</li>
                    <li><b>PUT:</b> Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.</li>
                    <li><b>PATCH:</b> Es utilizado para aplicar modificaciones parciales a un recurso.</li>
                    <li><b>DELETE: </b>Borra un recurso en específico.</li>
                </ul>

                <h3>4. ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio?<br> ¿Por qué?</h3>
                <p>Los datos del formulario HTML se pueden transmitir a través de un número de diferentes queridos, los más comunes de los cuales son el método GET y el método POST .</p>

                <h3>5. ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h3>
                <p>
                    El método GET se usa para solicitar información desde un servidor web. Esta solicitud se realiza a través de una URL. 
                    Cuando el servidor recibe la solicitud, devuelve la información solicitada. El método GET no cambia los datos en el servidor.
                </p>

                <h3>6. Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h3>
                <p>Este código indica que la solicitud ha sido exitosa y que el servidor ha devuelto el contenido solicitado sin problemas.</p>

                <h3>7. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h3>
                <p>
                    404 es un código de estado HTTP, el cual significa que tu navegador se ha conectado con un servidor, pero que este no es capaz de mostrarte la web que deseas.
                    Puede que también te encuentres con este mismo error, pero con denominaciones como Error 404 not found, Error 404 URL no encontrada, Error 404 página no encontrada 
                    o Error 404 Archivo no encontrado, cuando esta problemática se da con un fichero determinado de una web.
                </p>
                <p>
                    El error 404 no es responsabilidad total del desarrollador de resolver, debido a que hay causas de este error de las cuales el desarrollador no puede actuar.
                </p>

                <h3>8. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h3>
                <p>
                    El error 500, también conocido como Internal Server Error (Error Interno del Servidor).  es un código de estado HTTP que indica que algo ha salido mal en el servidor
                    web al intentar procesar una solicitud del navegador. Cuando aparece este tipo de error no se proporciona ningún tipo de detalle sobre la causa, lo que complica aún más 
                    la identificación de cuál es el problema exacto. La única información certera que tienes es la de saber que el servidor o la propia aplicación informó al navegador de un 
                    fallo inesperado, por lo que hay que averiguar que está ocurriendo. El desarrollador es el responsable de arreglar el error, debido a que las principales causas por la cual este error
                    aparece es por fallas en el backend o la base de datos. 
                </p>
                <p>
                    <b>Causas:</b> 
                    Programación, configuración del servidor, los recursos, software, base de datos, actualizaciones incorrectas, servidor web, limites de tiempo de ejecución, ataques.
                </p>
            </div>
        </div>
    </h2>
</body>
</html>
`;

const html_holaMundo = `<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola Mundo</title>
</head>
<body>
    <h1>Hola Mundo! Esta es el segundo modulo jaja lol</h1>
</body>
</html>`;

const html_questions = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laboratorio 1</title>
  </head>
  <body>
    <h1>Kamila Martinez</h1>
    <h2>A01711833</h2>
    <h3>a01711833@tec.mx | kamiii.martineeez@gmail.com</h3>
    <br />

    <h2>Preguntas Laboratorio 1</h2>
    <table border="1">
      <tr>
        <th>Pregunta</th>
        <th>Respuesta</th>
      </tr>
      <tr>
        <td>¿Cuál es la diferencia entre Internet y la World Wide Web?</td>
        <td>Internet es una gran red de computadoras alrededor de todo el mundo conectadas entre sí. Por el contrario, la web (la World Wide Web) es una enorme colección de páginas que se asienta sobre esa red de computadoras. (Redacción, 2019)</td>
      </tr>
      <tr>
        <td>¿Cuáles son las partes de un URL?</td>
        <td>Una URL para HTTP (o HTTPS) suele estar formada por tres o cuatro componentes. Un esquema que identifica el protocolo, un nombre de host que identifica quien contiene el recurso, un camino que identifica la ruta que el usuario quiere acceder y una cadena de consulta. (CICS Transaction Server for Z/OS 6.x, 2025)</td>
      </tr>
    </table>
  </body>
</html>
`;

router.get("/pregunta", (request, response, next) => {
  response.send(html);
});

router.get("/mundo", (request, response, next) => {
  response.send(html_holaMundo);
});

router.get("/questions", (request, response, next) => {
  response.send(html_questions);
});

module.exports = router;
