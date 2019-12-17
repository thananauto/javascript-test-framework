var {Given, When, Then, Before} = require('cucumber');
const assert = require('assert');


    let answer ;
    Before(function () {
        let answer = 0;
    });

    Given('I start with {int}', function (input) {
        // Write code here that turns the phrase above into concrete actions
       answer=input;
    });

    When('I add {int}', function (input) {
        // Write code here that turns the phrase above into concrete actions
        answer = answer + input;
    });

    Then('I end up with {int}', function (input) {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(answer, input);
    });

    When('I multiply by {int}', function (input) {
        answer = answer * input;
    });

