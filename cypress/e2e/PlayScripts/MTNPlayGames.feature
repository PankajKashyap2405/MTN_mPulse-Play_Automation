Feature: MTN Play Application - Games validaton
    
    Background: 
         Given Navigate to Paly Application URL

    Scenario: games validation of mtn Play
        
      When Users login to Play Application with username
      Then click on MTN logo
      Then validate games banners
      Then click on games banner and validate
      Then click on MTN logo
      Then click on view all in games and validate 