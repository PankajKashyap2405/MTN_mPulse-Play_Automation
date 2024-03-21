Feature: MTN Play Application - video validaton
    
    Background: 
         Given Navigate to Paly Application URL

    Scenario: Video validation of mtn Play
        
      When Users login to Play Application with username
      Then click on MTN logo
      Then validate video banners
      Then click on video banner and validate
      Then click on MTN logo
      Then click on view all and validate