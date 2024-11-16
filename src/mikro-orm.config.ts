import { defineConfig } from "@mikro-orm/mongodb";
import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";

const entitiesPath = path.join(__dirname, "entities");

const entities = fs
  .readdirSync(entitiesPath)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".js")) 
  .map((file) => require(path.join(entitiesPath, file)).default);

dotenv.config({ path: path.resolve(__dirname, "../.env") });
export default defineConfig({
  clientUrl: process.env.MONGO_URL,
  entities: entities,
  debug: true,
});
