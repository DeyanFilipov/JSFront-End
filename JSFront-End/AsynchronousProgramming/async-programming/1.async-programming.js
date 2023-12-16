console.log('start');

setTimeout(() => {
    console.log('after start');
}, 4000)

setTimeout(() => {
    console.log('middle');
}, 2000);

console.log('end');
