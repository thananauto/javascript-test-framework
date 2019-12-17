var addAComputer = function () {
    var pageName=element(by.cssContainingText('h1','Add a computer'));
    var textFirstName = $('#name');
    var introduced = $('#introduced');
    var discontinuedDate = $('#discontinued');
    var selectCompany = $('#company');
    var createThisComputer = $('input[value =\'Create this computer\']');
    var cancel = element(by.cssContainingText('a','Cancel'));

    
    function enterComputerDetails(computerName, introDate, discDate, company) {
        textFirstName.sendKeys(computerName);
        introduced.sendKeys(introDate);
        discontinuedDate.sendKeys(discDate);
        selectCompany.click();
        selectCompany.sendKeys(company);
    }

    var verifyAddaComputerPage = function () {
        return pageName.isDisplayed();
    }

    function clickCreateThisComputer() {
        createThisComputer.click();
    }

    function validateCancelButton() {
        return cancel.isElementPresent();
    }

}
module.exports = new addAComputer();