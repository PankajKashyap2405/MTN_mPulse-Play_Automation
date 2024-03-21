Feature: MTN Play Application - Subscription
    
    Background: 
         Given Navigate to Paly Application URL
         Given Users login to Play Application with username

    Scenario:  Subscription validation 
             When user clicks on Video category in header 
             Then validate video category page is displayed 
             Then click on Wiflix partner 
             Then validate wiflix partner page is displayed
             Then click on subscribe button 
             Then Validate checkoutt page is displayed 
             Then click on pay now

             
