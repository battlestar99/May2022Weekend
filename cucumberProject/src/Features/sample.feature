# Author: Anik
# Date: 06/25/2022

Feature: Sauce Demo Login Feature

Background: 

Given user is on the home page

  Scenario: Validating valid user login 
  
    
    When user enters username
    And user enters password
    And user clicks on the login button
    Then user should be logged in

  Scenario: Validating invalid user login   
    
   
    When user enters invalid username
    And user enters password
    And user clicks on the login button
    Then user should not be logged in
    