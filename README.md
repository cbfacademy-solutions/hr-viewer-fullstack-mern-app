# Fullstack MERN Application: HR Viewer

For the following tasks we will finish the functionality for a fullstack MERN application.

This project consists of a:

1. MongoDB Database (`/server/seed/membership.mongodb`)
1. Node API (`/server/`)
1. React Front-End Application (`/client/`)

The application displays profile information from a database of people.

The functionality should allow a user to add, edit and delete people from the database.

Currently the application only has the functionality to display a person's details.

## Getting Started: Installation
Go to your cloned project.

Navigate to your project root directory. Open the project folder  Visual Code and open a terminal window.

To install the project dependencies, run the following command from the root directory:

```
npm run dev-install
```

## Install Database Seed Data

Open Visual Studio Code. Ensure you are connected to your MongoDB Instance.

Open the seed data file [membership.mongodb](/server/seed/membership.mongodb) in Visual Studio and run the file to install people collection.

Once installed you should see 11 records in your MongoDB instance:

![Seed Data](mongo.png)

## Start the Development Server

To start the application, run the following command:

```
npm run develop
```

## Task:

Currently the application only has the functionality to display a person's details.

Complete the application by adding the following functionality:

1. Add a new person to the application
2. Edit a person's details
3. Delete a person's profile

Visit http://localhost:3000 to view the application homepage

### Homepage View

![HR Viewer](homepage.png)

### View Personal Details

![Personal Details](person-details.png)