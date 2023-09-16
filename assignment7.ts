//                                          exercise no 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var afzal: string = "hello afzal, would you like to learn some typescript today";
console.log(afzal);
//                                          exercise no 3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_name: string = "zAid";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
let word= person_name.split(" ") 
let name3 = word.map(data => data.charAt(0).toUpperCase()+data.slice(1).toLowerCase()).join("");

console.log(name3);
// console.log(person_name.);


//                                          exercise no 4

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

var quote: string = 'Quaid e Azam said: "Work Work and Work",'
console.log(quote);

//                                          exercise no 5

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message

var message: string = "Quaid e Azam said: Work Work and Work"
var QuaideAzam = message;
console.log(QuaideAzam);
//                                          exercise no 6

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var personName: string = "\t ZAID \n "
console.log(personName);
var result = personName.trim()
console.log("person name without whitespace", result);

//                                          exercise no 7

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

var num: number = 8;
console.log("Addition", 6 + 2);
console.log("subtraction", 10 - 2);
console.log("division", 16 / 2);
console.log("muiltplication", 4 * 2);

//                                          exercise no 8
/*You should create four lines that look like this:

console.log(5 + 3) */
console.log('---------------------\n');
console.log('console.log(5+3)\n');
console.log('---------------------\n');


//                                          exercise no 9

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var num: number = 9;
console.log(num);
//                                          exercise no 10

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//                                          exercise no 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var names: string[] = ["zaid", "ali", "hussnain", "shaheer", "hamza"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//                                          exercise no 12

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var names: string[] = ["zaid", "ali", "hussnain", "shaheer", "hamza"]
for (let i = 0; i < names.length; i++) {
    console.log("hello", names[i], "\thow are you buddy");
}
//                                          exercise no 13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transportation: string[] = ["motorcylcle", "car", "aeroplane", "train"];
var statements: string[] = ["it ia easy to move anywhere", "it is comfortable for traveling", "i like it", "i can sleep in train on birth"]
for (let i = 0; i < transportation.length; i++) {
    console.log("i would like to travel in", transportation[i], "because", statements[i]);
    
}


//  object

let transportation1: any = [{
    vehicle: "car",
    statement: "i would like to travel in car because it is comfortable for traveling"
}, {
    vehicle: "motorcycle",
    statement: "i would like to travel on motorcycle in city"
},
{
    vehicle: "aeroplane",
    statement: "i would like to travel in aeroplane"
}];

for (let i = 0; i < transportation.length; i++) {
    console.log(transportation1[i]);
    
    
}
//                                          exercise no 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var inviting_person: string[] = ["hussnain", "ali", "shahrukh"];
for (let i = 0; i < inviting_person.length; i++) {
    console.log("hello", inviting_person[i], "i hope u are fine , well i want to invite you on dinner , i'm very happy if you are came on my dinner");
    
}
//                                          exercise no 15

//     

16 // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

var list:string[]=["ali","afzal",'ahmad'];
list.splice(1,1,"ahsan")
list.unshift("hamza")
list.splice(2,0,"zaid")
for (let i = 0; i < list.length; i++) {
    console.log("hi",list[i],"i would like to invite you on my dinner and i found a bigger dinner table ");
}

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


