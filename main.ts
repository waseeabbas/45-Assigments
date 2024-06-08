
                                                    //*ASSIGMENT #1

// download visual code typescript node js

                                                    // * ASSIGMENT#  2

//personal message store a person name in a variable and print a message to that person 
//your message should be a simple such as , " hello eric" ,would you like to learn some python today?
// solution
//let personalname:string ="eric"
//console.log(`hello ${personalname} would you like to learn some python today ?`);



                                                    //* ASSIGMENT # 3

//name case: store a person name in a variable and then print that person name in lowercase , uppercase,
//tittlecase
// solution
//LOWER CASE
//let personName : string ="Wasee Abbas";
//console.log("lowerCase:" ,personName.toLowerCase());
// UPPER CASE
//console.log("uppercase:", personName.toUpperCase());
//tittlecase
//console.log("tittlecase:" , personName.replace(/\b\w/g,c=> c.toUpperCase()));



                                                    //* ASSIGMENT #4

 //famous quote find a quote form a famous person you admire . print the quote and the name of it,s author 
//you output should look something like the following including the qutation mark


 //let quote: string = "education is the key to unlock the golden door of freedom and prosperity";
 //let author: string= "Quaid-e-Azam";
 //console.log(`${author} said that :" ${quote}"`);

                                                // * ASSIGMENT # 5

//famous quote2 ; repeat exersice 4 but this time store the famous person name in a variable then compose your message and store it in a new
//variable called message print your message

//let famous_name: string = " Quaid-e-Azam";
//let quote: string="education is the key to unlock the golden door of freedom and prosperity";
//let message: string =`${famous_name} said that:"${quote}"`;
//console.log(message);



                                                    //^ ASSIGMENT #6
                                                    
//stripping name:store a person name and include some white space character  and the begging and the end of the name make sure you 
 //use each caracter combination "\t" and  "\n" at least one so the white space around the name is displayed then print the name 
 //after striping the white space

 //let personName:string = "\t\n waseeabbas \t\n"
 //console.log("original:" , personName);
 //console.log("stripping :", personName.trim ());
 


                                                    //* ASSIGMENT #7 ,8

// number eight : write addition, substraction, division , multiplication operations that each result in 
// the number 8 be sure to enclose your operations in print statment  to see the result 
                                //or
 // you should create four line that look like this
 //console.log(5 + 3); = 8
                                 

 //console.log(5+3);
 //console.log(10-2);
// console.log(2 *4);
// console.log(16/2);
 


                                                        //* ASSIGMENT #9

//adding comment : chosse two of the program you'are written and add atleast one comment to each if you don't
// have anything specific to write because your program are too simple at this point just add your name and
//the current date at the top of each program file then write one sentence decscribing what what the program


//let personname:string = "waseeabbas";
//let age : number = 23;
//let learning :string = "typescript"
//console.log(` hello my name is" ${personname}" my age is " ${ age}" and I am learning "${learning}" `);


                                                        //* ASSIGMENT # 10

//adding comment : chosse two of the program you'are written and add atleast one comment to each if you don't
// have anything specific to write because your program are too simple at this point just add your name and
//the current date at the top of each program file then write one sentence decscribing what what the program

//let personname:string = "waseeabbas";
//let age : number = 23;
//let learning :string = "typescript"
//console.log(` hello my name is" ${personname}" my age is " ${ age}" and I am learning "${learning}" `);


                                                        //* ASSIGMENT # 11

// name store the name  of the few of your friend in a array called names print each person name by accessing 
// each element in the list one at a time
//var names = ["wasee ", "sidra api", "sfeena", "irfanali", "samina", "baqiali"];
//console.log(names[0]);



                                                    // * ASSIGMENT # 12

 //greeting start wit the array you used in exsersise 11, but instead of just printing each persons name ,
//print a essage to them the text of each to them the text of each message should be the same but each message
//should be personalized with te person name  
//let names :string []=["wasee" , "sidra", "safeena", "irfan", "baqir", "samena", ]
//let message :string = "hello my name is "
//console.log (message + names [2]);
                                                    


                                                         // * ASSIGMENT # 13

//your own array  thing of your favorite mode of transportation  such as a motor cycle or a car and make
// a list that stores several example use your list to print a series of statment about these items such as 
//"I would like to own a honda motorcycle"


//let transportation : string [] = [ "honda" , "mehran", "motorcycle", "cycle", "dala" ]
//let message :string = "I would like to own a honda "
//console.log(message + " "+ transportation [2]);



                                                            // * ASSIGMENT # 14

