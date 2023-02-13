# CRUD API with Node.js, Express, and MongoDB

This is a simple CRUD (create, read, update, delete) API for interacting with a MongoDB database. It uses Node.js, Express, and the Mongoose library to define a schema for the data and to create a model for interacting with the database.

## Prerequisites

Before you can use this API, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Usage

To start the API, run the following command in the root directory of the project:

npm start

This will start the API on port 3000. You can then send HTTP requests to the following endpoints:

- `POST /data`: Create a new document in the database
- `GET /data`: Read all documents from the database
- `GET /data/:id`: Read a single document from the database
- `PUT /data/:id`: Update a document in the database
- `DELETE /data/:id`: Delete a document from the database

## Example

Here is an example of how you can use `curl` to send a `POST` request to the `/data` endpoint to create a new document:
curl -X POST -H "Content-Type: application/json" -d '{"name":"John","age":25}' http://localhost:3000/data


This will create a new document with the name "John" and the age 25 in the database.
