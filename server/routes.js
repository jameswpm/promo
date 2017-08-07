module.exports = function(app) {
    var codes = require('./controllers/codes');
    app.get('/codes/:code', codes.getCode);
}
