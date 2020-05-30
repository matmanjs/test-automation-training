// 写法一
// var myTest = require('./src/index');
// console.log(myTest());

// 写法二
// require('app-module-path').addPath(__dirname);
// var util = require('src/util');

// 写法三
// var path = require('path');
// var baseDir = path.join(__dirname, 'src');
// console.log('==', baseDir);
// require('app-module-path').addPath(baseDir);
// var util = require('util.js');
//
// console.log('typeof util', typeof util, typeof util.sayHello);
// util.sayHello('world!');

// var path = require('path');
// var baseDir = path.join(__dirname, 'src');
// console.log('==', baseDir);
// require('app-module-path').addPath(baseDir);
//
// var addModule = require('./src/add');
// console.log('结果', addModule.add(1, 2));

var path = require('path');
var baseDir = path.join(__dirname, 'src');
require('app-module-path').addPath(baseDir);

var myTest = require('./src/index');
console.log(myTest());