// src/context.ts
import { MongoEntityManager } from '@mikro-orm/mongodb';

export interface context {
  em: MongoEntityManager;
}
