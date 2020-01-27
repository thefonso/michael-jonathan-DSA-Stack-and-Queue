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

  while(sortedStack.top) {
    stack.push(sortedStack.pop());
  }
  
  return stack;
}


const test = function () {
  let testStack = new Stack();

  testStack.push(3);
  testStack.push(4);
  testStack.push(55);
  testStack.push(21);

  return testStack;
};

console.log('sort numbers: ', sortStack(test()));
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

//9 - Square Dance pairings
let mDancers = new Queue();
mDancers.enqueueD('Frank');
mDancers.enqueueD('John');
mDancers.enqueueD('Sherlock');
mDancers.enqueueD('David');
mDancers.enqueueD('Christopher');

let fDancers = new Queue();
fDancers.enqueueD('Jane');
fDancers.enqueueD('Madonna');
fDancers.enqueueD('Beyonce');
console.log(fDancers);
console.log(mDancers);
function SquareDance(qM, qF) {
  while (qM.first && qF.first) {
    console.log(`${qF.first.value} is dancing with ${qM.first.value}`);
    qM.dequeue();
    qF.dequeue();
  }
  if(!qM.first) {
    let currentFemale = qF.first;
    while (currentFemale) {
      console.log(`${currentFemale.value} is waiting to dance.`);
      currentFemale = currentFemale.next;
    }
  }

  if(!qF.first) {
    let currentMale = qM.first;
    while (currentMale) {
      console.log(`${currentMale.value} is waiting to dance.`);
      currentMale = currentMale.next;
    }
  }
}

SquareDance(mDancers, fDancers);

// return f/m

//10 - Ophidian Bank
let testCustomers = new Queue();
for (let i = 0; i < 20; i++) {
  testCustomers.enqueue(Math.random());
}

function ophidian(queue) {
  if (!queue.first) {
    console.log('Are we even open?');
  }
  while (queue.first) {
    if (Math.random() <= .25) {
      queue.dequeue();
      queue.enqueue(Math.random());
      console.log('Sorry... back of the line with you!'); 
    } else {
      console.log('Pleasure serving you, next in line!');
      queue.dequeue();
    }
  }
  console.log('I guess it\'s break time!');
}

ophidian(testCustomers);