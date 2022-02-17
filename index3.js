const sayHi = import('./deps/dep1');
const sayHello = import('./deps/dep2');

console.info(sayHi());
console.info(sayHello());
console.info(sayHello === sayHello2);
