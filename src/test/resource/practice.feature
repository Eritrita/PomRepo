Feature: To test the high level functionality of the zoo website

  Background: 
    Given I am on the zoo website

  Scenario: To populate the contact form
    When I click on "Contact"
    And I enter "Name Test" into the name field
    And I enter "Address Test" into the address field
    And I enter "Postcode Test" into the postcode field
    And I enter "Email Test" into the email field
    And I submit the contact form
    Then I check I am on the confirmation page
    And I close the browser
