
//Week 2 Tasks 
//1-Objects and methods, "this";
//Task-1
const book ={
    title :"JavaScript Basic",
     author :"Brendan Eich",
      yearP :1997};
      function getSummary(){
        for(let i in book){
            if(typeof book[i]==='string'){
               
                console.log(book[i]);
            }
        }
      }; console.log("Output-1");
      getSummary();

//Task-2
const book2={
    title :"JavaScript Basic",
     author :"Brendan Eich",
      yearP :1997,

      age:function(){
        const currentYear=2023;
        const YearAgo=currentYear-this.yearP;
        return YearAgo;

      }

};
console.log("Output-2");
const bookAge=book2.age();
console.log(bookAge);

//Task-3
let cal={
    num1:Number(prompt("Enter the number1")),
    num2:Number(prompt("Enter the number2")),
    add:function(){
      return this.num1+this.num2;
    },
    sub:function(){
        return this.num1-this.num2;
    },
    mult:function(){
        return this.num1*this.num2;
    },
    div:function(){
        return this.num1/this.num2;
    }
};
let addtion=cal.add();
let subtract=cal.sub();
let multiply=cal.mult();
let divition=cal.div();
console.log("Output-3");
console.log(addtion);
console.log(subtract);
console.log(multiply);
console.log(divition);

//Task-4

let cal1={
    num1:10,
    num2:20,
    history:[],
    add:function(){
      const result= this.num1+this.num2;
      this.history.push(result);
      return result;
    },
    sub:function(){
        const result= this.num1-this.num2;
        this.history.push(result);
        return result;
    },
    mult:function(){
        const result= this.num1*this.num2;
        this.history.push(result);
        return result;
    },
    div:function(){
        const result= this.num1/this.num2;
        this.history.push(result);
        return result;
    }
};
console.log("Output-4");
console.log(cal1.add());
console.log(cal1.sub());
console.log(cal1.mult());
console.log(cal1.div());
console.log(cal1.history);

//Task-5

let age=10;

       function increase(){
        
            if(age=>0)
            {
               return function(){
                age++;
                console.log(age);
               }
            }
        };
        function decrease(){
            if(age=>0){
                return function(){
                    age--;
                    console.log(age);
                }
            }
        };

let increment=increase();
let decrement=decrease();
console.log("Output-5");
increment();
decrement();

//Task-6

let person={
     name:"Kanish",
    greet:function(){
    
        return this.name;
    }
}
console.log("Output-6");
console.log(person.greet());

//Task-7

let circle={
    radius:34,
    area:function(){
       return Math.PI*this.radius*this.radius;//PIr^2
    }
};
console.log("Output-7");
console.log(circle.area());

//Task-8

let circle1={
    radiu:10,
    diameter:function(){
        return 2*this.radiu;//2r formula
    },
    circuference:function(){
        return 2*Math.PI*this.radiu;//2PIr formula
    }
};
console.log("Output-8");
console.log(circle1.diameter());
console.log(circle1.circuference());

//Task-9


let account={
    name:"Kanish",
    balance:30000,
    deposit:function(amt){
        return this.balance+amt;
    },
    withdraw:function(amt){
      return this.balance-amt;
}
};
console.log("Output-9");
    console.log(account.deposit(Number(prompt("Enter your deposit:"))));
    console.log(account.withdraw(Number(prompt("Enter your withdraw:"))));

//Task-10

let account1={
    name:"Kanish",
    balance:30000,
    deposit:function(amt){
        return this.balance+amt;
    },
    withdraw:function(accbal){
      return this.balance-accbal;
}
};
console.log("Output-10");
    console.log(account1.deposit(Number(prompt("Enter your deposit:"))));
    let accbal=account1.withdraw(Number(prompt("Enter your withdraw:")));
   
 if(accbal<=0){
    window.alert("Your bank balance is too low ");
 }else{
    console.log(account1.withdraw(accbal));
 }


//2-Arrays,Array methods(push,pop,shift,unshift);
 //Task-1

