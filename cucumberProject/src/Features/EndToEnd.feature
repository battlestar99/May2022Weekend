#Author: your.email@your.domain.com
#Keywords Summary :
Feature: End to End process of buying a product

  Scenario: validaing complete user process
    
    
    Given user is on the home page
    When user enters username
    And user enters password
    And user clicks on the login button
    Then user should be logged in
    When user clicks the backpack to cart
    And user clicks on the cart button
    Then user should be in the cart page
    When user clicks on the check out
    Then user should be in the informaiton page
    When user enters first name
    And user enters last name
    And user enters zip code
    And user clicks on the continue button
    When user clicks on finish
    Then user should see checkout complete msg