17 // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("i can invite only two peoples on my dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
while (list.length>2) {
    let removelist = list.pop()
    console.log("sorry",removelist,"i will not invite you on my dinner");
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
list.pop();
list.pop();
console.log(list);


//                                          exercise no 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.


// • Show that your array is still in its original order by printing it.




// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var places: string[] = ["Maka", "madina", "afghanistan", "istanbul", "dubai"];
console.log(places);

// • Print your array in alphabetical order without modifying the actual list.
var alphabetical_order: string[] = [...places].sort();
console.log("alphabetical_order", alphabetical_order);

// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverseOrder: string[] = [...places].reverse();
console.log("reverseOrder", reverseOrder);

// • Show that your array is still in its original order by printing it again.[]
console.log("original arreay", places);

// • Reverse the order of your list. Print the array to show that its order has changed.
var reverseOrder: string[] = [...places].reverse();
console.log("reverseOrder", reverseOrder);



//  exercise no 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.      

var guests: string[] = ["ali", "ahmad", "usman", "umer", "akber"];
console.log(guests)
//                                          exercise no 20

// Think of somet'hing you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries: any = ["euorpe", "russia", "afghanistan", "america", "pakistan"];
console.log("countries", countries);
//                                          exercise no 21

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let address = { city: "faislabad", town: "razaabad", bazar_no: "2", house_no: "etc" };
console.log(address);
//                                          exercise no 23

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

let car1 = "honda";
let car2 = "tyota";
let car3 = "tesla";
let car4 = "lamborgani";
let car5 = "lamozine";
let car6 = "civic"
let car7 = "grandie"
let car8 = "xli"
let car9 = "santro"
let car10 = "mehran"

console.log(car1 == 'honda');
console.log(car2 == 'tyota');
console.log(car3 == 'tesla');
console.log(car4 == 'lamborgani');
console.log(car5 == 'lamozine');
console.log(car6 == 'honda');
console.log(car7 == 'honda');
console.log(car8 == 'honda');
console.log(car9 == 'honda');
console.log(car10 == 'honda');

//                                          exercise no 25

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

let car = "mehran"
console.log(car != 'honda');

// • Tests using the lower case function
let Name: string = "Zaid".toLowerCase();
console.log(Name == "zaid")
//                                          exercise no 26

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let numb: number = 5;
console.log(numb > 4);
console.log(numb == 5);
console.log(numb != 5);
console.log(numb < 4);

// • Tests using "and" and "or" operators

console.log(numb == 5 && numb < 4);
console.log(numb == 5 || numb < 4);

//                                          exercise no 27
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color: string = "red";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
    var message: string = "the player just earned 5 points.";
    console.log(message);
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points
else {
    var message: string = "the player just earned 10 points.";
    console.log(message);
}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.
if (alien_color == "green") {
    var message: string = "the player just earned 5 points.";
    console.log(message);
}
else if (alien_color == "yellow") {
    var message: string = "the player just earned 10 points.";
    console.log(message);
}
else if (alien_color == "red") {
    var message: string = "the player just earned 15 points.";
    console.log(message);
}


//                                          exercise no 28 
// stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age: number = 20
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    var message: string = "the person is baby"
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (age < 4) {
    var message: string = "the person is toodler"
    console.log(message);

}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (age < 13) {
    var message: string = "the person is kid"
    console.log(message);
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (age < 20) {
    var message: string = "the person is teenager"
    console.log(message);
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (age >= 20 && age < 65) {
    var message: string = "the person is adult"
    console.log(message);
}
// • If the person is age 65 or older, print a message that the person is an elder.
if (age >= 65) {
    var message: string = "the person is elder"
    console.log(message);
}

//                                excersice no 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fruits_array: string[] = ["apple", "mango", "bannana", "apricot",]
for (let i = 0; i < fruits_array.length; i++) {
    if (fruits_array[i] == "bannana") {
        console.log("i realy like", fruits_array[i], "!");

    }

}
//                                excersice no 30

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.    

var usernames: string[] = ["ali", "zaid", "umer", "admin", "usman"]
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report");

    }
    else if (usernames[i] != "admin") {
        console.log("hello", usernames[i], "thank you for logging in again.");

    }
}
//                                       exercise no 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var usernames: string[] = ["ali", "zaid", "umer", "admin", "usman"]

// • If the list is empty, print the message We need to find some users!
if (usernames == null) {
    console.log("we need to find users");

}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log(usernames);


//                                       exercise no 32

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users: string[] = ["ali", "ahmad", "usman", "umer", "abubaker"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users: string[] = ["ali", "ahmad", "ahsan", "naveed", "haider"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let i = 0; i < new_users.length; i++) {
    if (current_users[i] == new_users[i]) {
        console.log("the person will need to enter a new username");
    }
    else {
        console.log("the username is available");

    }
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// //                                       exercise no 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

var numbr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbr.length; i++) {
    if (numbr[i] == 1) {
        console.log(numbr[i], 'st');
    }
    else if (numbr[i] == 2) {
        console.log(numbr[i], 'nd');
    }
    else if (numbr[i] == 3) {
        console.log(numbr[i], 'rd');
    }
    else if (numbr[i] == 4) {
        console.log(numbr[i], 'th');
    }
    else if (numbr[i] == 5) {
        console.log(numbr[i], 'th');
    }
    else if (numbr[i] == 6) {
        console.log(numbr[i], 'th');
    }
    else if (numbr[i] == 7) {
        console.log(numbr[i], 'th');
    }
    else if (numbr[i] == 8) {
        console.log(numbr[i], 'th');
    }
    else if (numbr[i] == 9) {
        console.log(numbr[i], 'th');
    }

}
// //                                       exercise no 34

//     Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza: string[] = ["behari kabab", "malai boti", "suppreme"];
for (let i = 0; i < pizza.length; i++) {
    console.log("i like", pizza[i], "pizza");


}

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("the behari kabab piza and other pizza's are very delicious and tasty pizza so thats why i really love pizza");


// //                                       exercise no 35

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

var animals: string[] = ["cat", "dog", "lion"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);


    console.log('A ', animals[i], ' would make a great pet');
}

// //                                       exercise no 36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function t_shirt(size:number,message:string) {
    var print:any = size + message;
    console.log("size",print);
    
    
    
}
t_shirt(32," the life is so difficult")

