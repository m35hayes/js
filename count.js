// Instructions:
//
//   Implement each of the functions below to satisfy the problem, considering
//   the following:
//
//     1. does your solution work?
//     2. is your code clear and concise? is it readable?
//     3. is your code performant?
//
//   When you are done, upload your code to Github and send a link to
//   connor@fishtownanalytics.com.

var arr = new Array();

function process(i) {
  /*
    process() takes a single integer as an argument and does
    some background processing on it.
  */

  arr.push(i);
}

function min() {
  /*
    min() returns the minimum of all of the integers passed 
    to process() so far.
  */
  return Math.min(...arr);
}

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
function avg() {
  /*
    avg() returns the average of all of the integers passed 
    to process() so far.
  */

  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function mode() {
  /*
    mode() returns the mode (most frequently occurring) of 
    all of the integers passed to process() so far.
  */

  return arr.sort((a, b) =>
      arr.filter(v => v === a).length - arr.filter(v => v === b).length)
      .pop();
}

function median() {
  /*
    median() returns the median (50th percentile) of 
    all of the integers passed to process() so far.
  */

  arr.sort((a, b) => a - b);
  var mid = arr.length / 2;
  return mid % 1 ? arr[mid - 0.5] : (arr[mid - 1] + arr[mid]) / 2;
}

process(1);
process(2);
process(2);
process(4);

console.log(min()); // should print "1"
console.log(avg()); // should print "2.25"
console.log(mode()); // should print "2"
console.log(median()); // should print "2"