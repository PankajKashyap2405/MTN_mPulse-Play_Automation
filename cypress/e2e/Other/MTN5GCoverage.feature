Feature:MTN 5G Coverage Validation

        Background:
                Given Navigate to Application URL
                When Users login to Application with email

        Scenario:MTN 5G Coverage
                When User clicks on 5G Broadband Router
                When User click on check your network coverage here
                When User clicks X on the coverage page
                Then validate the 5G Network
