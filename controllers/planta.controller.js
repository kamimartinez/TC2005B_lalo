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
    mi_planta.save();
    response.setHeader('Set-Cookie', `ultima_planta=${mi_planta.nombre}`)
    response.redirect('/plantas/');
};

exports.get_root = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('lista_plantas', {
        isLoggedin: request.session.isLoggedin || false,
        username: request.session.username || '', 
        plantas: Planta.fetchAll(), 
    });
};

exports.get_regar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};