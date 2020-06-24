var superagent = require('superagent');
var request = require('superagent-declare');
var logger = require('superagent-logger');
request.use(superagent);


request({
    get: 'https://config.api.stage.ubicquia.com/api/AuthCheck',
    set: [['X-API-Key', '5a822efe1033f61240b258cb7cfe5da942ae851aa59e0ee525174d7d084039b5'], ['Accept', 'application/json'], ['Content-Type', 'application/json']],
    then: callback
});
request.get('https://config.api.stage.ubicquia.com/api/AuthCheck').use(logger({ outgoing: true })).end();