var homePage = require('../page-objects/home');

describe('validate the home page', function () {

beforeAll(function () {
    browser.get('/computers');
})

    it('validate the filter section', function () {
        homePage.searchFilter('dell');
    });

    it('validate the pagination icons', function () {
        homePage.verifyPagination();
    })

});