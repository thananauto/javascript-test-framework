describe('this is the example for multiple scenarios', function(){
  var addNewComputer=$('#add.btn.success');
  var labelName=$('label[for=\'name\']');
  var textFirstName = $('#name');
  var introduced = $('#introduced');
  var computerTable =   $$('.computers.zebra-striped tbody tr');
  var discontinuedDate = $('#discontinued');
  var selectCompany = $('#company');
  var alertMessage = $('.alert-message');

//this before will be called before every it
beforeAll(function(){
  browser.waitForAngularEnabled(false);
  browser.get('http://computer-database.herokuapp.com/computers');
});

it('Navigate to Add a computer page', function(){
  addNewComputer.click();
  expect(labelName.getText()).toEqual('Computer name');
  textFirstName.sendKeys('first computer');
  introduced.sendKeys('1988-11-19');
  discontinuedDate.sendKeys('1993-11-19')

  //select the value
  selectCompany.click();
  selectCompany.sendKeys('IBM');

  //click the create this computer  button
  $('input[type=\'submit\']').click();

  expect(alertMessage.getText()).toContain('Done!');

});

it('check the table computer name column', function() {
computerTable.each(function(elements, index){
    elements.$('a').getText().then(function(text){
        expect(text).toBeTruthy();
      });
  });
});

});
