export default function returnHowManyArguments(...args) {
  return args.length;
}
console.log(returnHowManyArguments());
console.log(returnHowManyArguments(1, 2, 3)); 
console.log(returnHowManyArguments('apple', 'banana', 'orange', 'grape'));
