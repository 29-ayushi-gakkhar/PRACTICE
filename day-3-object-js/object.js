// object in javascript


const data = {
    name: 'ayushi',
    age : 21 ,
    email : 'ayushigakkhar20017@gmail.com' ,
    hobbies : ['reading' , 'playing', 'painting ' ]
};
console.log(Object.keys(data));
console.log(Object.values(data));


//for each loop

Object.keys(data).forEach((keys)=>{
    console.log(keys);
    console.log(data[keys]);
})