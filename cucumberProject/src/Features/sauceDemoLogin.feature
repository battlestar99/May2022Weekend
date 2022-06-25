

Feature: Sauce demo login Feature 

Scenario: validaing different user login for saucedemo 

Scenario: valid user login 


    Given user is on the home page
    When user enters username
    And user enters password
    And user clicks on the login button
    Then user should be logged in
    
    