Rashional
==========================================================

This is an application that uses Machine Learning to identify if a rash might be a symptom of one of several serious diseases.

https://rashional.run.aws-usw02-pr.ice.predix.io/

## Development
The following shows how to get started with developing on this app

1. Clone repository

  ```
  $ git clone
  ```

2. Install dependencies

  ```
  $ npm install
  ```

3. Compile project

  ```
  $ npm run build-all
  ```

  This will build both the front-end and back-end components. 
  

4. Start static fileserver
  ```
  npm start
  ```
  
  This command requires you to run 'npm run build-all' first. If you would prefer to not, you can also use 'npm run babel-node
  

5. Development
  ```
  npm run watch
  ```

This will enable Watchify, which will watch for any changes made in ./client and will bundle the files automatically to ./public/bundle.js

And you're up and going. The server will be locally hosted at http://localhost:5000/

[Check out the Api documentation](https://hackily.github.io/rashional/apidoc/index.html)

Use the following command to regenerate documentation.
>npm run docs
