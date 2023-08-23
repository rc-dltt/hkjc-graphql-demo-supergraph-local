import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";

// import { races, users } from "../test-data/query-races.data";
import { races, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

let contextValue: { principal: any; dataSources: any };
let actual: any[];
let parent: any;
let args: { first: Number; after: String };

Given("There are races in the system", () => {
  contextValue = {
    principal: "user#1",
    dataSources: {
      races,
      users,
    },
  };
  args = { first: 10, after: "" };
});

When("A users queries the races", () => {
  actual = resolvers.Query.races(parent, args, contextValue);
});

Then("The first {int} races should be displayed", (first) => {
  const expectedLength = Math.min(
    first,
    contextValue.dataSources.races.list().length
  );
  assert.equal(actual.length, expectedLength);
});

// Given("There are races in the system", () => {
//   contextValue = {
//     principal: "user#3",
//     dataSources: {
//       races,
//       users,
//     },
//   };
//   args = { first: 10, after: "" };
// });

// When("An unauthorized users queries the races", () => {});

// Then("An exception is thrown", () => {
//   assert.throws(() => resolvers.Query.races(parent, args, contextValue));
// });