// guest list , if you could invite anyone living or deceased to dinner who would you invite ? make a list that b
//include at least 3 people youwould like to invite to dinner then use your list to print a message to each person
//inviting them to dinner

//let people : string []=["wasee", "sidra","irfan", "safeena"]
//let message :string =  "I would like to invite you dinner"
//console.log(message+" "+ people[0]);

//console.log(message+" "+ people[1])
//console.log(message+" "+ people[2])
//console.log(message+" "+ people[3]);



                                                    //ASSIGMENT # 15

//Changing Guest List: You just heard that one of your guest can't make the dinner, so you need to
//send out a new set of invitation. you'll have to think to someone else to invite.

//1: Start your excercise from Exercise 14. Add a print statement at the end of your program
//starting the name of the guest who can't make it.
//2. Modify your list, Replacing the name of the guest who can't make it with the name of the
//new person you are inviting.
//3: Print a second set of invitation message, one for each person who is still in your list.




//let guestarr:string []= ["wasee", "sidra","safeena", "burhan", "manahil", "rasib"]
//let cannotattend: string = "safeena"
//console.log(cannotattend + " " + "canot attend the dinner" );

//let newguest:string = "haseeb"
//guestarr[guestarr.indexOf (cannotattend)]= newguest
//console.log(guestarr);

//guestarr.map((items)=>
//console.log(`dear ${items}  you are invited in the dinner`)
//)


                                                //* ASSIGMENT # 16

// more guest you just found a bigger dinner table so now more space is avaliable think of three more guest 
// to invite to dinner
//
// 1=start with your program from exersice 15 add a print statement to the end of your program information people
//that you found a bigger dinner table 
// 2= add one guest to the beggining of your salary 
// 3= add one guest to the middle of your array 
// 4= use append {} to add one guest  to the end of your list 
// 5= print a new set to invitation message one for each person in your list 

//let guestarr: string []= ["wasee", "safeena", "sidra "]
//let cannotattend:string = "safeena"
//let newguest : string = "irfanali "
//guestarr[guestarr.indexOf(cannotattend)]=newguest
//console.log(guestarr);
// guestarr.map((items)=>
//     console.log(`dear ${items}, i found a bigger dinner table so i am invited more peoples.`)    
//);

//let guestbeg : string = "baqirali"
//guestarr .unshift(guestbeg)
//console.log(guestarr);
   
//let middleGuest = "burhan";
//let middleIndex = guestarr.length/2
//guestarr.splice(middleIndex,0,middleGuest)
//console.log(guestarr);middleGuest = "burhan";

//guestarr.push("Rasib")
//console.log(guestarr);
  
//guestarr.map((items)=>
  //   console.log(`dear ${items}, i found a bigger dinner table so i am invited more peoples.`)
//)    


                                                //* ASSIGMENT # 17

//shrinking list : you just found out that your new dinner table won't arrive in time for the dinner and
//you have for only space two guest 

// 1= start with your program fron exersice 16 add a new line that print a message saying that you can invite
// only two people for dinner
//2= remove guest from your list one at a time until only two name remain in your list each time you pop a 
// name from your list print a message to that person letting them know you,r sorry you can,t invite them
//to dinner
// 3= print a message to each of twoo people still on your list , letting them know then,re still invited
// 4= remove the last two name from your list so you have an emty list print your list to make sure you 
// actually have an empty list at the end of your program


//let guests : string []=["ali", "wasee","safeena","baqir","sidra"];

//console.log("due to limitatin space, only two people can be invited in dinner");

//while (guests.length> 2 ){;
  //  const removedguest = guests.pop();
//console.log(`sorry, ${removedguest} , you are no longer invited to dinner`);
//}

//guests.forEach((guests)=>{
//console.log(`dear ${guests}, you are still invited to dinner`);

//})
//guests.pop();
//guests.pop();
//console.log("final guest list", guests);



                                              // * ASSIGMENT # 18

//Seeing the World: Think of at least five places in the world you’d like to visit.

//* Store the locations in a array. Make sure the array is not in alphabetical order.
//* Print your array in its original order.
//* Print your array in alphabetical order without modifying the actual list.
//* Show that your array is still in its original order by printing it.
//* Print your array in reverse alphabetical order without changing the order of the original list.
//* Show that your array is still in its original order by printing it again.
//* Reverse the order of your list. Print the array to show that its order has changed.
//* Reverse the order of your list again. Print the list to show it’s back to its original order.
//* Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

