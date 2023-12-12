[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions

## Prerequisites

- [JavaScript Basics](https://git.generalassemb.ly/sei-ec-remote/js)
- [JavaScript Reference Types](https://git.generalassemb.ly/sei-ec-remote/js-reference-types)

## Objectives

By the end of this, developers should be able to:

- Write an arrow function with a parameter
- Write an arrow function with multiple parameters and a return value

## Preparation

1. Fork and clone this repository
2. Create a new branch, `training`, for your work
3. Checkout to the `training` branch

## Code Block

As we have seen in the last couple of lessons we can run JavaScript in files as stand-alone lines of code. But to make more complex programs we will have to group our code into code blocks.

In JavaScript, we can define code blocks by opening and closing curly brackets`{}`. By doing this we can group pieces of code to run either when a condition is met or saved to run later.

### Conditionals, Loops, and Function Blocks

Let's take a look at the code below:

```js
if (BOOLEAN EXPRESSION) {
    // code block to run if the boolean expression is truthy
}

while (BOOLEAN EXPRESSION) {
    // code block to run if the boolean expression is truthy
}

const func = () => {
    // code to run later
}
```

### Why functions?

While we could use if conditions and loops to accomplish a lot of functionality, using functions keeps our code DRY. DRY is **don't repeat yourself**. We can keep our code DRY by saving blocks of code to run later and multiple times.

## Code-Along: Writing Functions

Currently, there are three standard ways of writing functions in JavaScript; function declaration, function expression, and arrow functions expressions.

Function Declaration:

```js
// keyword `function` followed by the name of the function
function helloWorld() {
    // prints `Hello world!` to the console
    console.log('Hello world!')
}
```

Function Expression:

```js
// starts with const and uses the assignment operator
const helloWorld = function () {
    // prints `Hello world!` to the console
    console.log('Hello world!')
}
```

Arrow Function Expression:

```js
// starts with const and uses the assignment operator
// uses the `arrow` instead of the keyword function
const helloWorld = () => {
    // prints `Hello world!` to the console
    console.log('Hello world!')
}
```

### Invoking a Function

To invoke or call a function you simply just have to first write the name of the function you wish to invoke then add opening and closing parentheses `()`.

```js
// first the name then the parentheses
helloWorld()

// this won't work
helloWorld
```

**_NOTE_**: The big difference between a **function declaration** and a **function expression** is that you can invoke a _**function declaration** before and after where it's defined in code_ while with a _**function expression** you can only invoke it after you define it_. Ex below:

```js
// able to invoke function declaration before
funcDeclaration()

// function declaration being defined in code
function funcDeclaration() {
    console.log('Hello world!')
}

// able to invoke function declaration after
funcDeclaration()

// function expression defined in code
const funcExpression = function () {
    console.log('Hello world!')
}

// able to call only after being defined
funcExpression()
```

## Lab: Write a Function

The following should be either function expressions or arrow function expressions.

- Write a function `printSum` that will console.log the result of 10 + 10
- Write a function `printTriangle` that will print these pound signs to the console (there are 5 console.logs inside the function):

```js
#
##
###
####
#####
```

- Make it so that `printTriangle` will print the pound signs using a for loop (there is only 1 console.log inside the function).

## Best Practices: Naming Functions

Always use **const** to declare your functions. It would be a strange day when a function would need to be reassigned.

The variable you use for a function should contain a **verb**. Functions **do** something, most often:

- Getting Data
- Setting Data
- Checking Data
- Printing Data

If the purpose of your function is to check data, for example, use the verb `check` in the variable name.

Example function that contains a conditional:

```js
const checkInputLength = (input) => {
    if (input.length > 10) {
        console.log('input length is greater than 10')
    } else {
    console.log('input length is not greater than 10')
    }
}
```

Functions should try to do **one thing** and **do it well**.

If a function, called `checkInputLength`, does more than just check input, or doesn't do it very well, then it is a poor function.

Takeaway: Think about appropriate **verbs** to use in your function variable names. The verns should indicate the **one thing** that the function does.

## Arguments and Parameters

Keeping our code DRY means that we need to make our functions reusable. To
do this we use arguments and parameters.

- Parameter - named in function definition and referred to in function scope
- Argument - a real value passed to the function

```js
// `num` is the parameter
const doubleNumber = (num) => {
    return num * 2
}

// `10` is the argument
doubleNumber(10)
```

### Code-Along: Arguments and Parameters

Follow along as we use both arguments and parameters.

```js
const greeting = (name) => {
    // using concatenation
    console.log('Hello ' + name)
}

greeting('Dukat') // => Hello Dukat

const greeting = (name) => {
    // using string interpolation 
    console.log(`Hello ${name}`)
}

greeting('Dukat') // => Hello Dukat
```

**_Note_**: Since we are using the arrow function expression and we only have one parameter we can remove the parentheses from around `name`. Code example:

```js
const greeting = name => {
    console.log(`Hello ${name}`)
}
```

### Lab: Arguments and Parameters

- Write a function `printParameter` that takes a parameter `input`. The function should simply console.log the value of the `input` parameter

```js
printParameter('cat') // => cat
printParameter(10) // => 10
printParameter([1, 2, 3]) // => [1, 2, 3]
```

- Write a function called `minusOne` that takes a parameter `num`. Assuming the argument is a number, print the argument -1

```js
minusOne(10) // => 9
minusOne(100) // => 99
```

- Write a function called `getLastElement` that takes a parameter `arr`.
- Invoke the function with an **array** as the argument.
- The function should print the **last element** within the array.

```js
getLastElement([1, 2, 3, 4, 5, 6]) // => 6
getLastElement(['a', 'b', 'c']) // => 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]) // => [4, 5, 6]
```

### Multiple Parameters

We can use multiple parameters in our functions. A function can take any number of parameters.

```js
const multiply = (num1, num2) => {
    console.log(num1 * num2);
}
```

When you invoke the function, you want to pass the arguments to the correct position.

```js
const nameAndAge = (name, age) => {
    console.log(`Hi my name is ${name} and I'm ${age} years old`)
}

// arguments passed in the correct spots
nameAndAge('Dax',  300 ) // => Hi my name is Dax and I'm 300 years old

// arguments passed in the incorrect spots
nameAndAge(300,  'Dax' ) // => Hi my name is 300 and I'm Dax years old

// when one or more arguments are not passed in `undefined` is passed in by default
nameAndAge('Dax') // => Hi my name is Dax and I'm undefined years old
```

### Lab: Multiple Parameters

- Write a function `makeSentence` that takes **three** parameters and **interpolates** them into a fully formed sentence.

```js
makeSentence('I\'m', 'a', 'doctor') // => I'm a doctor, not a botanist
```

## Return

By default, if nothing is returned from a function JavaScript `undefined` is returned. If we want to return a value from a function we have to use the keyword `return`. Along with being able to return a value from a function `return` also stops a function from running.

```js
const helloWorld = () => {
    // using `return` keyword so this function, when invoked, had the return value of the string `Hello World`
    return 'Hello World'
}

// to see the return value you will have to wrap your function in a `console.log()`
console.log(helloWorld()) // => Hello World

const isInputTypeNumber = (input) => {
    // if the `input` is a number then this function stops here and returns the input
    if (typeof input === 'number') return input
    // if the `input` is not a number then the function stops here and returns -1
    return -1
}

// to see the return value you will have to wrap your function in a `console.log()`
console.log(isInputTypeNumber(1)) // => 1
console.log(isInputTypeNumber('Morn')) // => -1
```

### Lab: Return

- Write a function `calculateArea` that takes two parameters `width` and `length` and multiplies them and returns the value. This will give us the area of a rectangle.

```js
calculateArea(2, 5) // => 10
calculateArea(5, 5) // => 25
```

- Write a function `sumToString` that takes three parameters (numbers), sums them, converts the sum into a string and returns the string

```js
sumToString(1, 2, 3) // => '6'
sumToString(5, 5, 5) // => '15'
```

- Write a function `doesInputMatch` that takes two parameters (strings) and returns `true` (Boolean) if the two strings are identical, `false` if not.

```js
doesInputMatch('Sisko', 'Sisko') // => true
doesInputMatch('Rom', 'Garak') // => false
```

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.