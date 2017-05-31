const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(application) {
  application.use(morgan('dev'));

  application.use(bodyParser.urlencoded({
    extended: true
  }));

  application.use(bodyParser.json());

  application.set('views', './frontend');

  application.set('view engine', 'pug');

  require('./../backend/web-server/api')(application);
  
  application.listen(3000);
};


