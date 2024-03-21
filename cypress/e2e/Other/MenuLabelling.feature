Feature:Menu Labelling Validation

    Background:
        Given Navigate to Application URL

    Scenario:Menu Labelling
        Then Validate the Cart Icon
        When User clicks on account
        Then Validate that The description of the account icon shall be displayed as Login