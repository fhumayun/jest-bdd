var request = require('supertest')('https://config.api.stage.ubicquia.com/');
request
    .get('/api/AuthCheck')
    .set('x-api-key', '5a822efe1033f61240b258cb7cfe5da942ae851aa59e0ee525174d7d084039b5')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .expect({ success: true }, done);
