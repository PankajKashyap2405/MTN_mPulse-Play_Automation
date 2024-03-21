//import "cypress-real-events/support";
//import { data } from "cypress/types/jquery";

  
  //cy.contains('All Products','Custom').realHover('mouse')
   // .wait(1000)





  const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/

  Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Bootstrap dropdown require Popper.js (https://popper.js.org)')) {
      // ignore the error
      return false   
    }
  });

  Cypress.on('uncaught:exception', (err,runnable) => {
    if (err.message.includes('Cannot read properties of undefined (reading quoteData)')) {
      return false
    }
  });


  