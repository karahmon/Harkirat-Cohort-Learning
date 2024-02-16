/*
//variables, data types
let Fname="monil";
let age=20;
let married=false;
console.log("Name of the person is:-"+Fname+"Age of the person is:-"+age+"Is the person married:-"+married);

// if else
if(married==true){
    console.log("The person is married")}
     else{
    console.log("The person is not married");
};
let answer=0;

//loops
for(i=0;i<=100;i++){
    answer=answer+i;
};
console.log(answer)

//Array
const ages=[21,30,43,50,63,70,80,91,99];
for(i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    };
};

const no=[21,30,43,50,105,70,80,91,99];
let maxno=0;
for(i=0;i<=no.length;i++){
    if(no[i]>maxno){
        maxno=no[i];
    };
      
};
console.log(maxno);   

const personName=["monil","mohit","mohini"];
const personAge=[21,30,43];
const personGender=["male","male","female"];
const noofperson=personName.length;
for(i=0;i<noofperson;i++){
    if(personGender[i]=="male"){
console.log(personName[i]);
    };
};
const user1={
name:"monil",
age:21,
gender:"male",
};
console.log(user1.gender);
const allUsers=[{
    firstname:"monil",
    age:21,
    gender:"male",
},{
    firstname:"mohit",
    age:30,
    gender:"male",
},{
    firstname:"mohini",
    age:43,
    gender:"female",
}]
for(i=0;i<allUsers.length;i++){
    if(allUsers[i].gender=="male"){
    console.log(allUsers[i].firstname);
};
};

const listofno=[21,30,43,50,63,70,80,91,99];
for(i=listofno.length;i>-1;i--){
        console.log(listofno[i]);
    };

//Function
function sum(a,b){
    return a+b;    
}
const value=sum(2,3);
console.log(value); 

//callbacks
function sum(num1,num2,fntoCall){
    let result=num1+num2;
    fntoCall(result);
}
function displayresult(data){
    console.log("Result of the sum is :"+data);
}
function displayresultPassive(data){
    console.log("Sum Result is :"+data);
}
const ans=sum(2,3,displayresult);

function calulateArithmetic(a,b,arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=calulateArithmetic(2,3,sum)
console.log(value);
//SetTimeout
function greet(){
    console.log("Welcome to Dadabhagwan Foundation");
}
setTimeout(greet,1*1000);// second part is how many seconds you want to wait before the function is called
// setInterval:- it will call the function after every 1 second

// 30 Second Counter
let count=30;
function counter(duration){
    count=duration;
    if(count==0){
        console.log("Time is up");
    process.exit(0); // to stop the program
     };
    console.log(count);
    count=count-1;
    
  }
setInterval(counter,1*1000);

//calculate time it takes by settimeout call and the inner function actually gets called
let start=Date.now();   
function call(){
    let end=Date.now();
    console.log("Time taken by the function is:-"+(end-start));
};
setTimeout(call,1*1000);

//Create a terminal Clock
function terminalClock(){
    console.clear(); // to clear the console
    var d = new Date();// to get the current time
  var n = d.toLocaleTimeString();// to get the time in the format of 12:00:00 AM/PM
  console.log(n);
  };
setInterval(terminalClock,1*1000);
*/
