import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import User,{CURRENT_USER_QUERY}from './User';
import Render from './Render';
import styled, { consolidateStreamedStyles } from 'styled-components';


const TEST_QUERY = gql`
query TEST_QUERY($id:ID!){
    item(where:{id:$id}){
        id 
        description

    }
}
`
/*

findIndex- look for index based on condition
indexOf - first occurence of element
charAt
some(used)
every(used)
sort(used)
pop(used) 
push(used)
shift(used) 
unshift(used)
forEach
map(used)- doesn't change orignal array
filter(used - doesn't change original array
reduce 
splice - changes original array
slice - doesn't change original array
split - splits string into an array of substrings
*/ 



let addTotal = [
    {firstName:"William",lastName:"Frank",productId:3422243666,product:"socks"},
    {firstName:"Ted",lastName:"Fran",productId:342220000,product:"headlights"},
    {firstName:"Will",lastName:"Drake",productId:342222222,product:"socks"},
    {firstName:"Bert",lastName:"Sean",productId:3422232222,product:"socks"},
    {firstName:"John",lastName:"Junior",productId:34267777,product:"shoes"},
    {firstName:"Susan",lastName:"Betty",productId:342224443,product:"socks"},
].reduce((acc,customer)=>{
     
      
      if(!acc[customer.product]){
        acc[customer.product] = 0;
        
      }
      acc[customer.product]++
      return acc;
    
},{})

console.log("TOTAL RESULTS:");
console.log(addTotal);


/*

 Practice recipe(1):"Movie Reviewer"
 
 Write a function that accepts an "movie" array as its argument
 Test(1):Filter through the array to make sure there's no empty review message string
 Test(2):Take filtered array of movie objects and make sure there's at least one movie reviewer for a given object
 Test(3):Test array objects to see if every object has an age greater than or equal to 18
 Test(4): write an variable that maps
 
 Write a conditional statement that use Test(1) and Test(2) and returns
 modified array if true!
 
 Array methods used: filter,map,every,some
 

 :)HappyCoding:(

 */

//Create an object that lets me know the number of times an element is shown.

let customer = [
    {id:"4$555221!",firstName:"Bill",lastName:"William",item:"Shoes"},
    {id:"4$5553773!",firstName:"Fred",lastName:"Tank",item:"T.V."},
    {id:"66$211112!",firstName:"Frank",lastName:"Lizzo",item:"T.V."}
];

let condition = customer.findIndex(element => element.firstName === "Bill");
let find = customer.splice(condition,1);

let splice = customer.splice(condition,1,{status:"Winner"});
console.log("condition results")
console.log(customer);

let howMany = customer.reduce((acc,items)=>{
   
    
    
    if(!acc[items.item]){

     acc[items.item] = 0;
    }

    acc[items.item]++

    return acc;

},{})

let hold = [];
hold.push(howMany);
console.log("MY REDUCE RESULTS")
console.log(hold);

const moviesArray = [
    {movieTitle:"Avengers",reviewMessage:"",reviewer:"Jill",age:17},
    {movieTitle:"Knives Out",reviewMessage:"Awesome, really enjoyed it!!!",reviewer:"Bob",age:33},
    {movieTitle:"Sonic",reviewMessage:"Super cool!!!", reviewer:"Sam",age:45}
]

function movieReview(array){
 const filter = array.filter(movie => movie.reviewMessage !== "").map(movie => {return movie});
 let some = filter.some(person => person.reviewer !== "" && person.reviewer !== " ");
 let every = filter.every(person => person.age >= 18);

 if(some && every){
     return filter;
 }
}

const testString = " ";
console.log("String results:");
console.log(testString.length);
console.log("MOVIE RESULTS BELOW:")
console.table(movieReview(moviesArray));

