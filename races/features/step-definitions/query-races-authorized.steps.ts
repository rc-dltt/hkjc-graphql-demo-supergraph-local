import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import GraphQLWorld from "../GraphQLWorld";

// import { races, users } from "../test-data/query-races.data";
import { races, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

Given("The current user is authorized", function (this: GraphQLWorld) {
  this.context = {
    principal: "user#1",
    dataSources: {
      races,
      users,
    },
  };
});

When(
  "The user queries the first {int} races",
  function (this: GraphQLWorld, first: number) {
    this.args = { first: first, after: "" };
    this.actual = resolvers.Query.races(this.parent, this.args, this.context);
  }
);

Then(
  "The first {int} races should be displayed",
  function (this: GraphQLWorld, expected: number) {
    assert.equal(this.actual.length, expected);
  }
);
