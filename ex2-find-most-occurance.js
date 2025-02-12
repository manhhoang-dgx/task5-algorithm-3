const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("enter the array, seperate element by space: ", (input) => {
  let arr = input.split(" ").map((x) => x);
  console.log(
    "element that most occured:",
    findMostOccurance(arr) ?? "array is empty"
  );
  readline.close();
});

function findMostOccurance(arr) {
  let occurance = new Map();
  arr.forEach((element) => {
    if (element != "") occurance.set(element, occurance.get(element) + 1 || 1);
  });

  let maxIndex = null;
  for (let index of occurance.keys()) {
    if (maxIndex == null) {
      maxIndex = index;
      continue;
    }
    if (occurance.get(index) > occurance.get(maxIndex)) {
      maxIndex = index;
    }
  }
  return maxIndex;
}
