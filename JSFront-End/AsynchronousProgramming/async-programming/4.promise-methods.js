const alwaysRejectingPromise = Promise.reject('This is a no!');

// alwaysRejectingPromise
//     .catch((err) => {
//         console.log(err);
//     })

const alwaysResolvingPromise = Promise.resolve('This is a yes');

// alwaysResolvingPromise.then((result) => {
//     console.log(result);
// });

const promiseAll = Promise.all([
    alwaysResolvingPromise,
    10,
    'Pesho',
]);

// const promiseAll = Promise.allSettled([
//     alwaysRejectingPromise,
//     alwaysResolvingPromise,
//     10,
//     'Pesho',
// ]);

promiseAll
    .then((values) => console.log(values))
    .catch(err => console.log(err));
