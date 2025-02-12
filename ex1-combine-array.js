const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "enter the first array, seperate element by space: ",
  (input1) => {
    readline.question(
      "enter the second array, seperate element by space: ",
      (input2) => {
        let arr1 = input1.split(" ").map((x) => x);
        let arr2 = input2.split(" ").map((x) => x);
        console.log(
          "combined array with removed duplicate:",
          combineArray(arr1, arr2)
        );
        readline.close();
      }
    );
  }
);

function combineArray(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let st = new Set();
  let result = [];
  combined.forEach((value) => {
    if (!st.has(value)) {
      st.add(value);
      result.push(value);
    }
  });
  return result;
}
