const middlewares = require('../middleware');

module.exports = function(application) {
  application.get('/', middlewares.accueil);
};
