import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import GraphQLWorld from "../GraphQLWorld";

import { horses, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

Given(
  "The current user is authorized to query horses",
  function (this: GraphQLWorld) {
    this.context = {
      principal: "user#1",
      dataSources: {
        horses,
        users,
      },
    };
  }
);

When(
  "The user queries the first {int} horses",
  function (this: GraphQLWorld, first: number) {
    this.args = { first: first, after: "" };
    this.actual = resolvers.Query.horses(this.parent, this.args, this.context);
  }
);

Then(
  "The first {int} horses should be displayed",
  function (this: GraphQLWorld, expected: number) {
    assert.equal(this.actual.length, expected);
  }
);
