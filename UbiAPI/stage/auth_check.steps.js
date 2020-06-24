const { Given, When, Then, And, But, Fusion } = require('jest-cucumber-fusion')

const axios = require('axios')

let stage_key
let stage_api_server

let test6_key
let test6_api_server

let response

Given('a user provides a valid token', () => {

    stage_key = '5a822efe1033f61240b258cb7cfe5da942ae851aa59e0ee525174d7d084039b5'
    stage_api_server = 'https://config.api.stage.ubicquia.com/api/AuthCheck'

    test6_key = '7a16e4386391a9986b2d49364dfa04d8e046c4135be45b73e6ddb50078936b8a'
    test6_api_server = 'https://config.api.test6.ubicquia.com//api/AuthCheck'

})
When('the server is sent this token', async () => {
    response = await axios.get(test6_api_server, {
        headers: {
            'x-api-key': test6_key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).catch(err => {
        if (err.response) {
            // client received an error response (5xx, 4xx)
            console.error(err.response.data.errors);
        } else if (err.request) {
            // client never received a response, or request never left
            console.error(err.request.data.errors);
        } else {
            // anything else

        }
    })
})

Then('the GET request will allow the API to confirm authorization', () => {
    expect(response.data.code).toBe('201')
})

Fusion('auth_check.feature')
