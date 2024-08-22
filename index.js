let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler1');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandler.handle);