/*function myMovieReviews(array){
    const holdMovieData = array.
    filter(movie => movie.reviewMessage && movie.reviewMessage!== " " && movie.reviewMessage!== null )
    
    const doesMovieHaveAReviewer = holdMovieData.some(movie => movie.reviewer);
    
    console.log("Is there a reviewer?");
    console.log(doesMovieHaveAReviewer);
    
    const appAge = holdMovieData.every(movie => movie.age >= 18);
    const res = holdMovieData.map(movies => {return {...movies,["message"]:"Thanks for your time"}});
    
    if(doesMovieHaveAReviewer){
        return res
    }
    else{
        "Didn't pass required test!!!:("
    }
    
    
}
console.log("Movie results below:")
console.log(myMovieReviews(moviesArray));*/
const grades = [
    {firstName:"Jill", lastName:"Scott", grade:70},
    {firstName:"Johnny", lastName:"Fellow", grade:100},
    {firstName:"John", lastName:"Calloun", grade:89},
    {firstName:"Jo", lastName:"Cathy", grade:22},
    {firstName:"Kimberly", lastName:"Cindy", grade:85},
    {firstName:"Kim", lastName:"Smith", grade:100},
    {firstName:"Kimber", lastName:"Cat", grade:75},
    {firstName:"Kimmy", lastName:"Drew", grade:92},
    {firstName:"Tim", lastName:"Moore", grade:100},
    {firstName:"Timmy", lastName:"Lex", grade:78},
    {firstName:"Anderson", lastName:"Cooper", grade:55},
]
/*Practice recipe(2):"Sort student grades"
 
 Write a function that accepts an array of 11 "student" objects.
 Test(1):Sort grades from highest to lowest
 
 
 *Write conditonal that will combine Test 2,3,4,5 below:*
 
 Test(2):Reduce the amount of objects to 10 by removing last object
 Test(3):Filter grades with scores above 80
 Test(4):Reduce amount of objects by removing first object
 Test(5):Add a object to the beggining of array with a random student with an score of 333
 
 Array methods used:sort pop push shift unshift 
 */
function myTeacher(array){
    const sort = array.sort((firstGrade,secondGrade)=>{
        if(firstGrade > secondGrade){
            return 1;
        }else{
            return 1;
        }
    });
    

    const filter = sort.filter(person => person.grade > 80).map(person => person);

    if(filter){
        filter.pop();
        filter.shift();
        filter.unshift({firstName:"Dan",lastName:"Hickory",grade:333});
        return filter;
    }

    
}
console.log("My teacher results");
console.table(myTeacher(grades));


function sortTeachersGrades(array){
    const sort = array.sort((a,b)=>{
        if(a.grade > b.grade){
            return -1
        }else{
            return 1;
        }
    });
    
    console.log("Original array")
    console.table(grades);
    
    const removed = sort.pop();
    
    console.log("Student removed at end");
    console.log(removed);

    const filter = sort.filter(student => student.grade > 80);

    if(filter){
        const studentRemoved = filter.shift()
        
        console.log("Student removed at beggining")
        console.log(studentRemoved);
        
        filter.unshift({firstName:"Bill", lastName:"Johnson",grade:333});
        return filter.map(student =>{return {...student,message:"Congrats, you were the peak performers"}});
    }
    else{
        return "Something went wrong!!!:(";
    }

   //return sort;
   
}
const messages = [
    {message:"Bill is here @ 3:00 p.m."},
    {message:"Cindy said she might notmake it a @ 3:00 p.m."},
    {message:"I'm not for sure about this situation"},
    {message:"Bill is here now"},
]


/*Practice recipe(3):"Find the right message"
 
 Write a function that accepts an array of message objects.
 Place each word in the array in its own array via the map and split method
 Flatten the multiple arrays created by map with the reduce method
 "Scrape" what words you would like via slice
 destructure values in new array 
 Use reduce method to display new message
 
 Array methods used:split,splice,slice,charAt,reduce,forEach
 */


console.log(addToOriginalNumber);

function createNewMessage(Array){
    const split = Array.map(message => message.message.split(" "));
    const flatten = split.reduce((array,message)=>{
      return [...array, ...message];
    },[])
    const greeting = flatten.slice(0,3);
    console.log("Where my chars at?");
    console.log(greeting[0].startsWith("Bill"));
    const firstWord = flatten.slice(7,8);
    const lastWord = flatten.slice(6,7);
    
    const newMessage = [...greeting,...firstWord,...lastWord];

   const x = newMessage.reduce((acc,word)=>{
       return  acc + " " + word;
   },"Hey")

   return x;
    
}
console.log("Messages below:")
console.log(createNewMessage(messages));

/*console.log("Sort results:");

console.table(sortTeachersGrades(grades));*/


let originalNumber = 10;
let addToOriginalNumber = ++originalNumber;
addToOriginalNumber -= originalNumber;

let even = 12 % 7;

/*if(even === 0){
    alert("Hey,I'm even");
}else{
    alert("Hey,I'm odd");
}*/
let round = Math.round(2.5);

