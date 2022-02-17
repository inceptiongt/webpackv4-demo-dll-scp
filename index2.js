const isboolean = require('lodash.isboolean');
const map = require('lodash.map');

const sayHi = require('./deps/dep1');
const sayHello = require('./deps/dep2');

const sayHello2 = require('./deps/dep1'); // will not refence 

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);

const data = map(['Aindex2', 'B2', true, false], function (item) {
    return isboolean(item) ? String(item) : item
});
console.info(data);
