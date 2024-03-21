Feature:MTN Customer Billing Address Validation

    Background:
        Given Navigate to Application URL
        And Users login to Application with email

    Scenario:MTN Customer Billing Address
        When User clicks on your account
        When User clicks on manage profile
        When User clicks on manage address
        When User clicks on Billing address
        When User clicks on Add new address
        When User types First Name
        When User types Last Name
        When User types Street Address
        When User select State
        When User select City
        When User types Phone Number
        When User clicks on Add new Button
        When User clicks All section
        Then Validate user address
        When Users click on Edit
        When User types another first Name
        When User clicks on save Button
        Then Validate user can edit Billing address
        When User remove Billing address
        When User clicks on Ok Button
        Then Validate user can delete Billing address





