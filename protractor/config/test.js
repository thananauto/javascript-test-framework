var path = require('path');

console.log(__dirname)

console.log(path.dirname(__dirname).split(path.sep))

console.log(path.basename(path.dirname(__dirname)));

console.log(path.resolve(__dirname,'..'))