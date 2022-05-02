//Problem 1
console.log(hello);
var hello = 'world';
//Interpreter
var hello;
console.log(hello);
hello = 'world';
//Output is 'undefined'

//Problem 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Interpreter
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
//Outcome is 'magnet'

//Problem 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//Interpreter
var brendan;
function print(){
    var brendan;
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
//Outcome is 'super cool'

//Problem 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//Interpreter
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log;
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
//Outcome is 'chicken, half-chicken'

//Problem 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//Interpreter
var mean;
mean();
console.log(food)
mean = function() {
var food;
food = 'chicken';
console.log(food);
food = 'fish';
console.log(food)
}
//Outcome is 'Error, mean is not a function'

//Problem 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Interpreter
var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind()
console.log(genre);
//Outcome is 'Undefined, rock, r&b, disco'

//Problem 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//Interpreter
var dojo;
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
dojo = 'san jose';
console.log(dojo)
learn();
console.log(dojo);
//Outcome is 'san jose, seattle, burbank, san jose'

//Problem 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Interpreter
function makeDojo(name, students){
    const dojo;
    var name;
    var students;
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        var hiring;
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        const dojo;
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
//Outcome is creates the first dojo but breaks on the second from trying to change const dojo'