describe('herokuapp database', function() {


  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.driver.get('http://computer-database.herokuapp.com/computers');
  });

  afterAll(function () {
    if(browser !== null){
   // browser.quit();
    }
  });

  it('should add a todo', function() {
      $('#add.btn.success').click();
    $('label[for=\'name\']').getText().then(function(text){
      console.log(text);
    });
    element(by.css('#name')).sendKeys('first computer');
    element(by.css('#introduced')).sendKeys('1988-11-1988');
    element(by.css('a.btn')).click();

    //use the webelement lists
    $$('.computers.zebra-striped tbody tr').then(function(elements){
      for(var i=0; i<elements.length; i++){
        elements[i].$('a').getText().then(function(text){
          expect(text).toBeTruthy();
        });
      }

    });

    //var todoList = element.all(by.repeater('todo in todoList.todos'));
  //  expect(todoList.count()).toEqual(3);
    //expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
  //todoList.get(2).element(by.css('input')).click();
  //  var completedAmount = element.all(by.css('.done-true'));
  //  expect(completedAmount.count()).toEqual(2);
  });
});
