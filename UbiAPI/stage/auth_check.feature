Feature: Authorization Verification

        Scenario: As an authorized API user I could like to validate my API token so that I can use Ubicquia API Suite
            Given a user provides a valid token
             When the server is sent this token
             Then the GET request will allow the API to confirm authorization