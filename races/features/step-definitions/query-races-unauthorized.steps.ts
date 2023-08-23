import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import GraphQLWorld from "../GraphQLWorld";

// import { races, users } from "../test-data/query-races.data";
import { races, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

Given(
  "There are races in the system and the user is unauthorized",
  function (this: GraphQLWorld) {
    this.context = {
      principal: "user#3",
      dataSources: {
        races,
        users,
      },
    };
  }
);

When(
  "An unauthorized user queries the first {int} races",
  function (this: GraphQLWorld, first: number) {
    this.args = { first: first, after: "" };
  }
);

Then("An exception is thrown", function (this: GraphQLWorld) {
  assert.throws(() => resolvers.Query.races(this.parent, this.args, this.context));
});
