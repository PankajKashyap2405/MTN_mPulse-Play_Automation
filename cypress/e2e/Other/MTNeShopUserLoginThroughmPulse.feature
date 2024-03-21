Feature: MTN eShop login Through mPulse Application
    
    Background: 
         Given Navigate to mPulse Application URL

    Scenario: Login to MTN eShop Through mPulse with registered email
        When Users select Shop from mPulse and login to Application with email
        Then Validate User Account links
        When Users logout Application
        
