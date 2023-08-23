Feature: Query horses
  Users of the betting platform want to see a paged list of the available horses

    Scenario: The current user is authorized to query the horses
      Given The current user is authorized to query horses
      When The user queries the first 10 horses
      Then The first 10 horses should be displayed

    Scenario: The current user is not authorized to query the horses
      Given The current user is unauthorized to query horses
      When An unauthorized user queries the first 10 horses
      Then An exception is thrown for horses