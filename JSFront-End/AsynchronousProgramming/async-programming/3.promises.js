console.log('first');
const promise = new Promise(function (resolve, reject) {
    if (Math.random() < 0.5) {
        return reject('Merrage is calnceled!');
    }

    setTimeout(() => {
        resolve('Just Married :)');
    }, 2000);
});

console.log('second');

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log(promise);
    });

console.log('third');






// Callback Hell
// asyncFunction1((result1) => {
//     asyncFunction2((result2) => {
//         asyncFunction3(() => {
//             asyncFunction4(() => {
//                 // Callback hell ...
//             })
//         })
//     });
// });
