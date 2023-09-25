# Daily-Journal-express
# Todo Composer App

This is a simple Node.js application using Express, EJS template engine, and lodash to compose and manage todos. It includes APIs to interact with todos.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

- Start the application using `node app.js`.
- Visit `http://localhost:3000/compose` to compose a new todo.
- Existing todos can be retrieved via API at `http://localhost:3000/api/todos`.

## API Endpoints

- `GET /api/compose`: To create a new  todos.
- `POST /api/post/name of Todo`: To find that todo

## Generating MD File

To generate the `todos.md` file, run the `generateMD.js` script using `node generateMD.js`.

## Dependencies
- Node.js
- Express
- EJS
- Lodash
## Basic Syntax

- `<% JavaScript code %>`: Executes the JavaScript code.
- `<%= JavaScript expression %>`: Prints the result of the expression.

  ## Example


<!DOCTYPE html>
<html>
<head>
    <title>EJS Example</title>
</head>
<body>
    <h1>Welcome to <%= title %></h1>
    <ul>
        <% for(let i=0; i<items.length; i++) { %>
            <li><%= items[i] %></li>
        <% } %>
    </ul>
</body>

  ## Deployment
  