//let placesToVisit:string []=["Brazil", "Tokiyo", "Pakistan", "America"]
 //console.log("original order  :", placesToVisit);

//console.log(" alphabetical order :", [...placesToVisit].sort());

//console.log("original order after to sorting:", placesToVisit);

//console.log("Reverse alphabetical order :", [...placesToVisit].sort().reverse())

//console.log("alphabatical order after reverse sorting:",placesToVisit);

//placesToVisit.reverse()
//console.log("reverse order:", placesToVisit);

//placesToVisit.reverse()
//console.log("back to original order:", placesToVisit);

//placesToVisit.sort()
//console.log("stored in alphabetical order:", placesToVisit);

//placesToVisit.sort((a,b) => b.localeCompare(a))
//console.log("stored in reverse alphabetical order:", placesToVisit);



                                                  //* ASSIGMENT # 19

// dinner guest working with one of the programs from exersice 14 through 18, print a message indicating 
//the number of people you are inviting to dinner

//let invitation: string []=["wasee", "safeena"];
//let count_invitation : number = invitation.length
//console.log(`${count_invitation} , people will come to the dinner`);



                                                          //* ASSIGMENT # 20

//think of something yu could store in a array . for example , you could make a lists of mountains , river
// countries , cities, language or any thing else you did like write a program that creates a list
//containing these items
       


// answer

//let country : string []=["pakistan", " india","japan","iran","karachi"];
//console.log("list of country:");
//console.log(country);



                                                    //* ASSIGMENT # 21

//think of something you could store ina typrscript object. write a program that creates abject containing these items

//let person :{name:string, fname:string, age:number}= { name:"waseeabbas",fname:"male",age:34 };
//console.log(person);



                                              //*ASSIGMENT# 22

//international error: if you have not recieved array index error in one of your programyet, try to make one 
// happen . change an index in one of your program produce an index error . make sure you correct the 
//error before closing the program .

//const days : string []=[ "sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//console.log(days{7});
//console.log(days[6]);



                                  //* ASSIGMENT# 23
 
//conditional test : write a series of conditinal tests. print a statement describing each test
// and your prediction for the result of each test . ypur code should look something like this 
// let car= `subaru`
//console.log("is car == `sabaru`? i predict true");
//console.log(car==`sabaru`);
// look closely at your result and make sure you understand why each line evaluates to true or false
// create at least 10 tests have at least evaluates to trus and another 5 tests evaluates to false

//let car="sabaru";
// console.log("is car == `sabaru`? predict true");
// console.log(car==`sabaru`);

// console.log("is car != `honda city`? predict true");
// console.log(car!=`honda city`);

// console.log("is car != `cultus`? predict true");
// console.log(car!=`cultus`);

// console.log("is car!=`mercedes`? predict true");
// console.log(car!=`mercedes`);

// console.log("is car != `corolla`? predict true");
// console.log(car!=`corolla`);


//console.log("is car== `audi`? predict false");
//console.log(car==`audi`);

//console.log("is car ==`mehran` predict false");
//console.log (car ==`mehran `);

//console.log("is 5<=4? predict false");
//console.log(5 <=4);

//console.log("is 4<= 3? predict false");
//console.log(4<=3);

//console.log("is 4<=3? predict false");
//console.log(4 <= 3);



                                    //*ASSIGMENT# 24

//more conditional test you donot have to limit the number of test you create to 10 if you 
// want to try more comparision write more test have at least one true one false result for each of the
//following 
//test for equality and inequality with string 
//tests using the lower case function 
//numerical test involving equality and inequality greater than and less than greater than , or 
//equal  to , and less than oe equal to 
//tests using "and" and "or" operators
//tests wheather an items is in a array


//let name_1:string="wasee"
//let name_2:string="wasee abbas"
//let name_3:string="sir wasee abbas"

//if (name_1==name_3){
 // console.log("it is equal");
//} else{
  //console.log("it is not equal");
//}
//if (name_1!=name_2){
  //console.log("names are equal");
  
//}

//let age_1:number=18
//let age_2 :number=22
//if (age_1 == 18){
  //console.log("ediligal for vote");
  
//}

//if(age_2!=22){
  //console.log("eligibal for vote in older categori");
  
//}


// if(age_1<= age_2){  //less than 
//   console.log("younger");
// }
                         
// if (age_2>=age_1){ // greater than
//   console.log("older");
  
