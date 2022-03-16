const mathFunction = function (numOne, numTwo, operand) {
  if (operand == "+") {
    return numOne + numTwo;
  } else if (operand == "-") {
    return numOne - numTwo;
  } else if (operand == "*") {
    return numOne * numTwo;
  } else if (operand == "/") {
    return numOne / numTwo;
  }
};
export { mathFunction };