// //                                       exercise no 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

t_shirt(26,"  I love typescript")


// //                                       exercise no 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(country:string,city:string) {
    console.log(city,"is in",country);
    
    
    
}
describe_city("pakistan","faislabad")
describe_city("pakistan","islamabad")
describe_city("pakistan","lahore")

// //                                       exercise no 39 (same like 38)


// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"
function describe_city1(country:string,city:string) {
    console.log(`"${city},${country}"`);
    
    
    
}
describe_city1("pakistan","faislabad")
describe_city1("pakistan","islamabad")
describe_city1("pakistan","lahore")

// Call your function with at least three city-country pairs, and print the value that’s returned.


// //                                       exercise no 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string,albumTitle:string ) {
    let  output={
    artist,albumTitle
    
    }
console.log(output);

    
}
make_album("junaid jamshaid","mera dil badal dy ")    

function albums(artist:string,albumTitle:string,tracks:any) {
    let output1 ={artist,albumTitle,tracks}
    
    
    if (tracks == undefined) {
        output1.tracks =output1
    }
    return output1
}

var new_album = albums("A","x","1")
var new_album2=albums("B","y","2")
var new_album3=albums("C","z","3")
console.log(new_album);
console.log(new_album2);
console.log(new_album3);

// //                                       exercise no 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

var magicians_names:string[]=["magician1","magician2","magician3","magician4"]
var magicians_names1:string[]=[]
function show_magicians(magicians_names:string []){
    for (let i = 0; i < magicians_names.length; i++){
        magicians_names1.push(magicians_names[i])
        
        
        
        
        
    }
    console.log(magicians_names1);
    
}
show_magicians(magicians_names)

// //                                       exercise no 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians_names:string[]) {
    magicians_names.forEach(Element =>{
        
        console.log("the great",Element);
    })
    
    
}

make_great(magicians_names)

// //                                      exercise no 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

make_great(magicians_names)
const new_array:string []=["magician 1 ","magician 2","magician 3","magician 4" ]
show_magicians(new_array)


// //                                      exercise no 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var items:string []=["bread","chicken","salt","sauces","cheeze","tomato"];
console.log("you orderd a sandwitch with the folowing ingredints");

function sandwich(items:string [],) {
    for(const item of items)
    console.log('-', item);
    
    
}
 sandwich(items)
 
 // //                                      exercise no 45

//  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// let carinformation ={manufacturer:"honda",model:"2022"};
type car = {manufactrer:string,modle:number, argument:number}
type car1 = {color: string,feature:string};

function car_information(a:car|car1) {
    console.log(a);
        
}
car_information({manufactrer:"honda",modle:2022,argument:1,color:"white",feature:"no"})
car_information({manufactrer:"tyota",modle:2020,argument:2,color:"black",feature:"no"})
car_information({manufactrer:"nissan",modle:2021,argument:3,color:"grey",feature:"no"})