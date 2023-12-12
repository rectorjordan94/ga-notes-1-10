[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Prerequisites

-   A working, tested express application using mongoose
-   An account with [MongoDb](https://account.mongodb.com/account/login) 
-   An account with [fly.io](https://fly.io/)


## Preparation

* We will be using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to host our database.

> MongoDB Atlas is a free database service provided by MongoDB. We will have to sign up for an account and configure our server to use MongoDB Atlas when it is deployed.

### Before We Start

If you don't already have a `.gitignore` file, create it now in the top-level

* Make sure `node_modules` folder is included in `.gitignore`. This ensures that once we delete the `node_modules` folder, git won't find it again.
  * If you've forgotten to use `.gitignore` and accidentally checked in the `node_modules` folder to git, you can remove it with the following command: `git rm -r node_modules`
* Also make sure `.env` is included in `.gitignore`
  * If you've accidentally checked in your `.env` file to git, you can remove it from git with the `git rm .env` command
* Make sure your modules are all installed with `npm i`
* Make sure your code runs using `nodemon`
  * Do you get an error that looks like "xyz module is not found"? We might be missing some dependencies! Run the following command for each module you're missing:

    `npm install xyz`
* git `add`, `commit`, and `push` all your code to github! 

## MongoDB Atlas

Let's setup our application to use MongoDB Atlas rather than localhost for the database!

1. [Create an account](https://account.mongodb.com/account/register) at MongoDB Atlas
2. Create a free tier cluster by following [these instructions](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/)
   * For the Cluster Name, choose a descriptive name, like the name of your project!
3. Go to Securty &gt; Network Access \(from menu on left of page\) to [Whitelist an IP address](https://docs.atlas.mongodb.com/security/add-ip-address-to-list/)
   * Click on the _allow access from anywhere_ button to add `0.0.0.0/0` as an accepted IP address.
4. Go to Security &gt; Database Access to [add a user](https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/)
   * **Note:** DO NOT USE SPECIAL CHARACTERS, LETTERS AND NUMBERS ONLY, and make sure you keep track of this password, we'll need it later!
5. Go to Databases &gt; Connect &gt; Connect your application to find your MongoDB connection string
   * It will look similar to this: `mongodb+srv://<cluster_name>:<your_db_users_password>@cluster0.9hqnh.mongodb.net/<database_name>?retryWrites=true&w=majority`
6. Add the connection string to `.env`
   * Replace `<cluster_name>, <your_db_users_password>`, and `<db_name>` with your values.
   * `MONGODB_URI=mongodb+srv://<cluster_name>:<your_db_users_password>@cluster0.9hqnh.mongodb.net/<database_name>?retryWrites=true&w=majority`
   * You'll want to save the old one, so let's call that MONGO_DEV_URI while we test our connection to the new cluster

#### Connect our Express app to MongoDB Atlas

In `config/db.js`:

```javascript
'use strict'

// creating a base name for the mongodb
// REPLACE THE STRING WITH YOUR OWN DATABASE NAME
const mongooseBaseName = 'database-name'

// create the mongodb uri for development and test
const database = {
	development: `mongodb://localhost/${mongooseBaseName}-development`,
	test: `mongodb://localhost/${mongooseBaseName}-test`,
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// production evironment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

// mongodb+srv://<mongoDbUser>:<userpassword>@<organizationname>0.j6ixp.mongodb.net/<databasename>?retryWrites=true&w=majority

module.exports = currentDb

```

This connection file is an example from our express-auth boilerplate. Other connection types used in class will be slightly different, but those differences will be discussed in class.


## Fly.io

Now it's time to fly!

1. Log in to your fly.io account(link above)
2. If this is your *VERY FIRST* fly app, you need to [install flyctl](https://fly.io/docs/hands-on/install-flyctl/)
3. *YOU ONLY NEED TO INSTALL `flyctl` ONCE PER COMPUTER!*
4. In the terminal, `cd` into your API's directory, and make sure you're in the location with your source code. This should be run at the same level as `server.js`
5. run `flyctl launch` in your terminal. This will prompt you to choose a region, which fly already finds the closest location to you. Type the three letter region code and hit enter. Then it asks if you'd like to deploy now, say yes. You should see something similar to this:
```Scanning source code
Detected NodeJS app
Using the following build configuration
        Builder: heroku/buildpacks:20
? Select organization: Demo (demo)
? Select region: ord (Chicago, Illinois (US))
? Would you like to deploy now? Yes

Deploying hellonode
...
```
6. At this point, flyctl creates an app for you and writes your configuration to a `fly.toml` file. You'll then be prompted to build and deploy your app. Once complete, your app will be running on fly. **MAKE SURE YOU ADD `fly.toml` TO YOUR `.gitignore`!!!**
7. Inside the `fly.toml` file you should see an area called `[env]`. EVERYTHING referenced by process.env in your project should be listed here as follows:
```
[env]
  PORT = "8080"
  MONGODB_URI = "mongodb+srv://<mongoDbUser>:<userpassword>@<organizationname>0.j6ixp.mongodb.net/<databasename>?retryWrites=true&w=majority"
  CLIENT_ORIGIN = "this will be the front end's deployed application"
```
8. After adding that to fly, push up the changes, and then run `flyctl deploy`
9. A BUNCH OF STUFF WILL HAPPEN! After it's all done, you should see some sort of confirmation, but there's no confirmation quite like testing it out! So, you can see your status with the command `flyctl status`, but after that you should run `flyctl open` which will open the app in your default browser.
10. SAVE THE URL FOR LATER AS YOU WILL NEED IT FOR FRONT-END DEPLOYMENT!

## CONGRATS! YOUR API IS DEPLOYED! NOW TEST IT WITH POSTMAN!

## Netlify

Open your React App's apiConfig folder, and paste in the URL for your backend deployed in the production section **WITHOUT THE SLASH AT THE END**

Now head over to Netlify and follow their [step-by-step deployment guide](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-feature-tour&_gl=1*w7347x*_gcl_aw*R0NMLjE2NjE4OTI0NTUuQ2p3S0NBanc2cmFZQmhCN0Vpd0FCZ2U1S2pBNGp5dUUyZERQRFJHWnUxV3hXQ2c1SkVpc3g2X2xUWGdXeE41ZVRIM2ZRSVp2ZEFrdlFCb0N5Z0lRQXZEX0J3RQ..&_ga=2.195459564.1536052144.1661892455-2031540978.1661892455&_gac=1.18105035.1661892455.CjwKCAjw6raYBhB7EiwABge5KjA4jyuE2dDPDRGZu1WxWCg5JEisx6_lTXgWxN5eTH3fQIZvdAkvQBoCygIQAvD_BwE) 

**If you are using our react app boilerplate, you will need to change ONE thing, go to Site Settings, select Build & Deploy, and in the Build Settings, change the Build Command to `CI= npm run build`** 

You _might_ have to redeploy again after doing this, just click `Trigger Deploy` in your project's deploy section.

1. Click the link to see the live site.
2. Copy that deployed link, and paste it in your API's `fly.toml` `[env]` as the `CLIENT_ORIGIN`, this should be in quotes and shouldn't have an ending slash.
3. You might have to redeploy your API, just run `flyctl deploy` again.
4. Now go back to your Netlify link and test it all out!

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
