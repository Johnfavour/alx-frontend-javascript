function taskFirst() {
  const message = "This is a constant message.";
  console.log(message);
}
function taskNext() {
  let count = 0;
  console.log("Count:", count);

  count++; 
  console.log("Count after increment:", count);
  
  count = 10;
  console.log("Count reassigned:", count);
}
taskFirst();
taskNext();

