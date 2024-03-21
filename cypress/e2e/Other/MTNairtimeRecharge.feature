Feature: MTN cart validation
    
    Background: 
         Given Navigate to Application URL
        

         Scenario: Airtime validation
         When user clicks on Recharge tab 
         Then Validate Airtime product listing page is displayed 
         When user clicks on select button
         Then Validate Airtime details page is displayed
         Then Validate Airtime details page
         When Users login to Application with email
         When user clicks on Enter mobile number button
         Then Validate Mobile number field is displayed 
         When user enters mobile number
         Then Validate Congrats message is displayed 
         When user clears the amount and enters another amount in amount field
         When user click on Ok button
         Then Validate Subtotal amount is updated
         When user clicks on Buynow button
         Then Validate shopping cart page is displayed
         Then Validate Billing address section is displayed
         Then Validate Payment method section is displayed