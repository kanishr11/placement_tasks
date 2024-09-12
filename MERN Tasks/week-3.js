
// //Week-3
// //1.Recursion and stack;
// //Task-1 Implement a function to calculate the factorial of a number using recursion.
// console.log("Output-1");
// // let n=5;
// function factorial(n){
//     if(n==0){
//         return n;
//     } else if(n==1){
//         return n;
//     } else {
//       return n*factorial(n-1);
      
//     }
// }
// console.log(factorial(4));

// //Task-2: Write a recursive function to find the nth Fibonacci number.
// console.log("Output-2");

// function fibonacci(n){
//     if(n==0){
//         return n;
//     } else if(n==1){
//         return n;
//     } else {
//       return fibonacci(n-1)+fibonacci(n-2);
      
//     }
// }
// console.log(fibonacci(4));

// //Task-3: Create a function to determine the total number of ways one can climb a staircase with 1, 2, or 3 steps at a time using recursion.
// console.log("Output-3");

// // function climbfunction(n){
   
// //     if(n==0){
// //         return console.log(n);
// //     }else if(n==1){
// //         return console.log(n);
// //     }else{
// //        console.log((n-1)+(n-2)+(n-3));
// //     }
// // }
// // climbfunction(3);

// function climbStairs()
// {
//     let n=4;
//     let steps=[1,1];
//     for(i=2;i<n+1;i++){
//         steps.push(steps[i-1]+steps[i-2]);
//     }
//     console.log( steps[n]);
// }
// climbStairs();

// //Task-4: Write a recursive function to flatten a nested array structure.
// console.log("Output-4");

// const arr=[1,2,[3,4,[5,6]]];
// const flatNum=arr.flat(Infinity);
// console.log(flatNum);

// //Task-5: Implement the recursive Tower of Hanoi solution.
// console.log("Output-5");

// function towerOfHanoi(n,fromRod,toRod,usingRod)
// {
// if(n==1){
//     console.log(`Move disk ${fromRod} to ${toRod}`)
//     return 
// }
// towerOfHanoi(n-1,fromRod,usingRod,toRod)
// console.log(`Move disk ${n} from ${fromRod}`)
// towerOfHanoi(n-1,usingRod,toRod,fromRod)
// }
// towerOfHanoi(2,'A','C','B');

// //2.JSON and variable length arguments / spread syntax:
// //Task-1: Write a function that takes an arbitrary number of arguments and returns their sum.
// console.log("Output-6");

// function argumentFunction(a,b,c){
//     arguments =a+b+c;
//     result= arguments;
// }
// argumentFunction(1,2,3);
// console.log(result);

// //Task-2: Modify a function to accept an array of numbers and return their sum using the spread syntax.
// console.log("Output-7");

// function spreadFunction(a,b,c,d,e){
//     return result=a+b+c+d+e;   
// }
// let num=[3,5,8,6,9];
// spreadFunction(...num);
// console.log(result);

// //Task-3: Create a deep clone of an object using JSON methods.
// console.log("Output-8");

// let object={
    
//         name:'kanish',
//         getterFunction(){
//             console.log("hello clone object");
//     }
// }
// console.log(object);
// let clone=Object.assign({age:20},object);
// console.log(clone)

// //Task-4: Write a function that returns a new object, merging two provided objects using the spread syntax
// console.log("Output-9");
// function clonefunction(){
//     let newobj={name:'kanish',age:20,address:'Punjai pulimpatti'};
//     let newobj2={name1:'kavin',age1:18,address1:'coimbatore'};

//     let clone2={...newobj,
//         ...newobj2}
//     console.log(clone2);
// }
// clonefunction();


// const obj='{"name":"kanish","age":20}';
// const obj2='{"lastname":"rpb","address":"Punjai pulimpatti"}';

// let newobj=JSON.parse(obj);
// let newobj2=JSON.parse(obj2);

// let objclo=Object.assign({},newobj,newobj2);

