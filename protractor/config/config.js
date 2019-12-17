var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');


exports.config = {
    //framework type
  framework: 'jasmine',

    //grid address to execute the script
  seleniumAddress: 'http://localhost:4444/wd/hub',

    //file path for spec folder and files
  specs: ['../specs/home-spec.js',],
  //specs: ['../specs/**.js'],

    //test suites to run[use --suite=smoke,full. any will take any suites
    suites:{
      smoke:'../specs/todo-spec.js', full:'../specs/multiple-scenarios.js'
    },

    //timeout for page to load( by default the value in 10secs
    getPageTimeout: 20000,
    //waiting for angular page timeout(by default 10 secs)
   // allScriptsTimeout:20,
    //browser option with parameter
 capabilities:{
   'browserName':'firefox'
 },

    //option to use execute the script in local browsers(grid option is get ignored)
    directConnect: false,

 // Options to be passed to Jasmine-node.
   jasmineNodeOpts: {
     showColors: true, // Use colors in the command line report.
       defaultTimeoutInterval: 30000 //default value is 30 secs(this timeout will effect only for 'it' block)
   },

    //method name for creating HTML report(TODO: write a method to create a timestamp in order to preserve all run)

    onPrepare: function(){
        //set the driver
        browser.driver.manage().window().setSize(1680, 1050);

        browser.waitForAngularEnabled(false);

      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: path.resolve(__dirname,'..')+'/reports/timestamp/',
          screenshotsSubfolder: 'images',
          takeScreenShotsOnlyForFailedSpecs: true,
          docTitle: 'protractor-js',
          docName: 'summary.html',
          jsonsSubfolder: 'jsons'
    }).getJasmine2Reporter());
    },

    beforeLaunch: function(){
    //TODO: use this method for test dependencies
    },


    //application url
    baseUrl:'http://computer-database.herokuapp.com',

    //set the global value as true
    noGlobals: false
};
