***Q1 count the vowels in string***

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
-----------------------------------------------------------------------
***Write a Program to reverse a string in JavaScript.***
const reverseString = (str)=> {
  return str.split("").reverse().join("")
}

console.log(reverseString('shubham'))
//"mahbuhs"

***Q2 Write a Program to check whether a string is a palindrome string.***
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("")
}

console.log(isPalindrome('shubham'))
console.log(isPalindrome('nitin'))

//answer
//false
//true
-------------------------------------------------------------------------------
**Q3 Find the largest number in an array in JavaScript.**
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

function findLargestNumber(arr) {
return Math.max(...arr)
}

console.log(findLargestNumber([99, 5, 3, 100, 1]));
//asnwer 100
----------------------------------------------------------------------------------

console.log([1, 2, 3].reduce((a, b) => a + b));
//6

console.log('gfg'.repeat(3));
//"gfggfggfg"

console.log(1 + '2');
//12

console.log('6' - 1);
//5

console.log(1 === '1');
//false

console.log(null == undefined);
//true'

--------------------------------------------------------------------------------------
***Write a Program to find a sum of an array?***
function sumOfArray (arr) {
  return arr.reduce((acc, cur)=> {
    return acc + cur
  },0)
}

console.log(sumOfArray([15, 6, 10, 2]));
//33

--------------------------------------------------------------------------------------