let randomDates = [
    {id:1,firstName:"Cheryl",lastName:"Dennis"},
    {id:2,firstName:"Cathy",lastName:"Donald"},
    {id:3,firstName:"Betty",lastName:"Fleet"},
    {id:4,firstName:"Jeenifer",lastName:"Moore"},
    {id:5,firstName:"Brenly",lastName:"Scott"},
    {id:6,firstName:"April",lastName:"Smith"},
    {id:7,firstName:"Franky",lastName:"Lou"},
    {id:8,firstName:"Jennie",lastName:"Dean"},
    {id:9,firstName:"Ashlie",lastName:"Hayes"},
    {id:10,firstName:"Shannon",lastName:"Brook"}
]
let random = Math.random();
let randomGirl = Math.floor((random * 10) + 1);

let pick = randomDates.filter(girl => girl.id === randomGirl).map(girl => girl);
console.log("<h1>My date</h1>")
console.log(pick);
console.log("Your date's name is:" + "\n" + `${pick[0].firstName} ${pick[0].lastName}` + "\n" + randomGirl);




/*
Because I'm using a "postfix" increment,
"originalNumber" needs to be called again to view 
the result from our ++ operator.

If I use a prefix increment, I wouldn't need to call originalNumber again
and could call "addToOriginalNumber"
*/

let firstNumber = 10;

let changeNumber = ++firstNumber;

let orderItems = [{id:5555,item:"soap",price:"45.00"}].map(item =>{
    const hold = {
        ...item,
        id:null
    }
    
    return hold;
})

console.log("CARTITEMS:");
console.table(orderItems);












/*const PJ = (props) =>{

    const array = [
        {name:"Bob",age:100,born:1200,died:1400},
        {name:"Valerie",age:61,born:1900,died:2000},
        {name:"Andy",age:67,born:1984,died:2040},
        {name:"Carol",age:44,born:1999,died:2030},
        {name:"Nick",age:33,born:1988,died:2040},
        {name:"Leonard",age:25,born:1986,died:2030},
    ];

    const array2 = [
        {name:"Tim",sex:"male",age:25},
        {name:"Carol",sex:"female",age:44},
    ]
    const sortAge =array.sort((a,b)=>{
        if(a.age > b.age){
            return 1
        }else{
            return -1
        }
    }).map((person) => {{person.age}})
    const basicArray = ['Cretella,Michelle',
    'Israel,Melanie','Perkins,Melanie','Kruger,Michael',
    'Condic,Maureen',
    ];
    /*const data = ["Bob","Tim","David","Jeff"];
    console.log(data.sort());
    const sortLastName = basicArray.sort((a,b)=>{
        const [aFirst,aLast]= a.split(",");
        const [bFirst,bLast] = b.split(",");

        if(aFirst > bFirst){
            return 1
        }else{
            return -1
        }
        

        //console.table();
    })
    console.table(sortAge);
    const showData1 = (item)=>{
        console.log(item);
    }
    return(
        <User>
            {(payload)=>(
                <button onClick={(e)=>{
                   e.preventDefault();
                   const showData2 = (payload)=>{
                       console.log(payload);
                   }
                   return showData2(payload);
                }}>

                </button>
            )}
        </User>
    )
}*/


//Conditional rendering options:
//1.Regular if/else expression
//2. if/else expression that changes a variable
//3.Ternary expression
//4.Short ciruit conditional
//5.IIFE
//6.Switch statement
const Table = styled.table`
 table,th{
    border: solid 3px black;
 }
`
//Write code that filters through a married couple and randomly chooses who washes dishes
//Write code that randomly splices an array item and display the message in a functional component
const Child = (props) =>{
    
    let random = Math.floor((Math.random() * 3) + 1)
    let data = [{message:"Hey Billy"},{message:"Hey Jill"},{message:"How is everyone?"}];
    let splice
    let test = random === 3 ? splice = data.splice(random - 1) : splice = data.splice(random -1, random);
    
    console.log("RANDOM RESULTS:" + "\n" + random);
    
   return(function(){
     switch(props.update){
         case false : return <p>Hello false</p>
          break;
         case true : return <p>Hello true</p>
          break;
         default:
          return <p>"Monkey's have taken over the internet"</p>
     }
   }())
   
}  
    
       
       
       /*<div>
           {props.update ?
            <h1>Your dates name is {props.date[0].name} <br/>
            and her age is {props.date[0].age}</h1> 
           :<h1>No dates at this moment </h1>
           }
          <button onClick={()=>props.childFunction()}>Choose date</button>
       </div>*/
        
      

    



export default Child;
