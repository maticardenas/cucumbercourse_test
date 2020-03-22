Feature: Application Login


#  Background:
#    Given Validate the browser
#    When Browser is triggered
#    Then Check if browser is started


  @RegTest
  Scenario Outline: Home page default login
    Given User is on NetBanking landing page
    When User login into application with <Username> and <Password>
    Then Home page is populated
    And Cards displayed are "true"

    Examples:
      | Username | Password  |
      | User1    | Password1 |
      | User2    | Password2 |
      | User3    | Password3 |
      | User4    | Password4 |


  @SanityTest
  Scenario: Home page wrong login
    Given User is on NetBanking landing page
    When User login into application with "jin" and "1234"
    Then Home page is populated
    And Cards displayed are "false"

  #datatable usage
  @SmokeTest
  Scenario: Home page sign up
    Given User is on NetBanking landing page
    When User sign up with following details
    | jenny | abcd | john@abcd.com | Australia | 123543123 |
    Then Home page is populated
    And Cards displayed are "false"



