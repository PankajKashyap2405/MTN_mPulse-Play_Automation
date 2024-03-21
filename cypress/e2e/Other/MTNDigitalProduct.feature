Feature: MTN digital product Validation
    
    Background: 
         Given Navigate to Application URL    
        
    Scenario: Adding Digital Product to cart
         When Users login to Application with email
         When user click on the data tab 
         Then validate Products listing page is displayed 
         When user click on select for 50Mb we chat plan 
         Then validate 50MB wechat plan product page is displayed 
         When user clicks on Mobile number button
         Then validate Mobile number field is displayed 
         When user enters mobile number in field
         Then Validate eligibility message is displayed  
         When user click on buy now button
         Then Validate user checkout page is displayed
         Then validate payment gateway is displayed 
          
          
         
        