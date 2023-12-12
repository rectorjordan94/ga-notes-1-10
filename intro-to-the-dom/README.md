[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro To the DOM

## Prerequisites

- [JS Reference Types](https://git.generalassemb.ly/sei-ec-remote/js-reference-types)
- [JavaScript Functions](https://git.generalassemb.ly/sei-ec-remote/js-functions)

## Objectives

By the end of this, developers should be able to:

- Define what DOM stands for and what it refers to
- Select elements from the DOM using selectors
- Add events to elements in the DOM

## The Document Object Model (DOM)

The DOM is a (potentially) large object that describes the structure of our content. Since it's an object, we can use normal techniques to get and set data! In the browser, the DOM is represented by the document object. This object represents all elements on the webpage and is the entry point for accessing those elements. A list of all methods/properties of the document object can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Document#properties). JS specifies some built-in methods that make using the DOM easier. Remember! The DOM is not the source code.

### Lab: Diagram the DOM

Visit [this website](https://taylordarneille.github.io/finished-intro-demo/) and open up the dev tools. Look at the Elements tab. Try expanding the collapsed elements to explore the structure of the document more. Now go to the Console tab and run `document` to see the document object. Notice that this is the same hierarchy from the Elements tab. _**The Elements tab of the console shows us a vertical representation of the DOM**_

Now draw out a diagram (tree of nodes) that represents the DOM that is loaded by this webpage.

![DOM Tree](./dom_tree.gif)

## DOM Manipulation

Using JavaScript we can read and/or change the DOM, i.e. make the webpage do something interesting.

**Examples:**

- Change or Remove HTML elements
- Create and Add HTML elements
- Change the CSS styles of HTML elements
- Read & Change attributes of HTML elements (href, src, alt, etc)
- Attach event listeners to HTML elements (click, keypress, submit, etc.)

### Why would we want to manipulate the DOM?

Without DOM manipulation, web pages would just be static visuals with no changes and no interaction with the user.

**Examples:**

- Clicking on buttons would do nothing
- You could never type into an input field
- You could never zoom into an image or stop/start a video

## Acessing the DOM

Every browser gives us access to something called the `window` object. In this `window` object there is a key called `document` that holds the value of the DOM for the current web page. You can either access the `document` key with `window.document` or with just `document`.

The `document` has built-in methods and properties that we can use to manipulate the DOM. For a full list of all the properties and methods, we have access to visit the [MDN DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document).

### Selecting DOM Elements

There are two main ways to retrieve elements from HTML. By querying for a specific attribute on an HTML element or by querying by CSS selector.

#### Selecting by HTML Element

- document.getElementById
- document.getElementsByClassName
- document.getElementsByTagName

#### Selecting by CSS

- document.querySelector
- document.querySelectorAll

_**html**_

```html
<div id="hello" class="square">
  Hello, world!
</div>

<div id="gb" class="square">
  Goodbye, world!
</div>
```

_**css**_

```css
#hello {
  background: yellow;
}

#gb {
  background: orange;
}

.square {
  height: 100px;
  width: 100px;
}
```

_**js**_

```js
// select by HTML
const myDiv = document.getElementById('hello')
console.log(myDiv)
// select by CSS
const myDiv2 = document.querySelector('#gb')
console.log(myDiv2)

// select by HTML
const theSquares = document.getElementsByClassName('square')
console.log(theSquares[0])
console.log(theSquares[1])
// select by CSS
const mySquares2 = document.querySelectorAll('.square')
console.log(mySquares2[0])
console.log(mySquares2[1])

// select by HTML
const theDivs = document.getElementsByTagName('div')
console.log(theDivs[0])
console.log(theDivs[1])
// select by CSS
const myDivs2 = document.querySelectorAll('div')
console.log(myDivs2[0])
console.log(myDivs2[1])
```

#### Differences between selecting by HTML or by CSS

There are a couple of way selecting by HTML or CSS are different and for a detailed comparison please view [this article](https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid). The main difference that we are going to run into is that `getElementsByClassName` and `getElementsByTagName` will return what is called an [HTML Collection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) while `querySelectorAll` will return a [Node List](https://developer.mozilla.org/en-US/docs/Web/API/NodeList). You can use array iteration methods like `.forEach` with a Node List while you cannot with an HTML Collection.

### Changing DOM Elements

We can access an element's style properties by using dot notation. We are able to use JavaScript to then change properties to affect the DOM.

```js
// changing CSS styles
myDiv.style.backgroundColor= 'chartreuse'
myDiv2.style.height='300px'

// changing HTML content
myDiv.innerText = 'I love WDI'
myDiv2.innerHTML = '<h2>I love GA</h2>'
```

#### Manipulating Multiple DOM Elements

What if I want to do something to both divs at once?

```js
// this wont work!
theSquares.style.border = '2px dashed black'

// but this will
for(let i = 0; i < theSquares.length; i++) {
  theSquares[i].style.border ='dashed 2px black'
}
```

### Adding elements to the DOM

We can also create new HTML elements with JavaScript and insert the into the DOM.

```js
// creates a new img HTML tag
const img = document.createElement('img')
console.log(img)

// first queries the DOM to get the `body` then appends the new img to the `body`
document.querySelector('body').appendChild(img)

// adding a value to the `src` attribute
img.src = 'https://picsum.photos/200/200'

// using a getter method to retrieve the `src` attribute
console.log(img.getAttribute('src'))

// using a setter method to change the src value
img.setAttribute('src', 'https://placebear.com/200/200')
```

#### CSS Classes: Getting and Setting

Accessing, getting, setting CSS classes is slightly different than other properties. First you can directly access the class attribute by using the `className` property of a DOM element.

```js
console.log(document.querySelector('div').className)
```

This works fine, but since elements can have multiple classes separated by spaces this often leads to needing to do some string parsing, so intead, we often use the `classList` attribute.

```js
console.log(document.querySelector('div').classList)
```

And you can access each individual class like an array

```js
const helloDiv = document.querySelector('div')
console.log(helloDiv.classList[0])
```

You can add to the classList:

```js
helloDiv.classList.add('yellow')
console.log(helloDiv.classList)
```

You can also check if an item has a class returns true or false

```js
console.log(helloDiv.classList.contains('square'))
```

You can remove a class from the classList:

```js
helloDiv.classList.remove('yellow')
console.log(helloDiv.classList.contains('yellow'))
```

### DOM Events

DOM events are the bedrock of interactivity on web pages. They enable us as developers to implement [_event-driven programming_](https://en.wikipedia.org/wiki/Event-driven_programming). This programming paradigm is such that much of our code, written as _event listeners_, runs in response to events being triggered during run-time.

Lots of events are generated within the browser, for example, when:

- a user moves or clicks the mouse
- a user presses a key
- when a form is submitted
- when the page has finished loading or has been resized

Take a gander [here](https://developer.mozilla.org/en-US/docs/Web/Events) at the type and sheer number of events.

#### Event Listeners

An _event listener_ is a function, more specifically, a _callback_ function, that is called when an event fires. You may also hear them referred to as _event handlers_ depending upon how they are "registered" with the browser.

There are three different approaches for attaching event listeners to elements:

1. In the HTML inline - `<button id="reset-btn" onclick="reset()">` - this isn't great because it embeds JavaScript code into our HTML, violating our separation of concerns.
2. Assigning to DOM elements' properties - `resetBtn.onclick = reset;` - this is a better choice but it is limited to adding single event listeners.
3. Calling `addEventListener` on a DOM element - this is the preferred way to do it since it is functional and supports adding multiple listeners at a time.

#### Event Listener Syntax

_**addEventListener\(\[event type\],\[function that you want to run when the event fires\]\)**_

```js
helloDiv.addEventListener('click', function(event) {
    console.log('HOME ICON CLICKED')
})
```

#### The Callback and the Event Object

The first parameter to `addEventListener` is the name of the event that we are listening for e.g. click, change, keydown, etc.. The second parameter is the **callback function** that we pass in to tell the browser what to do when this event occurs. This callback is allowed to use a very special parameter: the event object(shown above as the parameter `event` but is frequently abbreviated to `evt` or `e`.

This event object is passed into our event listener callback by the JavaScript engine in the browser. It contains many useful details about the event. Of special note are:

- `event.target` - this contains a reference to the actual DOM element that generated the event. In the case of a 'click' event, `event.target` would be the element that was clicked on.
- Several _...X_ and _...Y_ properties that tell where the click occurred.
- `event.preventDefault()` - a function to immediately disable the default action of this event for the given element. Useful for preventing unwanted form submissions or link navigation.
- `event.stopPropagation()` - a function for disabling the "bubbling" of this event up the DOM. More on this below...

_Note:_ JavaScript's `this` keyword within the listener function will also be set to the DOM element that `addEventListener` was called on, so you can use it instead of `event.target` if you like.

#### Event Bubbling

When an event occurs on an element, that event, whether it is listened to on that element or not, _bubbles_ up through the DOM, all the way up to the `document` object.

![Event bubbling](https://i.imgur.com/B7f5PAZ.png)

All event listeners registered for the same event, such as `click`, will be invoked along the path to the `document` element - unless one of those listeners calls the _event object_'s `stopPropagation()` method.

This passing of the event up the DOM tree allows for a very nice feature called Event Delegation.

#### Event Delegation

Imagine an unordered list with many list items inside it. Each list item in our app needs to have a click event that allows it to perform some unique action. We could probably add an event listener to each list item and if there weren't too many, it woudn't be too bad. But imagine that this unordered list can grow and add hundreds of additional list items programmatically while the app is running. We can't add them to each element manually. Instead, because of the bubbling of events, we can delegate the parent of the list items to handle the event.

Event delegation allows us to register a **single** event listener that can respond to events triggered by any of its **descendants**. Much more efficient!

All we would need to do is view the `event.target` property of the event object to see what element was referenced there. This would be the child element that generated the event.

#### Removing Event Listeners

It's possible to remove an added event listener, however, only if a named function was used as the callback:

```js
btn.removeEventListener('click', handleClick)
```

This would remove the 'click' event listener `handleClick` that was registered on the `btn` element like this:

```js
btn.addEventListener('click', handleClick)
```

#### Exercise

Research a different event listener not `click` and explain what it does to your partner.

#### DOMContentLoaded Event

All of the selectors we've been using rely on the use of DOM elements. However, if the JavaScript loads before all the DOM elements load, the selectors won't recognize that some of them exist! To avoid this problem, there's an event called `DOMContentLoaded` that we can encapsulate our code inside. Then, we can guarantee that the DOM elements exist before manipulating them.

```js
document.addEventListener('DOMContentLoaded', function() {
  //code and events go here
})
```

## Additional Resources

- [Event Developer Guide on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events)
- [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)
- [An Intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
