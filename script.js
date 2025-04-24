function isSameType(value1, value2) {
  //your js code here
	if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
	return typeof value1 === typeof value2;
}
function parseValue(val) {
  // Try parsing as number
  const num = Number(val);
  if (!isNaN(num)) return num;

  // If it's the string 'NaN', return actual NaN
  if (val === 'NaN') return NaN;

  return val;
}




// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

