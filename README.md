This repo contains the code resulting of reading the tutorial:

* [The Dead-Simple Step-By-Step Guide for Front-End Developers to Getting Up and Running With Node.JS, Express, and MongoDB](https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb)

See also:

* [Getting Started With the Mongo Shell – Basic CRUD Operations](https://blog.kevinchisholm.com/javascript/mongodb/getting-started-with-the-mongo-shell-basic-crud-operations/)

There is an equivalent tutorial by Kevin:

* [Kevin's version of this tutorial](https://ull-esit-mii-ca-1718.github.io/express-and-mongodb-KevMCh/)
* [Kevin's repo ULL-ESIT-MII-CA-1718/express-and-mongodb-KevMCh](https://github.com/ULL-ESIT-MII-CA-1718/express-and-mongodb-KevMCh)

[Christopher Buecheler](https://github.com/cwbuecheler) wrote a second part:

* [Creating a Simple RESTful Web App with Node.js, Express, and MongoDB](https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb)
* [The repo ULL-ESIT-MII-CA-1718/node-tutorial-2-restful-app](https://github.com/ULL-ESIT-MII-CA-1718/node-tutorial-2-restful-app)

November 2017

```bash
[~/local/src/CA/node-tutorial-express-mongo/crguezl-node-tutorial-for-frontend-devs(master)]$ express --version
4.14.1
```

* Substituted jade by pug
* Previous versions of Pug/Jade supported an interpolation syntax such as:
	```
													a(href="/#{url}") Link
	```
	This syntax is no longer supported. Use instead:
	```
								var url = 'pug-test.html';
								a(href='/' + url) Link
	```

