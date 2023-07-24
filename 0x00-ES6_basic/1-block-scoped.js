export default function taskBlock() {
  let x = 10;
  let y = 5;  

  if (x > y) {
    let z = x + y;
    console.log("Inside the block - z:", z);
  }
  console.log("Outside the block - x:", x);
  console.log("Outside the block - y:", y);
}
taskBlock();
