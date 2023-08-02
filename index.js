const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Task 2 -- Return sum of integers of An Array
function sumArrayIntegers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  let sum = 0;
  for (const num of arr) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new Error('All elements in the array must be integers');
    }
    sum += num;
  }

  return sum;
}
const numbers = [1, 2, 6, 4, 5];
const sum = sumArrayIntegers(numbers);
console.log('Sum:', sum); 

//Task 3 Count the words

const fs = require('fs');

function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const wordCount = data.split(/\s+/).length;
    console.log('Total word count in Text file:', wordCount);
  });
}

const filename = 'data.txt';
countWordsInFile(filename);

