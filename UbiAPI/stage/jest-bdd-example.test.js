const { unit, given, when, then } = require('jest-bdd')

unit(
    given('two numbers', () => {
        scope.num1 = 3
        scope.num2 = 8
    },
        then('num1 is 3', () => { // check the setup
            expect(num1).toBe(3)
        }),
        when('the numbers are added', () => { // perform the action to test
            scope.sum = num1 + num2
        },
            then('the sum is 11', () => { // check the result of the action
                expect(sum).toBe(11)
            })
        )
    )
)