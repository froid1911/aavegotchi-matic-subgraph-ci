const jsonDiff = require("json-diff");

export function compare(result1, result2) {
  const comparedResult = jsonDiff.diff(result1, result2);
  if (comparedResult == undefined) {
    return true;
  }

  return false;
}

export default compare;
