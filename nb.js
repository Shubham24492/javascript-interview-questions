function outerFunction() {
 function innerFunction() {
   const fruit = 'orange';
 }
 
 innerFunction();
 
 console.log(fruit);
}
 
console.log(fruit);
outerFunction();
 
Promise.resolve().then(() => console.log(1));
setTimeout(() => console.log(3),0);
console.log(4);
new Promise(() => console.log(5));
(async () => console.log(6))()
 
function Counter() {
const [count, setCount] = useState(0);
 
function increment() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
 
return (
  <button onClick={increment}>
    {count}
  </button>
);
}
 
<div class="parent">
<div class="child"></div>
</div>
 
<style>

.parent {height: 100%, width: 100%, background-color: orange, transform: scale(1); }

.child {height: 100%, width: 100%, background-color: red, z-index: 9999; }  
</style
 
