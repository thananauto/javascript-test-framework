module.exports = function () {

    var addNewComputer=driver.findElement(by.css('#add.btn.success'));
    var labelName=driver.findElement(by.css('label[for=\'name\']'));
    var textFirstName = driver.findElement(by.css('#name'));
    var introduced = driver.findElement(by.css('#introduced'));
    var computerTable =   driver.findElements(by.css('.computers.zebra-striped tbody tr'));

    this.Then(/^I search the app$/, function(){
        addNewComputer.click();
        labelName.getText().then(function(text){
            expect(text).toEqual('Computer name');
        });
        textFirstName.sendKeys('first computer');
        introduced.sendKeys('1988-11-1988');
        $('a.btn').click();

        });


    this.Then(/^I click the search button$/,function () {
        computerTable.each(function(elements, index){
            elements.$('a').getText().then(function(text){
                console.log(index,text);
            });
        });
    });

}