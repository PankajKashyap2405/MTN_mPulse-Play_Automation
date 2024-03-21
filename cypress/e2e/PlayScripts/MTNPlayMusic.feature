Feature: MTN Play Application - music validaton
    
    Background: 
         Given Navigate to Paly Application URL

    Scenario: music validation of mtn Play
        
      When Users login to Play Application with username
      Then click on MTN logo
      Then validate music banners
      Then click on music banner and validate
      Then click on MTN logo
      Then click on view all in music and validate 