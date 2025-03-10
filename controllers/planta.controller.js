const Planta = require('../models/planta.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta', {
        isLoggedin: request.session.isLoggedin || false,
        username: request.session.username || '', 
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.session.username);

    console.log(request.body);
    const mi_planta = new Planta(request.body.nombre);
    mi_planta.save()
        .then(() => {
            request.session.info = `La planta ${mi_planta.nombre} se ha creado`;
            console.log("planta guardada");
            response.redirect('/plantas/');
        })
        .catch(()=> {
            console.log("error");
        });
    response.setHeader('Set-Cookie', `ultima_planta=${mi_planta.nombre}`)
    response.redirect('/plantas/');
};

exports.get_root = (request, response, next) => {

    // OJO 
    console.log(request.get('Cookie')); 
    const mensaje = request.session.info || '';
    if(request.session.info) {
        request.session.info = '';
    }

    Planta.fetchAll()
        .then(([rows, fieldData])=> {
            response.render('lista_plantas', {
                isLoggedin: request.session.isLoggedin || false,
                username: request.session.username || '', 
                plantas: Planta.fetchAll(), 
                info :mensaje,
            });
        }).catch((error) => {
            console.log(error)
        });
    
};

exports.get_regar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};