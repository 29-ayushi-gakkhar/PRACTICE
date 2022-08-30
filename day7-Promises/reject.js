// promise is reject


let promise = new Promise( function (resolve , reject)
{
    setTimeout (() => {
        reject( console.log ('new error   ----- not applicable -----!'));
    }, 2000
    )
})

console.log(promise);