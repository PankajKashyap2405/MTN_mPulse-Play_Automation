Feature: MTN eShop login Through Self Service Application
    
    Background: 
         Given Navigate to Self Serive Application URL

    Scenario: Login to MTN eShop Through SelfService with registered email
        When Users select Shop and login to Application with email
        Then Validate User Account links
        When Users logout Application
        
