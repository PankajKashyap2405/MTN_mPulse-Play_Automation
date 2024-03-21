Feature: MTN Recharge Transaction 
    
    Background: 
         Given Navigate to Application URL

    Scenario: MTN Recharge Transaction Validation
        When Users login to Application with username
        When User clicks on username on top right corner of homepage
        The User Validates drop down
        When User clicks on Manage Profile
        When User clicks on My transaction history
        When User clicks on Recharge
        Then User Validates the Recharge Transactions