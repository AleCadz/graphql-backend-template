This is a backend server built with Node.js, Express, TypeGraphQL, and MikroORM for MongoDB. The project serves as a template or starting point for creating GraphQL-based APIs, utilizing a modular approach with resolvers and entities for resource management.

Features:

GraphQL API: A flexible API based on GraphQL to interact with data.
TypeGraphQL: Leverages TypeGraphQL for type-safe GraphQL schema generation using TypeScript decorators, making the GraphQL API development seamless and maintainable.
MikroORM: Uses MikroORM for MongoDB database management with support for entities and migrations.
Express: A minimalistic framework for creating and managing the server.
Modular Configuration: Easy integration of resolvers and entities without manual setup.

How to Use:
Navigate to the project directory.
Run the command to install dependencies:
yarn
Start the server with the default configuration by running:
docker-compose up -d
Create a .env file in the root of the project with the following line: MONGO_URL=mongodb://root:example@localhost:27019/mi_base_de_datos?authSource=admin
Now you can run the project with yarn dev
Enjoy it!
