Feature: MTN eshop Explore by category
    
Background: 
    Given Navigate to Application URL
Scenario: Explore by categories
    When User Clicks on Products and drops down
    Then Validate User Account can see Devices, Data Bundles, Enterprise Services | Cloud Services |Airtime Recharge
    When User clicks on the Devices link
    Then User sees Devices written
    When User Clicks on Clear All Button
    When User clicks on the Data Bundles link
    Then User sees Data Bundles written
    When User Clicks on Clear All Button
    When User clicks on the Data Enterprise Services Link
    Then User sees Enterprise Services written
    When User Clicks on Clear All Button
    When User clicks on the Data Cloud Services Link
    Then User sees Cloud Services written
    When User Clicks on Clear All Button
    When User clicks on the Airtime Recharge Link
    Then User sees Airtime recharge written
    When User Clicks on Clear All Button
    