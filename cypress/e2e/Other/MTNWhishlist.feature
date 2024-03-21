Feature:MTN wishlist Validation

 Background:
         Given Navigate to Application URL
        
 Scenario: wishlist validation    
        
        When user click on device button in the home page
        When user click on wishlist button
        When user login to the Application with email
        When user click on wishlist button
        When user click on clickhere button
        When user click on Add to Cart button
        Then validate add to cart pop up
        