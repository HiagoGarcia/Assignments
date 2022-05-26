const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    let map = new Map()
    let arr = []
    for (let i = 1; i <= str.length; i++) {
        if(isNaN(str[i])){
            arr.push(str.splice(i-1))
        };
        
    }
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");