exports.get_login = (request, response, next) => {
    response.render('login.ejs', {
        isLoggedin : request.session.isLoggedin || false, 
        username: request.session.username || '', 
    });
};

exports.post_login = (request, response, next) => {
    request.session.isLoggedin = true;
    request.session.username = request.body.username;
    response.redirect('/plantas');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};
   