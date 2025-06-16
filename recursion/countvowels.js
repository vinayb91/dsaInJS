



function countVowels(string){
    let count = 0


for (let index = 0; index < string.length; index++) {
    // console.log(text[index]);
//    if (isVowel(string[index])) {
//     count++
//    }
   count = count + Number(isVowel(string[index]))
}
return count

}

function isVowel(charecter) {
    let lowerCase = charecter.toLowerCase()
    let vowels = "aeiou"
    if (vowels.indexOf(lowerCase) !== -1) {
        return true
    }

    return false  
}

function countVowelRecursion(string, stringLength){
if (stringLength==1) {
    return Number(isVowel(string[0]))
}
return countVowelRecursion(string, stringLength-1) + Number(isVowel(string[stringLength-1]))
}

const string = "vinayue"
console.log(countVowelRecursion(string, string.length));


