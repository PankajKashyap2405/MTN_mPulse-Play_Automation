Feature: MTN Application - User Login
    
    Background: 
         Given Navigate to Application URL
        
    Scenario: Login to MTN with google Account
        When Users login to Application with google account
        Then Validate User Account links  
        When Users logout Application 

