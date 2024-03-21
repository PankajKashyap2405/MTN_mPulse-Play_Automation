Feature: MTN Mifi Bundle 
    
    Background: 
         Given Navigate to Application URL

    Scenario: Mifi Bundle Validation
        When Users login to Application with email
        When User clicks on Data Button
        When User clicks on Broadband Bundles
        When User clicks on Mifi Bundles
        Then User Validates the 6GB Monthly Broadband Plan