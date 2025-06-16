function reverseStringIterative(string) {
    let result = ""
    let strlength = string.length - 1
    while (strlength>=0) {
        result=result+ string[strlength]
        strlength = strlength-1
    }
    return result
}



function reverseStringRecursion(string) {

    if (string==="") {
        return string
    }
    
    return string[string.length-1] + reverseStringRecursion(string.substring(0,string.length-1))
}


console.log(reverseStringRecursion("Hello"));