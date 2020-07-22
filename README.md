# algorithms

👾 Algoritms for great good

Coding exercises found in [Grokking algorithms by Aditya Bhargava](https://www.bookdepository.com/Grokking-Algorithms-Aditya-Y-Bhargava/9781617292231) and its companion [repository](https://github.com/egonSchiele/grokking_algorithms)

## Run tests

Run all tests

```
npm test
```

Run all tests in watch mode

```
npm run test:watch
```

## Useful JavaScript snippets

Create a range of numbers starting from 0 to 9.

```js
// create a range from 0 to 9
const numbers = [...Array(10).keys()]; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

Create a range of numbers starting from 1 to 10.

```js
// create a range from 0 to 10
const numbers = [...Array(11).keys()]; // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// remove the first element
numbers.shift(); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
