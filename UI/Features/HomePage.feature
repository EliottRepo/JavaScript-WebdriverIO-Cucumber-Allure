Feature: YouTube home page

  Scenario: User verifies first video from VLP is render
    Given I am on home page
    When I click on the first video in VLP
    Then Verify I navigate to correct VDP
    Then Verify video played correctly
   
    
