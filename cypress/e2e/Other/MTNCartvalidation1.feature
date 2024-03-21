Feature:MTN  Cart Validation

 Background:
        Given Navigate to Application URL

 Scenario:Home page validation 
   Then validate cart icon   
   When click on cart icon
   Then validate cart items
   Then validate link to add items to cart
   Then click on next button
   When click on item
   When click on color and T&C button
   Then validate buy now and click
   Then validate sign in error message
   Then validate quantity
   When click on remove button
   