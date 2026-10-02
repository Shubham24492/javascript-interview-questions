***Q count the vowels in string***

const str = "My name is shubham"

const strArr = [...str.toLowerCase()]

const answer = strArr.reduce((acc, c)=>{
  if(c in acc){
    acc[c] += 1
  }
  return acc;
}, {'a':0, 'e': 0, 'i': 0, 'o': 0, 'u':0})

console.log(answer)
/*
answer
{
  a: 2,
  e: 1,
  i: 1,
  o: 0,
  u: 1
}*/

***Reverse string***
const reverseString = (str)=> {
  return str.split("").reverse().join("")
}

console.log(reverseString('shubham'))
//"mahbuhs"

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("")
}

console.log(isPalindrome('shubham'))
console.log(isPalindrome('nitin'))

//answer
//false
//true


function findLargestNumber(arr) {
let largest = arr[0];

for (let i=1; i<arr.length; i++){
  if (arr[i] > largest)
  {
    largest = arr[i];
  }
}
return largest
}

console.log(findLargestNumber([99, 5, 3, 100, 1]));
//asnwer 100