// }

//if (age_1==18 && age_2 == 22){
  //console.log("peson is eligibal for vote");
  
//}

//if (age_1==18 ||age_2 == 22){
  //console.log("peson is eligibal not for vote");
  
//}

//let country =[]=["Pakistan","Japan","India" ]
//if(country.includes("pakistan")){
  //console.log("pakistan is in country list");
  
//}
//if (!country.includes ("america")){
//  console.log("america is not includein an array");
  
//}



                                //*ASSIGMENT#25

//alien colour#1 imagine an alien was just shot down in a game create a variable called alien_colour and 
//assign it a variable it a value of green yellow or red
//*write an if statement to test weather the aliens colour is green if it is print a message that the player
// just earned 5 point 
//*write one version of this program that passes the if test and another that fails (the version thatplayer
// fails will have no output)

//let alien_colour="green"
 //if (alien_colour=="green")
  //console.log("you earn 5 point ");
  
 //let alien_colour:string="red"
 //if(alien_colour=="red")
  //console.log("no output");



                                        //*AASIGMENT#26
  //alien_colour #2 choose a colour of an alien as you did in exircise 25 and write an ai least chain
  //*if the aliens colour is green print a statment that the player just earend 5 point for shooting the alien
  //*if the liens colour isnot green print the statment that the player just earened 10 point 
  //*write one version of this program that runs the if block and another that runs the else block

  //let alien_colour = "red"
//if(alien_colour=="green"){
//  console.log("player just earend 5 point for shooting the alien");
//}else{
  //console.log("player just earned 10 point");
  
//}

//let alien_colour ="red"
//if(alien_colour=="green"){
//  console.log("player just earened 5 point for shooting the alien");
//}else{
 // console.log("player just earned 10 point");
//}



                                //*ASSIGMENT# 27

//alien colour#3 turn your if_else chain from exersice 5,4 into an ifelse chain
//*if the alien is green print a message that the player earned 5 point 
//*if the alien is yellow , print a message that the player earned 10 point
//*if the alien is red, print amessage that the player earned 15 point 
//* write three version of this program , making sure each message is printed for the appropriate color alien

//let alien_colour:string ="red"
//if(alien_colour == "green"){
  //console.log("5 point");
//}else if(alien_colour=="yellow"){
  //console.log("10 point");
//} else{
 // console.log("15 point");
  
//}




                          //*ASSIGMENT#28

//stages of life . write an if else chain that determines a person stage of life set a value of the variable
//age, and then
//*if the person is less than 2 year old, print a message that the person is the baby 
//*if the perso is alleast 2 year old but less than 4,print a message that the person is a toddler
//*if the person is atleast 4 year old but less than 13 print a message that the person is a kid
//*if the person is at least 13 year old but less than 20 print a messagethat the person is teenager
//*if the person is at least 20 yaer old but less than 65 print a massage that the person is an adult
//* if the person is age 65 or older print a message that the personis an elder

//let age :number=100
//if(age<2){
  //console.log("you are a baby");
//} else if(age<4){
//  console.log("you are a toddler");
//} else if(age<13){
//  console.log("you are a kid");
//} else if(age<20){
  //console.log("you are a teenager");
//} else if(age<65){
//  console.log("you are a adult ");
//} else{
  //console.log("you are older");
  //
//}




                              //*ASSIGMENT# 29

// favorite food, makea array of your favorite food , and then write a series of independent if statment 
//that check for certain fruit in your array
//*make a array of your three favorite fruit and call it favorite_fruit
//*write five if statment each should check weather a certain kind of fruit is in your array if the fruit is 
//in your array the back should print a statment such as you really like bananas !

//let favorite_fruit :string[]=["kivi","orangr","apple","berry","peach"]
//if (favorite_fruit.includes("kivi")){
// console.log("kivi");
//}
//if(favorite_fruit.includes("apple")){
 //console.log("apple");
//}
//if (favorite_fruit.includes("orange")){
// console.log("orange");
//}
//if(favorite_fruit.includes("berry")){
 //console.log("you really like banana");
//}
//if (favorite_fruit.includes("peach")){
  //console.log("you really like banana");
  
//}




                           //   *ASSIGMENT#30
//hello admin, make a array of five or more username , include the name "admin " imagine you are writing code 
//that will print a greeting to each user after they log in to a website loop through the array ,and print the 
//a greeting to eachother
//if the username is "admin" printa special greeting ,such as hello admin would like to see a status report
//otherwise print a generic greeting such as hello eric thank you for logging in again

