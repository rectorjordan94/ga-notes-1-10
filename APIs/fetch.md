[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/software-engineering-immersive/boston)

# Fetch Implementation

Fetch API is a built-in JavaScript interface to make and receive `response` and `request` objects. We are going to focus on the `fetch()` method in this lesson. For a full list of the interfaces, you can visit [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#fetch_interfaces).

`fetch` method is how we are going to handle the `response` and `request` cycle in JavaScript.

The basic syntax for `fetch` is as follows:

```javascript
fetch(requestURL)
    .then((responseData)=>{
        // Fetch will package the response into an object with some methods that allow us to do some useful things with the response.
        // Use the .json() method to return the data in JSON format
            return responseData.json();
    })
    .then((jsonData)=>{
        // whatever we return in the first .then promise will be passed into this callback function
        // do some stuff with the jsonData here
    })
    .catch((error)=>{
        // any errors encountered in the request or the .then promises above will be passed into this callback
        console.log("Oh no, there's been an error!", error);
    })
```

## Fetching from PokeAPI: Get All Pokemon

Let's use `fetch` to get the first 150 Pokemon from the PokeAPI.

- Create a new directory called `poke_api`
- Create a HTML, js, and CSS file inside `poke_api`
- Create boilerplate HTML and link both the CSS and js files

Inside of your js file:
```js
document.addEventListener('DOMContentLoaded', () => {
    // use fetch to reach out to the PokeAPI
    // we are using a parameter here with `limit` notice how it's after the `?`
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        // if this is successful it will resolve and be passed to a `.then()`
        // intake a `res` or response from  fetch and change to JSON
        // ALWAYS want to change the Response object to JSON
        .then(res => res.json())
        // since the last `.then()` is returning the JSON we can console.log it
        .then(console.log)
        // if this fails for whatever reason it will be rejected and passed to the `.catch()`
        // passing error to console.error
        .catch(console.error)
})
```

Inside the `results` you can see that we have the 150 Pokemon.

### Displaying All Pokemon

Now that we can `console.log` all Pokemon let's display them to the user.

We will first need a place to insert all of the Pokemon. Inside of your HTML:
```html
<div id="container"></div>
```

Now in your JavaScript:
```js
// select the container that we are going to be inserting the Pokemon into
const container = document.querySelector('#container')

// create a function to handle the success
const onGetPokemonSuccess = (pokeArray) => {
    // loop over all Pokemon
    pokeArray.results.forEach(pokemon => {
        // create a `div` to house each Pokemon
        const pokeCard = document.createElement('div')
        // adding pokemon-card class
        pokeCard.classList.add('pokemon-card')
        // innerText to be the Pokemon's name
        pokeCard.innerText = pokemon.name
        // append all divs to the container
        container.appendChild(pokeCard)
    })
}

// remove the console.log from the second `.then()` and replace it with the above function
.then((res) => res.json())
// since the last `.then()` is returning the JSON we can handle it
.then(onGetPokemonSuccess)
// if this fails for whatever reason it will be rejected and passed to the `.catch()`
// passing error to console.error
.catch(console.error)
```

Now let's handle the failure. Inside your js file:
```js
// intake the error
const onFailure = (error) => {
    // then just console.error it
    console.error(error)
}

// replace the console.error in the `.catch()`
// if this fails for whatever reason it will be rejected and passed to the `.catch()`
// passing error to the onFailure function
.catch(onFailure)
```

## Fetching from PokeAPI: Show a single Pokemon

Now that we can query the first 150 Pokemon let's query for a single Pokemon.

With HTML5 we can set data on a particular element for later use. We will set the `url` for each Pokemon in the `div` we create. You can read more about the [data-* attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) here.

Inside of your js file and in the `onGetPokemonSuccess` function:
```js
// set the url to a data attribute inside of this div
// setter method
// data attribute needs to start with `data-*`
pokeCard.setAttribute('data-url', pokemon.url)
// add an event listener
pokeCard.addEventListener('click', showPokemon)
```

Let's write that `showPokemon` function:
```js
const showPokemon = (event) => {
	// getting the `data-url` that we set in our on success function
	const pokeURL = event.target.getAttribute('data-url')
	// making an api call
	fetch(pokeURL)
		// turn our response object into JSON
		// ALWAYS GOING TO DO that
		.then((res) => res.json())
		// console.log the success
		.then(console.log)
		// handle for failure
		.catch(onFailure)
}
```

### Displaying a single Pokemon

Now let's display a single Pokemon. 

Inside your HTML add a container for single Pokemon:
```html
<div id="single-pokemon"></div>
```

Inside of your js file:
```js
// getting the `div` we just made
const singlePokemon = document.querySelector('#single-pokemon')

const onShowPokemonSuccess = (pokemon) => {
    // while there is something in the single-pokemon `div`
    while(singlePokemon.firstChild) {
        // remove it
        singlePokemon.removeChild(singlePokemon.firstChild)
    }
    // change a view
    // display of none on my container
    container.style.display = 'none'
    // create a `div` for the single Pokemon
	const pokeDex = document.createElement('div')
	// add a class
	pokeDex.classList.add('single-pokemon')
	// craft some HTML with innerHTML
	pokeDex.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}" />
    `
	// add our new div (pokeDex) to the single-pokemon `div`
	singlePokemon.appendChild(pokeDex)
}

// replace the console.log in `showPokemon`
// handle a single Pokemon
.then(onShowPokemonSuccess)
```

### Going back to All Pokemon

Right now if we click on a single Pokemon we cannot get back to the first 150 without a refresh. Let's fix that.

Add a button to your HTML:
```html
<button id="see-all-pokemon">See all Pokemon</button>
```

Inside your js file:
```js
// get the button to see all Pokemon
const seeAllPokemon = document.querySelector('#see-all-pokemon')

seeAllPokemon.addEventListener('click', () => {
    // removing any single Pokemon that might be there
    while(singlePokemon.firstChild) {
        singlePokemon.removeChild(singlePokemon.firstChild)
    }
    //turning back on the display
    // notice how we don't have to make another API
    container.style.display = 'flex'
})
```

## Form Submission: Getting a Single Pokemon from a number

Sometimes we want to take input from a user. We can do that with a form and then listen for it's submission.

Inside of your HTML:
```html
<form id="form">
    <input id="input" type="number" min="1" value="1">
    <input type="submit">
</form>
```

Inside of your js file:
```js
// get form from DOM
const form = document.querySelector('#form')

form.addEventListener('submit', event => {
	// prevent the default refresh
	// 99.9% of the time you will need to prevent that default behavior
	event.preventDefault()
	// since this is a submit event I can target each `input` using their `id`
    // here there is an `input` element in this form with an `id` of `input`
    // you can refer to it and use dot notation to access the value
	const pokeNumber = input.value

	// make a fetch request for a single pokemon
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
		// if this is successful
		// turn it into json
		.then((res) => res.json())
		// take that json and handle it
		// since we have a function that already intakes a single pokemon
		// use it again
		.then(onShowPokemonSuccess)
		// since we already have a function that handles a failure
		// use it again
		.catch(onFailure)
})
```

## Additional Resources

- [PokeAPI](https://pokeapi.co/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