let fruits=["Apple"];
 fruits.push("Mango");
 console.log("Output-1");
 console.log(fruits);

 //Task-2
 fruits.pop();
 console.log("Output-2");
 console.log(fruits);

 //Task-3
 fruits.unshift("Strawberry");
 console.log("Output-3");
 console.log(fruits);

 //Task-4
 fruits.shift();
 console.log("Output-4");
 console.log(fruits);

 //Task-5
 
 let arrs=[];
 function array(){
    
    for(i=0;i<=5;i++){
        arrs[i]=Number(prompt('Enter the array value'))
    }
    arrs.push(7)
    return arrs;

 }
 console.log("Output-5");
 console.log(array());

 //Task-6
 let str=['the','letter','is','remove'];
 function removeString(){
   str.pop();
 }
 console.log("Output-6");
 removeString();
 console.log(str);

 //Task-7
 let week=['sun','mon','tus','wen','ths','fri','sat'];
 function weekEnd(){
    console.log(week);
    week.shift('sun','mon','tus','wen','ths','fri','sat');
    console.log(week);
    week=[];
    week.unshift('mon','tus','wen','ths','fri','sat','sun');
 }
 console.log("Output-7");
weekEnd();
console.log(week);

//Task-8

let letter=['A','B','C','D'];
function letterAdd(){
    letter.push('z');
    letter.unshift('z');
}
console.log("Output-8");
letterAdd();
console.log(letter);

//Task-9

let movies=['Jailer','Leo','Maaveeran','Tiger','puli']
function movieAdd(){
    newmovie=prompt("enter the new movie names:");
    movies.push(newmovie);
}
console.log("Output-9");
movieAdd();
console.log(movies);

//Iask-10
let movie=['Jailer','Leo','Maaveeran','Puli'];
function removeThirdItem(){
      movie.splice(2,1);
}
console.log("Output-10");
removeThirdItem();
console.log(movie);

//3. Additional methods: map(), filter(), reduce(), slice(), splice()
//1.map()
//exmpale:
var numbers=[1,2,3,4,5,6];
const arr=[10,20,30,40];

function arrFunction(){
    var arr=[50,60,70,80];
    const toFahrenheit=temp=>(temp**2);
    const fahrenheit=numbers.map(toFahrenheit);
    console.log(fahrenheit);
}
 arrFunction();
console.log();
 
const toFunction=temp=>(temp**2);
const fahrenheit=numbers.map(toFunction);
console.log(fahrenheit);

//2.filter()
//exmpale:
var numbers=[1,2,3,4,5,6];
const evenNumbers=numbers.filter(num=>num%2==0);
console.log(evenNumbers);

//3.reduce()
//exmpale:
const values=[1,2,3,4,5];
const sum=values.reduce((oldvalue,currentvalue)=>oldvalue+currentvalue);
console.log(sum);


//4.slice()
//exmpale:
const fruit=["apple","banana","cherry","date","fig"];
const someFruits=fruit.slice(0,4);
console.log(someFruits);

//5.splice()
//exmpale:
fruit.splice(1,2,"yello");
console.log(fruit);
console.log("Task Outputs");
//Task-1

var arr1=[2,4,6,8];
const toFunctions=temp=>(temp**2);
const value=arr1.map(toFunctions);
console.log("Output-1");
console.log(value);

//Task-2
const arr2=[1,2,3,4,5,6,7,8,9];
const evenNumber=arr2.filter(num=>num%2==0);
console.log("Output-2");
console.log(evenNumber);

//Task-3
const product=[10,50,150,40];
const sum1=product.reduce((oldvalue,currentvalue)=>oldvalue+currentvalue);
console.log("Output-3");
console.log(sum1);

//Task-4
const str1=['kanish','string','integer','Array','content'];
const toStrings=temp=>temp.length;
const output=str1.map(toStrings);
console.log("Output-4");
console.log(output);

//Task-5
console.log(str1);
 function toSpliceFunction(){
    str1.splice(2,1);
    console.log(str1);
 }
 console.log("Output-5");
toSpliceFunction();


//Task-6
const int=[2,3,4,5,6,7,8,9];
const intValue=int.slice(1,4);
console.log("Output-6");
console.log(intValue);

//Task-7
const startLetter=str1.filter(lett=>lett.startsWith("A"));
console.log("Output-7");
console.log(startLetter);

//Task-8
const scores=[100,80,70,60];
let grade=function(scores){
    if(scores=>90)
    {
        return "A"
    }
    ifelse(scores<=70&&scores>=89)
    {
        return "B"
    }
    
}
console.log("Output-8");
let values1=scores.map(grade);
console.log(scores);
console.log(values1);

//Task-9
console.log("today output");
let arr3=[20,22,24,26,28];
const avg=arr3.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log("Output-9");
console.log(avg);
console.log(avg/5);

//Task-10
let winterFruits=["Oranges","Cherries","Pears"];
winterFruits.splice(1,0,'Pomegranate','Apple','Grapefruit');
console.log("Output-10");
console.log(winterFruits);













 

 
