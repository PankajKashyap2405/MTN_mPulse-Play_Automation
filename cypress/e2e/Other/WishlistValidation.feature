Feature:Wishlist Validation

    Background:
        Given Navigate to Application URL
        And Users login to Application with email

    Scenario:Wishlist
        When User clicks on DATA button in the homepage
        When User clicks on Wishlist Icon
        When User clicks on your account
        When User clicks on Wishlist
        When User clicks on Add to cart Icon
        When Users click on enter Number
        When User types MSISDN
        Then Validate that item was successfully added to cart

