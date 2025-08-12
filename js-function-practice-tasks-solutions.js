// Task 1 Solution

function multiplication(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

console.log(multiplication(2, 4, 6, 8));

// Task 2 Solution

function oddEven(num) {
  return num % 2 === 1 ? num * 2 : num / 2;
}

console.log(oddEven(5));
console.log(oddEven(6));

// Task 3 Solution

function make_avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(make_avg([2, 4, 6, 8, 10]));

// Task 4 Solution

function count_zero(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;
    }
  }
  return count;
}

console.log(count_zero("101010101"));
