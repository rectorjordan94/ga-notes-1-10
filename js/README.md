[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Basics

## Introduction

A review of many of the building blocks of JavaScript.

## Objectives

By the end of this, developers should be able to:

- List all 5 JavaScript primitives and give an example of each.
- Identify the operator in an expression and explain what it does.
- Define variable and contrast with value.
- Evaluate simple JavaScript by inspection.
- Write simple scripts that use flow control.

## Prerequisites

- SEI Fundamentals

## Preparation

1. Fork and clone this repository into your class `/lessons` directory.
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
4. Open the repository in VSCode with `code .`

*Note*: Create and switch to a new branch at the same time with the shortcut:
`git checkout -b <new branch name>`.

## Basics

### Primitive types

JavaScript has 5 primitive [types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):
`Number`, `String`, `Boolean`, `null`, and `undefined`.

| Type      | Examples                        |
|:----------|:--------------------------------|
| Number    | `1`, `42`, `-3` `1.04`, `NaN`, `Infinity`|
| String    | `'a simple string'`, `"Hi, my name is Chris."`, or empty strings: `''`|
| Boolean   | `true`, `false`                 |
| null      | `null`                          |
| undefined | `undefined`                     |

Primitive types represent **immutable** values.  We'll contrast this with
reference types in a later lesson.

The types Number and String both have large sets of possible values.  Boolean
has only two values and null and undefined each have just one.

The ES2015 primitive type `Symbol` is intentionally omitted.

Run `node bin/primitiveTypes.js` to see some examples of primitive types in
JavaScript.

### Literals

Literals represent specific values in the source code.
Some examples are `1`, `'A string'`, `null`.

### Variables

#### Node.js

We'll use Node.js as a [REPL](https://nodejs.org/api/repl.html) and script
runner to evaluate expressions and explore JavaScript features.

- **R**ead
- **E**valuate
- **P**rint
- **L**oop

#### Code Along: Declare Variables

Type `node` into your terminal to start the Node.js program REPL.
The `>` symbol tells us we are now interacting with the Node.js REPL

```bash
$ node
>
```

Variables need to be declared.

#### Piece on let and const vs. var

Prior to ES6 JavaScript had one way of declaring variables: `var`. Now there
are much better ways to declare variables: `let` and `const`. The basic rule of
thumb should be to use `const` when you don't need to reassign that variable,
and `let` when you do. You will continue to see `var` in legacy code bases and
documentation online, but you shouldn't use in your own code.

![Assignment Expression Visual](https://media.git.generalassemb.ly/user/16103/files/22241a00-fe20-11e8-9fe2-0cd473b6c817)

Variables name storage for the value they contain.  Because JavaScript is a
dynamically typed language, you can assign a value of one type to a variable and
then later assign a value of a different type to that same variable.

In JavaScript, `null` represents the explicitly omitted value, whereas
`undefined` represents the default omitted value.  Variables that have been
declared but are uninitialized or unset have the value `undefined`.

### Operators

Operators come in three classes, unary, binary (the most common), and ternary
(there is only one). These operators act on 1, 2, and 3 operands, respectively.

```js
// unary:
!true
// binary:
4 + 5
// ternary
isVegetarian ? 'no meat for you' : 'eats meat'
```

Operator precedence determines the order in which operators are evaluated.
Operators with higher precedence are evaluated first.

Associativity determines the order in which operators of the same precedence are
processed.

The following table lists a subset of the JavaScript
[operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
from higher to lower precedence.

| Type       | Associativity | Operators        |
|:-----------|:--------------|:-----------------|
| grouping   | n/a           | `()`             |
| postfix increment  | n/a     | `++` `--`   |
| negation, numeric conversion, prefix increment  | right-to-left | `!` `-` `+` `++` `--`  |
| type | right-left | `typeof` |
| multiplication, division, modulo | left-to-right | `*` `/` `%`  |
| addition, subtraction  | left-to-right | `+` `-`                        |
| relation, instance  | left-to-right | `<` `<=` `>` `>=` `instanceof` |
| strict equality  | left-to-right | `===` `!==`                    |
| logical and | left-to-right | `&&`                           |
| logical or | left-to-right | &#124;&#124;  |
| conditional  | right-to-left | `?:`  |
| assignment  | right-to-left | `=` `+=` `-=` `*=` `/=` `%=`   |

### Expressions

An expression is a combination of literals, variables, operators, function
invocations and sub-expressions that are interpreted and produce a value.  Not
all such combinations produce *sensible* results.

The simplest expression is a variable or literal. More
complicated expressions are formed by combining simpler expressions using
operators.

An expression with all of the variables replaced with literals that are equal to
the values of the variables will produce the same result.

#### Code Along: Assignment expressions

Assignment changes the value of a variable.

```js
let name
console.log(name)
name = 'Brian'
console.log(name)
name = 'Sarah'
console.log(name)
```

Remember: JavaScript variables are untyped.

```js
let name
name = 'Brian'
name = 29
console.log(name + 1)
```

Although it doesn't cause an error, avoid confusing code like the above.

Now try it yourself!
Create a new variable named `developer`, and store the name of the person
sitting next to you in it. Now change it to someone else in the room!

##### Constants

Constants must be initialized, assigned a value, when created. Uninitialized
constants are a syntax error.

```js
const variableOne
// const variableOne
//      ^^^^^^^^^^^^^
// SyntaxError: Missing initializer in const declaration
```

```js
const pi = 3.14159265359 // rounded
console.log(pi)
const e = 2.71828182846 // rounded
console.log(e)
```

#### Numeric expressions

Simple calculations:

```js
5 + 3
7 - 2
11 % 5
2 * 7
12 / 4

```

Expressions with variables only change values with assignment.

```js
let height
height = 80
height - 10
console.log(height)
height = height - 10
console.log(height)
```

What will `height` be at the end of the lines above?

Now let's compare some common methods of counting.

```js
let i
i = 0
i
i = i + 1
i
i += 1
i
++i
i
i++
i
```

*Note*: `++i` and `i++` are not the same! `++i` will increment i by 1 and then
evaluate i, whereas `i++` will evaluate i and then increment.

#### String expressions

```js
const firstName = 'Brian'
const lastName = 'Berzellini'
const fullName = firstName + ' ' + lastName
console.log(fullName)
```

Try it with your name now!

```js
let bornOn = '1982 - 9 - 29'
console.log(bornOn)
bornOn = 1982 - 9 - 29
console.log(bornOn)
```

What happens if you don't enter the date as a string?

#### Code Along: Boolean expressions

A boolean expression is a comparison (e.g. `>`, `>=`, `===`) or any value
interpreted as a boolean.  We'll use that fact when we get to flow control.
Boolean expression combine using the logical and `&&` and logical or `||`
operators.

```js
let height = 72
height === 60
height > 72
height = 76
height >= 72
height > 72 && height < 78
```

The logical operators 'short circuit', which means they stop evaluating operands
as soon as the expression is `false` for `&&`, or `true` for `||`.

##### Truthy and Falsy Values

What do you think of when you hear 'truthy' and 'falsy'?

All values in JS are inherently truthy with the exception of these 6 values:

- `false`
- `undefined`
- `null`
- `0` and `-0`
- `NaN`
- `''`, `""`, and ` `` `

*Note*:  The negation (`!`) of a truthy value is `false` and the negation of a falsy
value is `true`.

```js
const truthyValue = 'A non-empty string'
const falsyValue = 0
console.log(!truthyValue)
console.log(!falsyValue)
```

#### Demo: Type conversions

The unary `+` operator attempts to convert its operand to a Number.  If
unsuccessful the result is `NaN`.

If either operand of the binary `+` operator is a string the operator converts
the other operator to a string.  Some results of this conversion are more useful
than others.

Note the difference between `3 + 5 + ' times'` and `'times ' + 3 + 5`?

`!` is the logical NOT operator. It always returns a boolean whose value is the
opposite of its operand. If its single operand is truthy, it returns false;
otherwise, it returns true.

[*Javascript 'Wat' Gotchas (1:25)*](https://www.destroyallsoftware.com/talks/wat)

### Code Along: Flow Control

Remember how we used node as a REPL earlier? It actually has a completely
different use as well--as a script runner. Let's see how that works while we
explore some examples of flow control.

To exit your REPL, use CTRL-d or type `.exit` and let's write some code in
actual files.

*Note*: Get in the habit of running and creating scripts from the root of your
directory. For example, run `node bin/ifStatement.js` instead of `cd bin/` and
then running `node ifStatement.js`

#### Printing to the Console

As developers, we often want to take a look at the
inner workings of processing and just get a read on what variables store which
values at a specific time while our code is running. To do this we type
`console.log("Whatever we want to print out to the console.")`.

It's an extremely effective tool that often gets pulled out before
production, but can help give you an idea of what should be returned, and
a good point of reference for debugging.

#### `if` Statements

Open `bin/ifStatement.js` and we'll type some code in...

```js
let name
if (name === 'Brian') {
  console.log('Hi, Brian!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else if (name === 'Chris') {
  console.log('Hi, Chris!')
} else {
  console.log('Hi, stranger.')
}
```

Change the string value of the `name` variable and save your file.

Return to your terminal and re-run the script.

##### Ternary Operator

Ternary operators are basically a shorthand way of writing `if else` statements.
An example of a ternary operator can be found below:

![Ternary Operator Visual](https://media.git.generalassemb.ly/user/16103/files/2a7c5500-fe20-11e8-880e-6175905cd6cc)

This example might look a little bit confusing, but it is relatively simple if
we break it down: First, the statement before the question mark is evaluated as
being either `true` or `false`. If the statement is `true`, then the statement
to the left of the colon is executed. If it is `false`, the statement to the
right of the colon is executed.

#### `while` Loops

A simple while loop that logs from 0 - 9

```js
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
```

Open `bin/whileLoop.js` and we'll type some code in...

```js
let count = 1

while (count < 5) {
  console.log('Inside of the loop, count is ' + count)
  count++
}

console.log('Outside of the loop, count is ' + count)
```

Save this file and return to your terminal.
Type `node bin/whileLoop.js`

What if we change the value of `count`? Let's change the script so that we make
`count = 5` and then we can run the script again to see what changed.

#### String Interpolation

The combination of a string and a variable is called string interpolation. The
syntax for it looks like this:

![String Interpolation Visual](https://media.git.generalassemb.ly/user/16103/files/27816480-fe20-11e8-957b-4a012a9507d7)

This method of string interpolation is done using Template Literals.
*Note*: Make sure you are using *backticks* instead of single or double quotes.
[more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

#### `for` Loops

Open `bin/forLoop.js` and we'll type some code in...

```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

Save this file and return to your terminal.
Think about what you expect this file to produce to the terminal...
Now type `node bin/forLoop.js` and hit ENTER.

That for loop was *almost* equivalent to:

```js
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
```

Nesting conditionals in loops:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('five!')
  } else {
    console.log('nah')
  }
}
```

Save. Think about what you expect this file to produce to the terminal...
What do we type in the terminal to run our code?

#### Lab: Build a Script Yourself

Try building your own script in the file titled `bin/guessAge.js`. Have
this script start with an age variable. Then with an if statement display
something different depending on the age.

If they're older than 90 print to the console "What a rich life you have led!"

If they're under the age of 10 print "You should be playing outside!"

If they're between 10 and 90, print "I should have made this age range
smaller!". You should be able to run the file like `node bin/guessAge.js`.

Change the value of the `age` variable to make sure your if statement can print
all three sentences.

If you finish early, challenge yourself by designing your own script that runs
something using two or more examples of flow control we've introduced today!
Save it in `bin/bonusChallenge.js`

## Additional Resources

See the following sections at
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Number and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [Text formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- [JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans)

CodeAcademy Practice

- [if statements | Explanation & Practice](https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/control-flow-intro)
- [loops | Explanation & Practice](https://www.codecademy.com/courses/introduction-to-javascript/lessons/loops/exercises/loops)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
