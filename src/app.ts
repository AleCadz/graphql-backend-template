import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, NonEmptyArray } from "type-graphql";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import path from "path";
import fs from "fs";

const InitServer = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  const em = orm.em.fork();

  const resolversPath = path.join(__dirname, 'resolvers');
  const resolvers = fs.readdirSync(resolversPath)
    .filter(file => file.endsWith('.ts') || file.endsWith('.js'))
    .map(file => require(path.join(resolversPath, file)).default) as NonEmptyArray<Function>;

  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ em }),
  });

  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/graphql");
  });
}

InitServer().catch((err) => {
  console.error("Error starting the server:", err);
});
