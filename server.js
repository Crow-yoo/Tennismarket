let http = require('http');
let URL = require ('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = URL.parse(request.url).pathname;
        let queryData = URL.parse(request.url, true).query;

        route(pathname, handle, response, queryData.productId);
    }
    
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

exports.start = start;