Feature: MTN Play Application - User Login
    
    Background: 
         Given Navigate to Paly Application URL
         

    Scenario: Login to MTN Play Application with username

        When Users login to Play Application with username
        Then Validate User login Success
        Then Validate Banner on Paly Home page
        When user click on Fooler link and navigate back to home page
        

        

        
