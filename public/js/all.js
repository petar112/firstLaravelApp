let b = "var outside of function";

let test = function(variable){
    let variable1 = "var inside function";

    return variable;
}

console.log(test(b));