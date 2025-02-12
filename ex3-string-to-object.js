const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("enter string: ", (input) => {
  let obj = parseStringToObject({ str: input, start: 0 });
  console.log(`result object: ${JSON.stringify(obj)}`);
  readline.close();
});

function parseStringToObject(info) {
  let obj = {};
  let keyMode = true;
  let key = "";
  let value = "";
  let str = info.str;
  let start = info.start;

  for (let i = start; i < str.length; i++) {
    switch (str[i]) {
      case ":":
        keyMode = false;
        break;
      case ",":
        keyMode = true;
        key = key.trim();
        obj[key] = value;
        key = "";
        value = "";
        break;
      case "{":
        info.start = i + 1;
        let child = parseStringToObject(info);
        key = key.trim();
        obj[key] = child;
        i = info.start;
        key = "";
        value = "";
        break;
      case "}":
        key = key.trim();
        obj[key] = value;
        info.start = i;
        return obj;
      default:
        if (keyMode) {
          key += str[i];
        } else {
          value += str[i];
        }
        break;
    }
  }
  key = key.trim();
  obj[key] = value;
  return obj;
}
