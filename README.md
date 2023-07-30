# Flash Card App-Backend

Welcome to the backend repository of the Flash Card app! This repository contains the server-side code for the Flash Card app, which is built using Apollo Server with Prisma and Nexus to create a GraphQL API that interacts with a PostgreSQL database. The backend is responsible for handling data storage, retrieval, and business logic for the flash card application.
Technologies

The backend of the Flash Card app is built on the following technologies:

-  Apollo Server: A GraphQL server that handles incoming queries and mutations, and orchestrates data fetching and manipulation.
- Prisma: An ORM (Object-Relational Mapping) tool that provides a type-safe and database-agnostic way to interact with the database.
- Nexus: A declarative GraphQL schema construction library that integrates smoothly with Prisma and Apollo Server.
    PostgreSQL: A powerful open-source relational database management system.
- Node.js: The JavaScript runtime used for building server-side applications.
- TypeScript: A typed superset of JavaScript that provides enhanced developer tooling and helps prevent runtime errors.

## Getting Started

To get the backend up and running locally, follow these steps:

- Clone this repository to your local machine.

- Install Node.js and npm (Node Package Manager) if you haven't already.
- Install the project dependencies by running `npm install`.
- Set up your PostgreSQL database and configure the connection in the .env file.
- Run the Prisma migration to apply the database schema: npx ``prisma migrate dev``.
- Seed the database with initial data (if required) using Prisma's seed command: ``npx prisma db seed``.

- Build the TypeScript code by running `npm run build`.
- Start the server with `npm start`.

The Apollo Server will be running on `http://localhost:4000/graphql`.

## GraphQL API

The GraphQL API is the primary means of communication with the backend. It is designed using Nexus to provide a strongly-typed schema. The main API operations include:

- Query:  Fetch data from the server (e.g., retrieve flash cards, user information).
- Mutation: Modify data on the server (e.g., create, update, or delete flash cards).

For detailed information about the available GraphQL operations and types, please refer to the GraphQL schema and the documentation provided by Apollo Server.

## Database

The backend uses PostgreSQL as the database to store flash cards and related data. Prisma provides an ORM layer that facilitates data access and manipulation without writing raw SQL queries. The Prisma schema defines the database models and their relationships.
Authentication and Authorization

The current version of the backend might not implement authentication and authorization mechanisms. However, depending on the requirements, you can integrate various authentication strategies (e.g., JWT, OAuth) to secure your application and control access to certain API operations.
Deployment

To deploy the backend to a production environment, you will need to set up appropriate hosting and server configurations. Popular hosting options for Node.js applications include Heroku, AWS, and DigitalOcean, among others.

Remember to set production environment variables securely and use appropriate logging and monitoring tools to ensure the stability and reliability of the application.
Contributing

We welcome contributions to the Flash Card app! If you find a bug, have a suggestion, or want to add new features, please follow the standard GitHub fork and pull request workflow. Before making significant changes, consider opening an issue to discuss the proposed changes with the maintainers.
License

The Flash Card app backend is open-source and distributed under the MIT License. Feel free to use and modify the code according to the terms of the license.

Happy coding!