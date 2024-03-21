import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import commonPage from "../../pages/commonPage";
import Demo from "../../pages/Demo";

When("user click and validate device button in home page", () => {
      Demo.clickOnDevicebutton()
   });
Then ("user click on the MTN button in hompage", () =>{
    Demo.clickOnMtnbutton()

   })
    
When("user click and validate Data button in home page", function () {
    return ;
  });



