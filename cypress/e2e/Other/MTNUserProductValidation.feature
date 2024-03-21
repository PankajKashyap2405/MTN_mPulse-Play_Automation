Feature:MTN User Product Validation

Background:
        Given Navigate to Application URL
        Given Users login to Application with email

Scenario:Product validate
        When user click on the device button
        Then validate the product listing page is displayed
        When user click on select button
        Then validate the product details page is displayed
        When user click on add to cart button
        Then validate product is validate to cart