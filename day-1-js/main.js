console.log('hello');
let b = 00;
// creat a function 
function add ()
{
    let a = 30 ;
    console.log (b);
    console.log(10+20);
}
console.log(b);

// call a function 
add();

         // first method

// creating a function called subtract

function subtract (a,b)
{
    console.log(a-b);
}
// call a function 
//        a   b
subtract(20, 10);


         //second method
 
 let x = 100;
 let y = 1000;
 subtract(x,y);
 
 

 // calculator

function calculate(value1, value2 , sign)
{
    if(sign === '+')
    {
        console.log(value1 + value2 );
    }
    else if (sign === '-')
    {
        console.log( value1 - value2);
    }
    else if (sign === '*')
    {
        console.log( value1 * value2);
    }
    else
    {
        console.log( value1 / value2);
    }
}
// call a function 
calculate (20 , 2 ,'+');