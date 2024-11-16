import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { Human } from "../entities/Human";
import { context } from "../context";

@Resolver(Human)
export class HumanResolver {
  @Query(() => [Human])
  async humans(@Ctx() { em }: context) {
    return em.fork().find(Human, {});
  }

  @Mutation(() => Human)
  async createHuman(
    @Arg("name") name: string,
    @Arg("age") age: number,
    @Ctx() { em }: context
  ) {
    const emFork = em.fork()
    const human = emFork.create(Human, { humansName: name, age: age });
    await emFork.flush();
    return human;
  }
}

export default HumanResolver;