//let users:string[]=["admin","eric","hasseb","ali","fatima"]
//for(let user of users){
 // if(user ==="admin"){
 //   console.log("hell admin,would you like to see a status report");   
 // }else{
   // console.log(`hello ${user},thank you for logging in again`);
    
 // }
//}



                                  //*ASSIGMENT#31

//no users : add an if test to exersice 28 to make sure the list of user is not empty
//*if the list is empty , printthe message we need to find some users!
//*remove all of the usersname from your array and make sure the correct mesage is printed

//let users:string[]=["eric","hasseb","ali","fatima","admin"]
//if (users.length ===0){
//  console.log("me need to find some users!");
//}  else{
 // for (let user of users){
 //   if(user==="admin"){
 //     console.log("hello admin, would you like to see a status report");
 //   }  else {
 //     console.log(`hello ${user},thank you for logging in again`);
      
 //   }
    
 // }
//}
//users =[]
//if (users.length===0){
 // console.log("we need to find some users");
  
//}



                            //* ASSIGMENT#32



 //Checking Usernames: Do the following to create a program that simulates how websites ensure that 
 //everyone has a unique username.

//  * Make a list of five or more usernames called current_users.
 // * Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
 //also in the current_users list.
 // * Loop through the new_users list to see if each new username has already been used. If it has, print a 
 //message that the person will need to enter a new username. If a username has not been used, print a 
 //message saying that the username is available.
 // * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted


//let current_users:string[]=["admin","eric","hasseb","ali","hamza"]
//let new_users:string[]=["admin","fatima","aliza","noor","burhan"]
//let current_user_lower:string[]=current_users.map(user=>user.toLowerCase())
//for (let new_user of new_users){
 //  if(current_user_lower.includes(new_user.toLowerCase())){
  //  console.log(`sorry ${new_users}, that name is taken`);
 //  }else{
 //   console.log(`yes${new_users},is still in avaliable list`);
    
//   }

//}




                                  //*ASSIGMENT#33

//ordinal number: ordinal number indicate their position in a array , such as 1st or second.most ordinal number end 
//in the,except 1,2and3
//*store the number 1 throught 9 in a array 
//*loop through the array . use an if -else  chain inside the loop to print the proper ordinal ending for each 
//number. you output
//*should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a seperate line

//let numbers:number[]=[1,2,3,4,5,6,7,8,9]
//for(let number of numbers)
//if (number === 1){
//  console.log(`${number}st`);
//}else if(number ===2){
//  console.log(`${number}nd`);
  
//}else if(number ===3){
 // console.log(`${number}rd`);
  
//}else 
 // console.log(`${number}th`); 




                                          //*ASSIGMENT#34

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then 
//use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of 
//the pizza. For each pizza you should have one line of output containing a simple statement like I like
// pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
//output should consist of three or more lines about the kinds of pizza you like and then an additional
// sentence, such as I really love pizza!

//let favorite_pizza :string[]=["chiken","veg","mali","fajita"]
// for (let pizza of favorite_pizza){
//   console.log(pizza);
// }
// console.log("\n");

//for(let pizza of favorite_pizza){
//  console.log(`I reay like ${pizza} pizza!`);
//}

//console.log("I really love pizza");




                                      //*ASSIGMENT#35

//  Animals: Think of at least three different animals that have a common characteristic. Store the names of
//these animals in a list, and then use a for loop to print out the name of each animal. • Modify your 
//program to print a statement about each animal, such as A dog would make a great pet. • Add a line at 
//the end of your program stating what these animals have in common. You could print a sentence such as Any 
//if these animals would make a great pet!

//let animals:string[]=["cat","dog","elephant","lion"]
//for(let animal of animals){
 // console.log(animal);
//}
//console.log("\n");
//for(let animal of animals){
 // console.log(`a ${animal} has a tail`);
  //}



                                  //*ASSIGMENT#36

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
// message printed on it. Call the function.

//function makeShirt(size:string,text :string):void{
 // console.log(`you order a ${size}shirt that says ${text}`); 
//}
//makeShirt( `large`,`"i love typescript"`)
//makeShirt(`medium`,`"I need a big shirt"`)



                                    //*ASSIGMENT# 37

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of
//any size with a different message.

//function makeShirt(size:string=`large`,text :string=`i love typescript`):void{
 // console.log(`you have order a ${size}, shirt that say${text}`);
