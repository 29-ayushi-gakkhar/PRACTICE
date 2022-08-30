// remove the duplicate 
 
const arr = [1,2,3,4,1,2]
function removeDuplicate (arr)
{
    const res = [];
    for (let i=0; i<arr.length;i++)
    {
        if (!res.includes(arr [i]))
        {
            res.push(arr[i]);
        }
    
    else
    {
        console.log(arr[i]);
    }
}
    console.log(res);
}