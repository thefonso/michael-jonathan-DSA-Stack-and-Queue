const Stack = require('./stack');
const Queue = require('./queue');

const main = function() {
  let starTrek = new Stack();
  
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
};

console.log(main());

//2 - Useful methods for a Stack
const peek = function(stack) {
  const node = stack.top;
  return node.data;
};

console.log('On top: ', peek(main()));

const isEmpty = function(stack) {
  if (stack.top === null) {
    return 'There\'s nothing in this stack';
  }

  return 'There\'s something in this stack';
};

console.log('Is there anything here? ', isEmpty(main()));

const display = function(stack) {
  
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
  
  for (let i=0; i < s.length; i++){
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