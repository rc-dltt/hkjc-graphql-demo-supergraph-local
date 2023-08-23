import { loadFeature, defineFeature } from "jest-cucumber";
import { expect } from "@jest/globals";

// import { races, users } from "../test-data/query-races.data";
import { races, users } from "../../src/db";
import { resolvers } from "../../src/resolvers";

const feature = loadFeature("./specs/features/query-races.feature");

defineFeature(feature, (test) => {
  let contextValue: { principal: any; dataSources: any };
  let actual: any[];
  let parent: any;
  let args: { first: Number; after: String };

  test("There are races in the system and the current user is authorized to query the races",
    ({ given, when, then }) => {
      given("There are races in the system", () => {
        contextValue = {
          principal: "user#1",
          dataSources: {
            races,
            users,
          },
        };
        args = { first: 10, after: "" };
      });

      when("A users queries the races", () => {
        actual = resolvers.Query.races(parent, args, contextValue);
      });

      then("The first {first} races should be displayed", () => {
        const expectedLength = Math.min(
          args.first as number,
          contextValue.dataSources.races.list().length
        );
        expect(actual.length).toBe(expectedLength);
      });
    }
  );

  test("There are races in the system but the current user is not authorized to query the races", ({
    given,
    when,
    then,
  }) => {
    given("There are races in the system", () => {
      contextValue = {
        principal: "user#3",
        dataSources: {
          races,
          users,
        },
      };
    });

    when("An unauthorized users queries the races", () => {});

    then("An exception is thrown", () => {
      expect(() => resolvers.Query.races(parent, args, contextValue)).toThrow();
    });
  });
});
