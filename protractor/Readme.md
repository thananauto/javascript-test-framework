Installtion:
1. npm install protractor --save





Tips and Tricks
1. Install the protractor and webdriver manager modules globally
2. Disable the SSL flag by executing below commands
  export NODE_TLS_REJECT_UNAUTHORISED=0
  npm config set strict-ssl=false --global
3. each => is used to traverse the element.all or $$('css value')
4. then => is used to do promise the each element
5. Map => its a class, used to return the class values

** Read Javascript simplify to understand all methods
** Refer Jasmine chear sheet for more options
https://devhints.io/jasmine

** If gecko driver  fails add --ignore_ssl or --proxy (if you benind the proxy) command at end of 'webdriver-manager update'

framework Type:
1. Jasmine default in protractor
2. Mocha(not officially supported)
3. cucumber js(separte support as standalone)

npm init -y ==> used to create a package.json file.. it keep track on all dependancies made on the project
