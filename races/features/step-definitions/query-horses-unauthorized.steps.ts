import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import GraphQLWorld from "../GraphQLWorld";

import { horses, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

Given(
  "The current user is unauthorized to query horses",
  function (this: GraphQLWorld) {
    this.context = {
      principal: "user#3",
      dataSources: {
        horses,
        users,
      },
    };
  }
);

When(
  "An unauthorized user queries the first {int} horses",
  function (this: GraphQLWorld, first: number) {
    this.args = { first: first, after: "" };
  }
);

Then("An exception is thrown for horses", function (this: GraphQLWorld) {
  assert.throws(() => resolvers.Query.horses(this.parent, this.args, this.context));
});
