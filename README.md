# my-retail-database

  <img src= 'https://img.shields.io/badge/License-MIT-blue'>

## Description

This retail database server allows http requests to retrieve data from a local database easily. Data can be retrieved, edited, and deleted with ease.

This app's logic was created using Node.js, Sequelize and express to handle all server http requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)
- [License](#license)

## Installation

If you wish to run this application locally using Node you can install all the needed modules listed in the package.json file please type "npm i" into the command line. After modules are installed locate the schema.sql file located in the db file. Copy those commands into your MySQL script and run to create the database. In the Node terminal when in the root file of this app type "node seeds/index.js" and this will seed the database with the starter tables and data.

## Usage

[View demo video here!](https://drive.google.com/file/d/1fUCjDn5wdplaDI9xdYR-QxOEpR9XJLRN/view?usp=sharing)

To use This app you can use your preferred API development tool like insomnia or postman to make http requests. Then start the server by typing node server.js into the command line.

For a GET all route when running locally use http://localhost:3001/api/categories || tags || products

ex: http://localhost:3001/api/categories

For a GET by id route use http://localhost:3001/api/categories || tags || products/:id

ex: http://localhost:3001/api/products/1

For a POST route use http://localhost:3001/api/categories || tags || products

ex: http://localhost:3001/api/categories

For a PUT route use http://localhost:3001/api/categories || tags || products/:id

ex: http://localhost:3001/api/categories/3

For a DELETE route use http://localhost:3001/api/categories || tags || products/:id

ex: http://localhost:3001/api/tags/4

![Alt text](assets/images/Screenshot%202023-05-04%20214328.png)
![Alt text](assets/images/Screenshot%202023-05-04%20214344.png)
![Alt text](assets/images/Screenshot%202023-05-04%20214515.png)
![Alt text](assets/images/Screenshot%202023-05-04%20214533.png)
![Alt text](assets/images/Screenshot%202023-05-04%20214930.png)

## How to Contribute

To contribute please email me, or request to be a contributor on Github. Then push to your branch and request a merge to the main branch and I will review the new code.

## Questions

Here is the link to my Github profile https://github.com/jesseemerson7

please <a href="mailto:jesseemerson7@gmail.com">email me</a> about any questions regarding this project. Feel free to inform me of which repository you are referring to and I can get back to you as soon as possible.

## License

MIT license.
