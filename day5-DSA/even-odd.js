// array of even odd

const arr = [30, 60 , 11, 32 , 1845 , 90886 ];

function evenElement(arr)
{
    for(let i=0;i<arr.length ; i++)
    {
        if(arr[i]/2==0)
        {
            even.push(arr[i]);
        }
        else
        {
            odd.push(arr[i]);
        }
    }
    console.log('odd........>>>',odd);
    console.log('even........>>>',even);
}