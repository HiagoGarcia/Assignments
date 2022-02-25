function replace_3_and_5(){
    for (var i=1; i<=100; i++){
        if(i%3 === 0){
            console.log("Fizz");
        }
        if(i%5 === 0){
            console.log("Buzz");
        }
        if(i === 15){
            console.log("FizzBuzz");
        }
        else (console.log(i));
    }
}