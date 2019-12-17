var homePage = function () {
    var addNewComputer=$('#add.btn.success');
    var txtFilter = $('#searchbox');
    var btnFilterName = $('#searchsubmit');
    var previousIcon  = element(by.linkText('← Previous'));
    var nextIcon  = element(by.linkText('Next →'));
    var alertMessage = $('.alert-message');

    this.clickAddNewComputer = function () {
        addNewComputer.click();
    }
    
    this.verifyPagination = function () {
        return previousIcon.isDisplayed() && nextIcon.isDisplayed();
    }

   this.searchFilter = function (text) {
        txtFilter.sendKeys(text);
        btnFilterName.click();
    }
}


module.exports = new homePage();