const Stack = require('./stack');
const Queue = require('./queue');

const main = function () {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
};

console.log(main());

//2 - Useful methods for a Stack
const peek = function (stack) {
  const node = stack.top;
  return node.data;
};

console.log('On top: ', peek(main()));

const isEmpty = function (stack) {
  if (stack.top === null) {
    return 'There\'s nothing in this stack';
  }

  return 'There\'s something in this stack';
};

console.log('Is there anything here? ', isEmpty(main()));

const display = function (stack) {

  while (stack.top !== null) {
    console.log('This top: ', stack.top.data);
    stack.top = stack.top.next;
  }
  //Once you reach a null value:
  if (stack.top === null) {
    console.log('End of Stack');
  }
};

display(main());

//3 - check for palindromes
function is_palindrome(s) {
  let palindrome = new Stack();
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newString = [...s];

  for (let i = 0; i < s.length; i++) {
    palindrome.push(s[i]);
  }
  let backwardString = [];
  while (palindrome.top !== null) {
    backwardString.push(palindrome.pop());
  }
  console.log(backwardString);
  if (JSON.stringify(newString) === JSON.stringify(backwardString)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));



//5 - 
function sortStack(stack) {
  let sortedStack = new Stack();
  let highestNum;

  while (stack.top) {
    highestNum = stack.pop();

    while (sortedStack.top && sortedStack.top.data > highestNum) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(highestNum);
  }
  return sortedStack;
}


const test = function () {
  let testStack = new Stack();

  testStack.push(3);
  testStack.push(4);
  testStack.push(55);
  testStack.push(21);

  return testStack;
};

console.log('test stack', test());
console.log('sort stack ', sortStack(main()));

//6 - Create a Queue using Singly Linked Lists

let starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Checkov');

function peekQ(q){
  console.log(q.first.value);
}

peekQ(starTrekQ);

function isEmptyQ(q) {
  if (!q.first){
    console.log('this queue is empty');
  } else (console.log('this queue is NOT empty'));
}
isEmptyQ(starTrekQ);

function displayQ(q) {
  let firstVal = q.first;
  while (firstVal !== null) {
    console.log('this is the queue ', firstVal.value);
    firstVal = firstVal.next;
  }
  if (firstVal === null) {
    console.log('End of queue');
  }
}
displayQ(starTrekQ);

starTrekQ.dequeue();
starTrekQ.dequeue();
console.log('dequeued' , starTrekQ);

