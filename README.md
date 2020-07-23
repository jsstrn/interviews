# Data structures and algorithms

Exercises found in [Grokking Algorithms by Aditya Bhargava](https://www.bookdepository.com/Grokking-Algorithms-Aditya-Y-Bhargava/9781617292231) and its companion [repository](https://github.com/egonSchiele/grokking_algorithms).

## Run tests

Run all tests

```
npm test
```

Run all tests in watch mode

```
npm run test:watch
```

## Tips

When writing unit tests there are usually three steps

1. Arrange: set up your unit test
2. Action: perform the operation
3. Assert: make an assertion that should fail if criteria is not met

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

Other useful code snippets can be found [here](https://1loc.dev/)
