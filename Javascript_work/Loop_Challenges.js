//Problem 1
for(var i=1; i<=20; i++){
    if(i%2 === 1){
        console.log(i);
    }
}

//Problem 2
for(var t=100; t>=0; t--){
    if(t%3 === 0){
        console.log(t);
    }
}

//Problem 3
var seq=[4,2.5,1,-0.5,-2,-3.5]
for(var i=0; i<seq.length; i++){
    if(i<seq.length){
        console.log(seq[i]);
    }
}

//Problem 4
var sum=0;
for(var i=0; i<=100; i++){
    sum+=i;
}
console.log(sum);

//Problem 5
var product=1;
for(var i=1; i<=12; i++){
    product*=i;
}
console.log(product);