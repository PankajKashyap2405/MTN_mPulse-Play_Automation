Feature: MTN BBC
    
    Background: 
          Given Navigate to Paly Application URL
         
    Scenario: BBC News Validation
        When Users login to Play Application with username
        Then Validate User login Success
        Then User view BBC News podcast service landing page
        Then User view BBC Live the Story service landing page