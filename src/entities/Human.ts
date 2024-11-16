import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Human {
  @PrimaryKey()
  @Field(() => ID)
  _id!: ObjectId;

  @Property()
  @Field()
  humansName!: string;

  @Property({ nullable: true })
  @Field()
  age?: number;
}

export default Human