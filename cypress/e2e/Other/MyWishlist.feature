Feature:My Wishlist Validation

    Background:
        Given Navigate to Application URL
        And Users login to Application with email

    Scenario:My Wishlist
        When User clicks on your account
        When User clicks on My Wishlist
        Then Validate the Price
        When User clicks on See more details
        Then Validate the Bundle description
        Then Validate the Data
        Then Validate the Validity of the Bundle
        When User clicks on Add to cart
        When User clicks on enter Number
        When User types phone Number
        When User clicks on Add to cart 1
        When User clicks on cart icon
        Then Validate that the items have been successfully added


