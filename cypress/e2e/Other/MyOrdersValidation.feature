Feature:My orders validation

Background:
        Given Navigate to Application URL

    Scenario:validation of canceled orders
         When user clicks on account dropdown
         Then validate your account text should be displayed
         Then click on orders
         Then validate the my orders page 
         Then click on cancelled orders 
         Then validate the cancelled text