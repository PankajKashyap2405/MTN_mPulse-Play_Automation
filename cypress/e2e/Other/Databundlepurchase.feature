Feature:MTN  Data bundle purchase Validation

 Background:
        Given Navigate to Application URL

 Scenario:Home page validation    
       
        Then validate device,data,enterprise,cloud,recharge buttons are visible on home page
        When user click on data button 
        Then validate the databundle page is displayed
        Then validate device data price and description
        When click on the select button 
        When user clicks on the enter number
        When enter the wrong mobile number in the number field   
        Then validate wrong number error message  
        When user clicks on the enter number 
        When enter the valid mobile number
        Then validate add to cart 
        Then validate proceed to check out button and click
        Then validate sign in error message
        When click on proceed to pay button
        When Users login to Application with email
        When click on proceed to pay button
        When click on make payment buttton