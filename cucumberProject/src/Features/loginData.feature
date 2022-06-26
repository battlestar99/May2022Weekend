# Author: Anik
# Date: 06/26/2022
Feature: Login

@xyz
  Scenario Outline: All types of user validation
    Given user is on the home page
    When user enters username "<username>" in login
    And user enters password "<password>" in login
    And user clicks on the login button
    Then user access should be "<expectedUrl>" defined

    Examples: 
      | username                | password     | expectedUrl                              |
      | standard_user           | secret_sauce | https://www.saucedemo.com/inventory.html |
      | locked_out_user         | secret_sauce | https://www.saucedemo.com/               |
      | problem_user            | secret_sauce | https://www.saucedemo.com/inventory.html |
      | performance_glitch_user | secret_sauce | https://www.saucedemo.com/inventory.html |
      | abc                     | secret_sauce | https://www.saucedemo.com/               |
      | abcd                    | secret_sauce | https://www.saucedemo.com/test               |
      | xyzx                    | secret_sauce | https://www.saucedemo.com/               |
      | sdfdfd                  | secret_sauce | https://www.saucedemo.com/               |
      | sdfdfhjgjh              | secret_sauce | https://www.saucedemo.com/               |
