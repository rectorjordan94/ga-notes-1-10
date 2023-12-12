[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express

## Request and Response Cycle

![Request Response Cycle](https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png)

Now having some experience with working with the response and resquest cycle with the front end lets visit and dive a little deeper into all the parts. 

When making a HTTP request there are three main parts. A request line, headers, and a body. Let's dive into each of those parts

### Request Line

A request line is going to be the first line of a request. It can contain these three items:

- Method - A one word command that lets the server it should do with the request that is sent
- Path - A path to a resource on the server
- Version Number - A HTTP version number

```bash
GET /checkout/cart/index.html HTTP/1.1
```

#### Methods

While the other request lines items we might not see day to day because the technologies we use, like `fetch`, abstracts them away from us we will always be aware of the HTTP method we are using.

There are four different types of methods we can use in order to make requests. `POST`, `GET`, `PUT/PATCH`, and `DELETE`. Let's dive into each:

- POST (Create) - This method is used for the creation of items in the server. You are able to send a `body` with this method
- GET (Read) - This method is used for reading items from a server. You are unable to send a `body` with this method
- PUT/PATCH (Update) - These methods are used for updating an existing item in a server. You are able to send a `body` with these methods
- DELETE (Delete) - This method is used for the destruction of item in the server. You are albe to send a `body` but the `body` tends to be ignored

Looking back up at these methods and what actions they are doing you can see that spells CRUD. CRUD apps are apps in which we use all 4 types of methods. These are common in the programming world.

### Headers

A header is a key/value list of instructions for the server. This can include a token for authentication or specifying a language. A full list of the keys can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### Body

The body is where we would store any data that we would want to send back to the server. For this class we will be sending JSON as our body's data.

## Response

A response from a server will have a body and headers but it will also include a status line. The body and headers will be the same as above but the direction has changed. Now they are being sent from the server and being recieved by the client. Let's dive into the status line:

### Status Line

A status line will be the first line of the response and it will contain three items:

- Version Number - The http version number
- Status Code - A three digit number that indicates the result of the response
- Reason Phrase - The text that is associated with the status code. Meant to be human readable

#### Status Code

There are five grouped status codes. These start at 100 and end at 500.

- 100 to 199 - [Informational Responsese](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses)
- 200 to 299 [Successful Responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
- 300 to 399 [Redirection Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
- 400 to 499 [Client Error Responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
- 500 to 599 [Server Error Responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)

## Set up a basic Express server

Express is a light weight unopinionated framework for JavaScript. This means that Express provides functionalty without putting rails around how we can code. Our file names can be in any structure and named however we want. This is not the case with all frameworks.

Even though Express is is unopinionated there are some accepted standards that we want to follow:

- Server listener should be in a file at the root of the repository
- Routes should be contained in a single directory
- Models should be contained in a single directory

We will have to start a new project. At the root of this repository run the command:

```bash
npm init
```

We will have to install `express` to use it. At this repositories root run the command:

```bash
npm install express
```

Let's get a server started. We will need a file that will act as the server. This will act like the command center for our app. In the root of this repository, `touch index.js`. 

Inside of `index.js` let get a server to listen for a request:

```js
// requiring in express to use in the file
const express = require('express')
// creating the app so we can us the app methods
const app = express()
// Magic numbers by convention are capitlized and set into seperate varibles
const PORT = 3000

// .get - is the http method we are listening for
// `/` - is the path we are declaring for this route, so if there is a `GET` request to `/` this callback function will run
// req - the request object coming in from client, passed to us from .get
// res - the response object we are sending back
app.get('/', (req, res) => {
    // using the `res` .send method to send some HTML to the client
    res.send('<h1>why hello there</h1>')
})

// using the .listen method to set up a server to listen for request coming in
// PORT - the port number we are listening on
app.listen(PORT, () => {
    // just a console log so show we are listening
    console.log(`Port is listening on ${PORT}`)
})
```

Now we can run this file with node: `node index.js`

Our terminal should now have our `console.log` in it showing. But notice that we are now unable to input anything else into that console. That is because it has now become the place where our computer is running this server and listening for request coming in.

**_NOTE_**: If you need a your terminal window you can always open another tab with `command + t`. You will need to leave your server running when making request to it.

Now we can make a request to this server. We will need a client to make that request though. Our browsers can make `GET` request so let's use our browser and go to http://localhost:3000/

### Running a Server

Now that we are starting to run processes in our terminals we have to be mindful of shutting the down when we are not using them. Get in the habit of `control c` to shut your server down when you are done working.

#### Nodemon

We can run our server with Node but if we are making changes to our JavaScript we will have to rerun our server everytime we want to test that new feature. There is a better way Nodemon! [Nodemon](https://www.npmjs.com/package/nodemon) is an npm package that listens for changes in our JavaScript files and reruns our server for us. 

**_NOTE_**: This is a development tool for our development enviorment. This package will not be used in the deployed version of our projects.

Let's install Nodemon:

```bash
npm i nodemon
```

We can now run our file with `nodemon index.js`. But we are developers and this is a project so let's put this command in a start script.

In our `package.json` let's put this command as our start script

```json
"start": "nodemon start"
```

## Code Along: Routing

We could code all of our routes in `index.js`. This however would not be scalable we would end up with a file that would be 1500+ lines with just a small application.

Let's create a directory to house our routes called `routes`. Inside of `routes` create a file called `player_routes.js`

```js
// requring express to use it in this file
const express = require('express')
// creating a router so we can use the router methods
const router = express.Router()

// .get - http method that will be listened for
// `/` - is the path we are declaring for this route, so if there is a `GET` request to `/` this callback function will run
// req - the request object coming in from client, passed to us from .get
// res - the response object we are sending back
router.get('/', (req, res) => {
    // sending back a string value
    res.send('Player Home Page')
})

// exporting so use router in `index.js`
module.exports = router
```

And now that we have a route let use it in our command center `index.js`:

```js
// import exported router for all player routes
const playerRoutes = require('./routes/player_routes')
// pass to the app.use so express will now about and use these routes
app.use('/player', playerRoutes)
```

### URL Pathing

In our router we can declare more than just our home page `/`. We can declare whatever route we would like. Let's set up a route that will go to `http://localhost:3000/player/classes`. Inside of `routes/player_routes.js`:

```js
// `/classes` - the path we are declaring for this route, so if there is a `GET` request to `/classes` this callback function will run
router.get('/classes', (req, res) => {
	// sending back a string value
	res.send('This is the class page')
})
```

Let's make a request to a third party api. We will be using [Axios](https://www.npmjs.com/package/axios) in order to make this request. Install with `npm i axios`. Inside of `routes/player_routes.js`:

```js
// require axois like the docs tell us
const axios = require('axios').default

// `/classes` - the path we are declaring for this route, so if there is a `GET` request to `/classes` this callback function will run
router.get('/classes', (req, res) => {
	// using axios to make a get request to the dnd 5e api
	axios('https://www.dnd5eapi.co/api/classes')
    // name the response from the dnd api
		.then(dndResponse => {
            // send the data from the api
            res.send(dndResponse.data)
        })
        // console log any errors
		.catch(console.error)
})
```

### URL Parametes

Just like with functions we can pass in values or arguments and use that value inside the scope of the route. This will make our routes dynamic. Let's make a route that let's use pass in a class and returns us the results from the api. Inside of `routes/player_routes.js`:

```js
// `/classes/:className` - the path we are declaring for this route, so if there is a `GET` request to `/classes/barbarian` this callback function will run
// :className - is our url parameter, whatever value is passed in right after /classes/ will be what it holds
router.get('/classes/:className', (req, res) => {
    const className = req.params.className
	// using axios to make a get request to the dnd 5e api
	axios(`https://www.dnd5eapi.co/api/classes/${className}`)
		// name the response from the dnd api
		.then((dndResponse) => {
			// send the data from the api
			res.send(dndResponse.data)
		})
		// console log any errors
		.catch(console.error)
})
```

### Query Parameters

We can also pass in value via the query string. Inside of `routes/player_routes.js`:

```js
// `/spells` - the path we are declaring for this route, so if there is a `GET` request to `/spells` this callback function will run
router.get('/spells', (req, res) => {
    // getting the query that was sent in
    const spellName = req.query.spellName
	// using axios to make a get request to the dnd 5e api
	axios(`https://www.dnd5eapi.co/api/spells/${spellName}`)
		// name the response from the dnd api
		.then((dndResponse) => {
			// send the data from the api
			res.send(dndResponse.data)
		})
		// console log any errors
		.catch(console.error)
})
```
