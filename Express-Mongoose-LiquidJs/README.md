[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express-Mongoose LiquidJs View Templating

## Prerequisites

-   Express-Mongoose-CRUD
-   Express-Mongoose-Auth-Relationships

## Objectives

By the end of this, developers should be able to:

-   Render views in an express app
-   Complete a full stack application using the MVC framework and RESTful routing
-   Assign Bootstrap classes to quickly style an app

## Preparation

1.  Open the fruits app we've been building all week

## LiquidJs

Finally! We're about to turn our RESTful API into our FIRST FULL STACK APPLICATION!

We've been talking about the MVC framework, which is an architectural pattern for building web applications by breaking the app down into models, views, and controllers. So far, we've built our models and controllers, and we've been considering our 'views' to be the JSON we've been sending as a response from each controller.

We're going to be using a view templating engine to throw some HTML as a response instead. This is where all 7 of our RESTful routes will be used. For a reminder, the 7 RESTful routes are below:

| **URL**          | **HTTP Verb**|**Action**|
|------------------|--------------|----------|
| /photos/         | GET          | index  
| /photos/:id      | GET          | show       
| /photos/new      | GET          | new   
| /photos          | POST         | create   
| /photos/:id/edit | GET          | edit       
| /photos/:id      | PATCH/PUT    | update    
| /photos/:id      | DELETE       | destroy  

So far, we've used all of these except for 'new' and 'edit'. The reason for this, is that those two routes are primarily used to render a form by which a user could send a POST or a PUT request.

Before we get to those, let's get started with our `home` route, the very first one we added to our application.

## Liquid & Layout -> The home route

Let's start by adding a couple more dependencies, run the following:
- `npm install method-override liquid-express-views`

We'll use `method-override` later, let's focus on liquid for now.

LiquidJs is a view templating engine, that was built by the people at Shopify, to solve a very common problem. How do we build an application with varying, potentially unknown data? View templating engines such as [ejs](https://ejs.co/) [handlebars](https://handlebarsjs.com/), and [liquidJs](https://liquidjs.com/) have been doing this for a while, and they're all pretty similar, so feel free to try the others out on your own future project. 

Liquid hails itself as a 'A simple, expressive and safe template engine.' and they live up to that reputation. Liquid is widely used by big companies and freelancers alike, mostly for building shopify store templates(thanks to the awesome plugins provided by shopify), but can be used to build anything!

The `liquid-express-views` npm package, on the other hand, was built by a GA instructor named Alex Merced! It helps us utilize the liquid template language specifically in express apps!

Liquid's templating languages uses certain syntax to allow for dynamic, flexible web pages in our application. The language uses a system of 'tags' that we can use to fold in javascript with HTML.

Here are the syntax options we'll be using:

1. Two types of new tags
    - `{% %}` run some logic
    - `{{ }}` inject a variable

2. Conditional
    - `{% if x == y %}` start an if
    - `{% else %}` else
    - `{% endif %}` end if statement

3. Looping
    - `{% for item in collection %}` start for loop
    - `{% endfor %}` end for loop
    - `forloop.index0` the index of the current loop starting with 0
    
Liquidjs offers a lot more cool features, [read the documentation here!](https://liquidjs.com/tutorials/intro-to-liquid.html)

## Rendering Views

Let's get right to trying it out, first, inside `server.js`, change the line creating the app object to this: `const app = require("liquid-express-views")(express())`

To make ALL of our views easy to style, we'll use Bootstrap classes, we'll import bootstrap into our `layout.liquid`, so it can be passed down to our other blocks of content. For the remainder of our views, we'll use bootstrap classes as we build to add some flair to our app.

Now, create a new folder called `views` (and it must be named views in order for our npm package to work!) and make a new file in that directory called `layout.liquid` and place in the following code:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fruits</title>

        <!-- link in bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- link in our css -->
        <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
        <main class="container-md">
            {% block content %}
                default content
            {% endblock %}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>
```

This is going to create the base layout for our application's html views. We'll be using something called `block content`, which are smaller pieces of html that get rendered into the layout. 

Let's make our first block now. Inside the views directory, create a file called `index.liquid` and add the following code:

```html
{% layout 'layout.liquid' %}
{% block content %}
    <h1 class="display-4">Welcome To The Fruit App</h1>
    <div class="btn-group btn-group-lg">
        <a href="/users/signup" class="btn btn-success">Sign Up</a>
        <a href="/users/login" class="btn btn-success">Login</a>
    </div>
{% endblock %}
```
This block will be rendered by whatever controller(route) we use to call it with `res.render()`

This is our 'Home' page, so let's go to the home route in server.js and use it to render this page:

```js
router.get('/', (req, res) => {
    // res.send("Your server is running, better go out and catch it")
    res.render('index.liquid')
})
```
Now go to [http://localhost:3000/](http://localhost:3000/) to check it out! The links won't go anywhere for now, but we're about to change all that!

## Sign Up and Log In views

Now that we have a layout serving block content, we can fill out the rest of our application with more views. Since we already have sign up and login buttons, let's start with those.

Create a new directory inside the `views` directory, called `users`.

Create two new files, call them `signup.liquid` and `login.liquid`. The code for each is below:

##### signup.liquid
```html
{% layout 'layout.liquid' %}
{% block content %}
    <div class="container-sm">
        <form action="/users/signup" method="POST">
            <fieldset>
                <legend>New User</legend>
                <label class="form-label">Username: </label>
                <input type="text" name="username" placeholder="username" class="form-control" required>
                <label class="form-label">Password</label>
                <input type="password" name="password" placeholder="enter password" class="form-control" required>
            </fieldset>
            <input type="submit" value="Create Account" class="btn btn-success">
        </form>
    </div>
{% endblock %}
```

##### login.liquid
```html
{% layout 'layout.liquid' %}
{% block content %}
    <div class="container-sm">
        <form action="/users/login" method="POST">
            <fieldset>
                <legend>Welcome Back, Please log in to continue</legend>
                <label class="form-label">Username: </label>
                <input type="text" name="username" placeholder="username" class="form-control" required>
                <label class="form-label">Password</label>
                <input type="password" name="password" placeholder="enter password" class="form-control" required>
            </fieldset>
            <input type="submit" value="Log In" class="btn btn-success">
        </form>
    </div>
{% endblock %}
```
Each of these two files contains a form, and each of these forms contain both an `action` and a `method`. The `action` points to a specific route, or controller as we have been calling them. The `method` refers to the HTTP verb to use to access that controller. We already have a `signup` controller and a `login` controller to call with these forms, but we need our new routes in order to render these views. Inside our `userControllers.js` let's add the following routes:

```js
// renders the signup page
router.get('/signup', (req, res) => {
    res.render('users/signup')
})

// renders the login page
router.get('/login', (req, res) => {
    res.render('users/login')
})
```

That should make it so that your home page buttons work!

Next, let's change our signup and login POST method controllers, so they redirect the user upon a successful signup/login to the next page they should go to.

```js
// post to send the signup info
router.post('/signup', async (req, res) => {
    console.log('this is initial req.body in signup', req.body)
    // first encrypt our password
    req.body.password = await bcrypt.hash(
        req.body.password, 
        await bcrypt.genSalt(10)
    )
    // console.log('req.body after hash', req.body)
    // create a new user
    User.create(req.body)
        // if created successfully redirect to login
        .then(user => {
          // this was our old success response
          // res.status(201).json({ username: user.username })
          // now, when successful, we redirect to the login page
          res.redirect('/user/login')
        })
        // if an error occurs, send err
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

// post to send the login info(and create a session)
router.post('/login', async (req, res) => {
    // console.log('request object', req)
    // get the data from the request body
    const { username, password } = req.body
    // then we search for the user
    User.findOne({ username })
        .then(async (user) => {
            // check if the user exists
            if (user) {
                // compare the password
                // bcrypt.compare evaluates to a truthy or a falsy value
                const result = await bcrypt.compare(password, user.password)

                if (result) {
                    // then we'll need to use the session object
                    // store some properties in the session
                    req.session.username = username
                    req.session.loggedIn = true
                    req.session.userId = user.id

                    console.log('session user id', req.session.userId)
                    // this was the old method, for sending a successful response
                    // res.status(201).json({ user: user.toObject() })
                    // now, we'll redirect to /fruits if login is successful
                    res.redirect('/fruits')
                } else {
                    res.json({ error: 'username or password incorrect'})
                }
            } else {
                res.json({ error: 'user does not exist' })
            }
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

```

Our users can sign up and log in from the browser! Let's move on to the fruits resource.

## Fruit CRUD views

Now let's get to the views for our fruits!

Create a new directory inside the `views` directory, called `fruits`

We'll need 4 views for this resource, so create the following files inside `views/fruits`:

1. `index.liquid` -> renders a view of all our fruits
2. `show.liquid` -> renders a view of one fruit
3. `new.liquid` -> renders a view with a form used to create fruits
4. `edit.liquid` -> renders a view with a form used to update fruits

##### index.liquid
```html
<!-- we're serving block content in layout.liquid -->
<!-- so we need to inform all our blocks(files) -->
{% layout 'layout.liquid'%}
<!-- here we start our block content -->
{% block content %}
    <div >
        <h2 class="display-6">All Fruits</h2>
        <div class="row">
            <!-- this uses liquid tags to loop over the fruits! -->
            {% for fruit in fruits %}
                <div class="card" style="width: 18rem;">
                    <!-- card header -> name of fruit -->
                    <!-- card body -> ready to eat as title, color as text-->
                    <h5 class="card-header">{{fruit.name}}</h5>
                    <div class="card-body">
                        <h5 class="card-title">
                            {% if fruit.readyToEat %}
                                Ripe
                            {% else %}
                                Not Ripe
                            {% endif %}
                        </h5>
                        <p class="card-text"> 
                            The color of this {{fruit.name}} is {{ fruit.color }}
                        </p>
                        <a href="/fruits/{{ fruit.id }}" class="btn btn-info">
                            View {{ fruit.name }}
                        </a>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
{% endblock %}
```
##### show.liquid
```html
{% layout 'layout.liquid' %}
{% block content %}
    <div class="container-md">
        <!-- you can do fun things like inline style with properties of your rendered object -->
        <!-- <article style="background-color:{{fruit.color}}"> -->
        <article>
            <h2>
                {{ fruit.name }} - 
                {% if fruit.readyToEat %}
                    Ready to Eat
                {% else %}
                    Not Ready to Eat
                {%endif%}
            </h2>
            <h3>{{ fruit.color }}</h3>
            {% if fruit.owner == userId  %}
                <div class="btn-group">

                    <a href="/fruits/{{ fruit.id }}/edit" class="btn btn-primary">Edit</a>
                    <!-- this is how we tell our app to use method-override -->
                    <!-- forms can ONLY send GET or POST requests, so we need method-override to allow for PUT and DELETE requests -->
                    <form action="/fruits/{{ fruit._id }}?_method=DELETE" method="POST">
                        <input type="submit" value="delete that froot" class="btn btn-danger">
                    </form>
                </div>
            {% endif %}
        </article>
        <div class="col-md-6">
            <form action="/comments/{{fruit.id}}" method="POST">
                <fieldset>
                    <legend>Add Comment</legend>
                    <label class="form-label">Comment: </label>
                    <input type="text" class="form-control" name="note" placeholder="enter comment here...">
                </fieldset>
                <input type="submit" class="btn btn-success" value="Add Comment">
            </form>
        </div>
    </div>
{% endblock %}
```
##### new.liquid
```html
{% layout 'layout.liquid' %}
{% block content %}
    <div class="container-sm">
        <form action="/fruits" method="POST">
            <fieldset>
                <legend>Create New Fruit</legend>
                <label class="form-label">Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="enter fruit name"
                        class="form-control"
                    >
                <label class="form-label">Color:</label>
                    <input 
                        type="text" 
                        name="color" 
                        placeholder="enter fruit color"
                        class="form-control"
                    >
                <label class="form-label">Ready To Eat:</label>
                    <input 
                        type="checkbox" 
                        name="readyToEat"
                        class="form-check-input"
                    >
            </fieldset>
            <input 
                type="submit" 
                value="Create New Fruit"
                class="btn btn-success"
            >
        </form>
    </div>
{% endblock %}
```
##### edit.liquid
```html
{% layout 'layout.liquid' %}
{% block content %}
<div class="container-sm">
    <!-- here, we're using method override in order to send a PUT request -->
    <form action="/fruits/{{ fruit.id }}?_method=PUT" method="POST">
        <fieldset>
            <legend>Edit New Fruit</legend>
            <label class="form-label">Name:</label>
            <input 
                type="text" 
                name="name" 
                placeholder="enter fruit name"
                class="form-control"
                value="{{ fruit.name }}"
            >
            <label class="form-label">Color:</label>
            <input 
                type="text" 
                name="color" 
                placeholder="enter fruit color"
                class="form-control"
                value="{{ fruit.color }}"
            >
            <label class="form-label">Ready To Eat: </label>
            <input 
                type="checkbox" 
                name="readyToEat"
                class="form-check-input"
                {% if fruit.readyToEat %}
                    checked
                {% endif %}
            >
        </fieldset>
        <input type="submit" class="btn btn-success" value="Edit {{ fruit.name }}">
    </form>
</div>
{% endblock %}
```
Now, naturally, we'll need to update our routes, let's build them like this:

```js

////////////////////////////////////////////
// Router Middleware
////////////////////////////////////////////
// create some custom middleware to protect these routes
// Authorization middleware
router.use((req, res, next) => {
	// checking the loggedin boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/user/login')
	}
})

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// index ALL fruits route
router.get('/', (req, res) => {
	// find the fruits
	Fruit.find({})
		// then render a template AFTER they're found
		.then((fruits) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			// console.log(fruits)
      // to render a template that has content from our database,
      // we need to send whatever values we might need to use inside the view template
			res.render('fruits/index', { fruits, username, loggedIn })
		})
		// show an error if there is one
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

// index that shows only the user's fruits
router.get('/mine', (req, res) => {
	// find the fruits
	Fruit.find({ owner: req.session.userId })
		// then render a template AFTER they're found
		.then((fruits) => {
			// console.log(fruits)
			const username = req.session.username
			const loggedIn = req.session.loggedIn

			res.render('fruits/index', { fruits, username, loggedIn })
		})
		// show an error if there is one
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const username = req.session.username
	const loggedIn = req.session.loggedIn
	res.render('fruits/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
  // our form has a checkbox, so we need to 
	// check if the readyToEat property should be true or false
	// we can check AND set this property in one line of code
	// first part sets the property name
	// second is a ternary to set the value
	req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
	// console.log('this is the fruit to create', req.body)
	// now we're ready for mongoose to do its thing
	// now that we have user specific fruits, we'll add the username to the fruit created
	// req.body.username = req.session.username
	// instead of a username, we're now using a reference
	// and since we've stored the id of the user in the session object, we can use it to set the owner property of the fruit upon creation.
	req.body.owner = req.session.userId
	Fruit.create(req.body)
		.then((fruit) => {
			console.log('this was returned from create', fruit)
			res.redirect('/fruits')
		})
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const fruitId = req.params.id
	// find the fruit
	Fruit.findById(fruitId)
		// -->render if there is a fruit
		.then((fruit) => {
			console.log('edit froot', fruit)
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			res.render('fruits/edit', { fruit, username, loggedIn })
		})
		// -->error if no fruit
		.catch((err) => {
			console.log(err)
			res.json(err)
		})
})

// update route -> sends a put request to our database
router.put('/:id', (req, res) => {
	// get the id
	const fruitId = req.params.id
	// check and assign the readyToEat property with the correct value
	req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
	// tell mongoose to update the fruit
	Fruit.findByIdAndUpdate(fruitId, req.body, { new: true })
		// if successful -> redirect to the fruit page
		.then((fruit) => {
			console.log('the updated fruit', fruit)

			res.redirect(`/fruits/${fruit.id}`)
		})
		// if an error, display that
		.catch((error) => res.json(error))
})

// show route
router.get('/:id', (req, res) => {
	// first, we need to get the id
	const fruitId = req.params.id
	// then we can find a fruit by its id
	Fruit.findById(fruitId)
		.populate('comments.author')
		// once found, we can render a view with the data
		.then((fruit) => {
			console.log('the fruit we got\n', fruit)
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
			res.render('fruits/show', { fruit, username, loggedIn, userId })
		})
		// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})

// delete route
router.delete('/:id', (req, res) => {
	// get the fruit id
	const fruitId = req.params.id
	// delete the fruit
	Fruit.findByIdAndRemove(fruitId)
		.then((fruit) => {
			console.log('this is the response from FBID', fruit)
			res.redirect('/fruits')
		})
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})
////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router
```

## Additional Resources

-   [LiquidJs Documentation](https://liquidjs.com/)
-   [liquid-express-views npm](https://www.npmjs.com/package/liquid-express-views)
-   [method-override npm](https://www.npmjs.com/package/method-override)
-   [Bootstrap Docs](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
