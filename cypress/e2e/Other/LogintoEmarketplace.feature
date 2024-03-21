Feature:Login to Emarketplace

Background:
        Given Navigate to Application URL

Scenario:Login page validation  
       
     
      When user click on register link on the login page
      Then click on continue button and validate error message
      When user fill the details and validate password error messages
      When user click on interest terms and submit buttons
      Then validate successful pop up
      When Users login to Application with email
      Then click on account and validate edit
      
