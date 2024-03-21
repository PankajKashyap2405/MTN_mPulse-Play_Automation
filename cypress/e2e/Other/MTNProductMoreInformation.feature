Feature: MTN Cart Product More Details validation
    
    Background: 
         Given Navigate to Application URL

         Scenario: Validate Product More Details Under Cart
                   When user clicks on device button
                   Then validate Product listing page is displayed
                   When user click on select for 5G device
                   Then validate product details page is displayed 
                   Then user clicks on Add to cart button
                   Then validate Product added to cart
                   When user clicks on cart icon
                   When user click on See more details link
                   Then validate description of the product