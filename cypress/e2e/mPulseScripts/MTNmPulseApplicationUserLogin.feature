Feature: MTN mPulse Application - User Login
    
    Background: 
         Given Navigate to mPulse Preprod Application User Login URL

    Scenario: Login to MTN mPulse Application with User Account
        When Users login to mpulse Application with User Account
        Then Validate User Account login 
        When User Logout Application
        
        

        
