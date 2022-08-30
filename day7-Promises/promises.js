// PROMISE RESOLVE 


let grassPromise = new Promise( function (resolve , reject)
{
    setTimeout (() => {
        resolve( console.log ('promise resolve   ----- Get a job -----!'));
    }, 2000
    )
})

console.log(grassPromise);

