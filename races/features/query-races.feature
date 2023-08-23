Feature: Query races
  Users of the betting platform want to see a paged list of the available races
  Unauthorized users will see an empty list

  Rule: Default page of {int} races should be displayed when no paging is defined

    Scenario: There are races in the system and the current user is authorized to query the races
      Given The current user is authorized
      When The user queries the first 10 races
      Then The first 10 races should be displayed

  Rule: An exception should be thrown when user is unauthorized

    Scenario: There are races in the system but the current user is not authorized to query the races
      Given There are races in the system and the user is unauthorized
      When An unauthorized user queries the first 10 races
      Then An exception is thrown
