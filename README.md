<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>

## Description

Home assignment for creating and using GraphQL while working with nest.js framework and TypeScript.

<hr>

## Requirements:
* [Node.js](https://nodejs.org/en/) - you will need it for npm commands.

## Installation

```bash
$ git clone https://github.com/UrielYair/nest.js_GraphQL.git
$ cd nest.js_GraphQL
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
<hr>

### Working Instruction:

* GraphQL playground:

  Open your browser and navigate to 
  http://localhost:3000/graphql
  and send queries based on the schema and docs.

* Working on [Postman](https://www.postman.com/):

  send POST request to http://localhost:3000/graphql with your query. (choose GraphQL)

* Terminal/Shell: 
  ```bash
  curl \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{ "query": "{ <<YOUR QUERY>> }" }' \
    http://localhost:3000/graphql

  ```