//}
//makeShirt(`small`, `I need a big shirt to wear`)




                                  //* ASSIGMENT #38

//  Cities: Write a function called describe_city() that accepts the name of a city and its country. The 
//function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
//country a default value. Call your function for three different cities, at least one of which is not in
// the default country.

//function describe_city(city,country:string=`pakistan`):void{
//  console.log(`${city} is an ${country}`);  
//}
//describe_city(`karachi`)// default sentence
//describe_city(`france`,`europe`)
//describe_city(`lahore`,`punjab`)


                              //*ASSIGMENT#39

//  City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
//  "Lahore, Pakistan"                            
//  Call your function with at least three city-country pairs, and print the value that’s returned.


//function cityCountry(city:string,country:string):string {
//return `${city},${country}`
//}
//let c1 = cityCountry(`lahore`,`pakistan`)
//let c2 = cityCountry(`tokyo`,`japan`)
//let c3 = cityCountry(`paris`,`france`)
//console.log(c1);
//console.log(c2);
//console.log(c3);




                                    //*ASSIGMENT#40

//Album: Write a function called make_album() that builds a Object describing a music album. The function 
//should take in an artist name and an album title, and it should return a Object containing these two pieces
// of information. Use the function to make three dictionaries representing different albums. Print 
// return value to show that Objects are storing the album information correctly. Add an optional parameter
// to make_album() that allows you to store the number of tracks on an album. If the calling line includes
// a value for the number of tracks, add that value to the album’s Object. Make at least one new function 
//call that includes the number of tracks on an album.


//function makeAlbum (artist:string,tittle:string):{artist:string;tittle:string}{
 // const dictionaries={
  //  artist:artist.charAt(0).toUpperCase()+ artist.slice(1),
   // tittle:tittle.charAt(0).toUpperCase()+ tittle.slice(1) 
//   }
//   return dictionaries
// }
// let album = makeAlbum("ali","light")
// console.log(album);

//  album = makeAlbum("bilal","red wave")
// console.log(album);

//  album = makeAlbum("hamza","seenbreez")
// console.log(album);



                                  //*ASSIGMENT#41

//magicians: Make a array of magician%E2%80%99s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

//function show_magicians(magicians:string[]):void{
 // for(const magician of magicians){
    
 // console.log(magician.charAt(0).toLowerCase()+ magician.slice(1));
// }
//}
 // const magician:string[]=["ali","bilal","ahmed"]
 // show_magicians(magician)



                                        //*ASSIGMENT#42

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.

//function make_great(magicians:string[]):void{
 // for(let i = 0 ; i < magicians.length;i++){
 //   magicians[i] = magicians[i]  + `the great`
 // }
//}
//const magicians2:string[]=["wasee","sameer","ali","mahad"]
//make_great(magicians2)
//show_magicians (magicians2)



                                  //*ASSIGMENT#43

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and
// store it in a separate array. Call show_magicians() with each array to show that you have one array of
// the original names and one array with the Great added to each magician’s name.

//function make_great2(magicians:string[]):string [] {
//  const greatmagicians :string[]=[];
 // for(let i=0; i<magicians.length;i++){
 //   greatmagicians.push(magicians[i]+  `the great`)
//}
//return greatmagicians;
//}
//const magicians3:string[]=["ali","wasee","ahmed","waqas"]
//const greatmagician2:string[]=make_great2(magicians3)
//show_magicians(magicians3)
//show_magicians(greatmagician2)





                                  //*ASSIGMENT#44

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
//should have one parameter that collects as many items as the function call provides, and it should print a 
//summary of the sandwich that is being ordered. Call the function three times, using a different number of
// arguments each time.


//function sandwich(... items:string[]):void{
//  console.log("sandwish order");
//  for(let i=0;i<items.length;i++)
//    console.log(`${items[i]}`);
//}

//console.log("enjoy your sanwich wasee abbas");

//sandwich(`capsicum`,`tomato`,`chicken`)
//sandwich(`beef`,`chesse`)
//sandwich(`garlic`,`chicken`,`mayo`,`sauce`)



                            //*ASSIGMENT#45

//Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//type car={
//  manufacture:string
//  model:string
//  [key:string]:any;
//}
//function createCar(manufacture:string,model:string,optional:Record<string,any>):car{
 // return{
 //   manufacture,
 //   model,
 //   ...optional
 // }
//}

//const mycar:car=createCar("toyota","corolla",{color:"silver" ,year:"2024"})

//console.log(mycar);
