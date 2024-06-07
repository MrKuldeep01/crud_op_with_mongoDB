# WebApp for Performing CRUD Operations on MongoDB with Mongoose 👨‍💻🚀

## Overview

This project is a web application designed to perform CRUD (Create, Read, Update, Delete) operations on MongoDB using Mongoose. It showcases the fundamental concepts and techniques involved in setting up a MongoDB database, connecting it to a web application, and manipulating data through well-defined schemas and models.

## Features

- **Create**: Add new entries to the database.
- **Read**: Retrieve and display entries from the database.
- **Update**: Modify existing entries in the database.
- **Delete**: Remove entries from the database.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **HTML/CSS**: Front-end structure and styling.
- **JavaScript**: Client-side scripting.

## Learning Objectives

During the development of this web application, the following key concepts were learned and implemented:

1. **Installation**
   - Setting up Node.js and npm.
   - Installing MongoDB.
   - Installing required Node.js packages (Express, Mongoose, etc.).

2. **Connection**
   - Establishing a connection to a MongoDB database using Mongoose.

3. **Model Creation**
   - Defining Mongoose models to interact with MongoDB collections.

4. **Schema Creation**
   - Creating and structuring schemas to define the shape of documents within a collection.

5. **CRUD Operations**
   - Implementing Create, Read, Update, and Delete functionalities.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MrKuldeep01/crud_op_with_mongoDB.git
   cd crud_op_with_mongoDB
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   Ensure MongoDB is installed and running on your machine. You can download and install MongoDB from the [official website](https://www.mongodb.com/try/download/community).

4. **Configure environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

6. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

### Create

To create a new entry, navigate to the "Create" section of the web app and fill out the required fields in the form. Submit the form to add the entry to the database.

### Read

To view all entries, navigate to the "Read" section of the web app. A list of all entries in the database will be displayed.

### Update

To update an existing entry, navigate to the "Update" section, select the entry you wish to update, modify the fields as necessary, and submit the form.

### Delete

To delete an entry, navigate to the "Delete" section, select the entry you wish to delete, and confirm the deletion.

- **models/**: Contains Mongoose model definitions.
- **routes/**: Contains route definitions and handlers for CRUD operations.
- **views/**: Contains HTML files for the front-end.
- **.env**: Environment variables configuration file.
- **app.js**: Main application file.
- **package.json**: Project metadata and dependencies.

## Acknowledgements

This project was developed as a learning exercise to understand the basics of web development with Node.js, Express, MongoDB, and Mongoose. Special thanks to the YouTube channel "Sheryians Coding School" and documentation that provided guidance and support throughout the development process.