// let objclo2={...objclo};

// console.log(objclo2);
// console.log(objclo);

//Task-5: Serialize a JavaScript object into a JSON string and then parse it back into an object.
console.log("Output-10");

let cont='{"name":"kanish","age1":18,"address":"coimbatore"}';
console.log(typeof(cont));
let myobj=JSON.parse(cont);
console.log(myobj);
console.log(typeof(myobj));

//Closure:
//Task-1: Create a function that returns another function, capturing a local variable.
console.log('Outut-11');

function createCounter(){
    let count=0;
     
    function increment(){
        count++;
        console.log(count);
    }
    return increment();
}
createCounter();


//Task-2: Implement a basic counter function using closure, allowing incrementing and displaying the current count.
console.log("Output-12");

function createCounterFunction(){
    let count=0;
     
    function incrementFunction(){
        count++;
        console.log(count);
    }
    return incrementFunction();
}
createCounterFunction();

//Task-3: Write a function to create multiple counters, each with its own separate count.
console.log("Output-13");

function multiCounter(){
    let count=2;
     function increment1(){
        count++;
        console.log(count);
     } 
     function decrement1(){
        count--;
        console.log(count);
     }
     return increment1(),decrement1();
}
multiCounter();

//Task-4: Use closures to create private variables within a function.
console.log("Output-14");

function privateFunction(){
    let a=10;
    let b=20;
      function clouserFunction(){
        console.log(a+b);
     }
     return clouserFunction;
}

let counter =privateFunction();
console.log(counter());

//Task-5: Build a function factory that generates functions based on some input using closures.
console.log("Output-15");

function createAdder(factory){
  return function(number){
    return factory*number;
  };   
}
const addFive=createAdder(5);
console.log(addFive(5));

//Promise,Promises chaining:
//Task-1: Create a new promise that resolves after a set number of seconds and returns a greeting.
console.log("Output-16");

let mypromise= new Promise(function (resolves,reject){
    resolves("hi...");
    reject("error");
});
mypromise.then( function(value){
    console.log(value);
},function(error){
    console.log(erroe);
});
//another method
let p1=new Promise(function(resolve,reject){
    let x=0;
    let count=0;

    if(x == 0){
        count++
        resolve(count);
    }else{
        reject("error");
    }
});

p1.then((message)=>{console.log(message)}).catch((message)=>{console.log(message)})


 //Task-2: Fetch data from an API using promises, and then chain another promise to process this data.
console.log("Output-17");
function getText(){
    return fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(e=>{
        return e.json();
    });
    getText().then(e=>{
        console.log(e);
    }).catch(err=>{console.log(err);});
}
getText();

//Task-3: Create a promise that either resolves or rejects based on a random number.

console.log("Output-18");
 
function pro(){
    return new Promise((resolve,reject)=>{
        let num=Math.random()*10;
        if(num>5){

            resolve("Accepted");
        }else{
            reject("Rejected");
        }
    });
}
pro().then(e=>{console.log(e);}).catch(err=>console.log(err));

//Task-4: Use Promise.all to fetch multiple resources in parallel from an API.
console.log("Output-19");
function fetchFunction(){
    let arr1=['https://datausa.io/api/data?drilldowns=Nation&measures=Population'];
    let fetchapi=arr1.map(e=>fetch(e));
    Promise.all(fetchapi).then(e=>{
        return Promise.all(e.map(ee=>ee.json()))
    }).then(e=>{
        console.log(e);
    }).catch(err=>{console.log(err);});
}

fetchFunction();
   
//Task-5: Chain multiple promises to perform a series of asynchronous actions in sequence
console.log("Output-20");

function tossCoin1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("First");
            resolve(1);
        },1000);
    });
}
function tossCoin2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Second");
            resolve(1);
        },2000);
    });
}
function tossCoin3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Third");
            resolve(1);
        },3000);
    });
}
tossCoin1().then(()=>tossCoin2()).then(()=>tossCoin3());





