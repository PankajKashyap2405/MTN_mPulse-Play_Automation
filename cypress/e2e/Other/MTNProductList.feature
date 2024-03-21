Feature:MTN product List Validation

Background:
       Given Navigate to Application URL

Scenario: Validate the product list page
         When user click on data button 
         Then validate the databundle page is displayed
         When user click on whishlist button on product
         Then validate success message with whishlist prodcut name is displayed.
Scenario: Validate the product detail page
         When user clicks on the cloud button in the home page
         Then validate cloud service page is displayed
         


        
