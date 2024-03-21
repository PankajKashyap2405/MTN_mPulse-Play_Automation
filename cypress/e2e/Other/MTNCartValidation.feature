Feature: MTN cart validation
    
    Background: 
         Given Navigate to Application URL

         Scenario: Adding Product to cart
                   When Users login to Application with email
                   When user clicks on profile icon
                   Then click on login button 
                   When user clicks on device button
                   Then validate Product listing page is displayed
                   When user click on select for 5G device
                   Then validate product details page is displayed
                   When user selects the color
                   When user clicks on plus bitton
                   Then user clicks on Add to cart button 
                   Then validate Product added to cart
                   When user clicks on cart icon
                   Then validate user should be in cart page
                   Then validate the product in cart
<<<<<<< HEAD
                   When user clicks on proceed to pay button
                   Then validate Checkout page is displayed
                   When user clicks on Use this address under door delivery
                   When user clicks on shipping method
                   Then click on use this shipping method
                   Then click on continue in contact information
                   Then click on proceed to pay
=======
                   When user clicks on proceed to pay button 
                   Then validate Checkout page is displayed 
                   When user clicks on Use this address under door delivery 
                   When user clicks on shipping method 
                   Then click on use this shipping method 
                   Then click on continue in contact information 
                   Then click on proceed to pay 
                   
>>>>>>> 5da5b53d402c803f049e260edaf9e384aa0bbf9d


                   
                  
