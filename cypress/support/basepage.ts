import scenario from "@badeball/cypress-cucumber-preprocessor";


 
 class Basepage {

   
   /***
    * Click Element when text is matched in the page
    */
    static clickElementwithText(element: string, text:string){
        cy.get(element).contains(text).click()
        this.log("Element clicked successfully")
       // this.reloadPage()
        this.wait()
    }

     /***
    * Click Element when text is matched in the page
    */
     static clickWithText(text:string){
      cy.contains(text).click()
      this.log("Element clicked successfully")
     // this.reloadPage()
      this.wait()
  }

   /****
    * Click Element when it's visible only
    */
    static clickElement(element: string){
      cy.get(element).should('be.visible').click()
  }
  /****
    * Click Element when it's hide only
    */
  static clickHiddenElement(element: string){
   cy.get(element).click({force: true})
}
     /****
    * Click Element when it's visible only
    */
     static focusAndClickElement(element: string){
      cy.get(element).focus()
      cy.get(element).should('be.visible').click({force: true})
  }

   /****
    * Click Element when it's visible only
    */
   static clickElementNoWait(element: string){
      cy.get(element).should('be.visible').click({force: true})
  }

  /***
   * Open the Url
   */

    static visit(url: string) {
        cy.visit('/')
        this.wait()
    }

   /***
    * Validate whether element is visible or not
    */
    static elementVisible(element: string){   
      return cy.get(element).should('be.visible');
    }

    /***
    * Validate whether element is visible or not when given text is present in the page
    */
    static elementVisibleContainsText(element: string, text:string){
        return cy.get(element).contains(text).should('be.visible');
     }

   /***
    * Validate whether element is not visible
    */
    static elementNotVisible(element: string){
        return cy.get(element).should('not.visible');
     }
     
   /****
    * Cypress Log
    */
    static log(message :string){
        cy.log(message)
    }

   /***
    * Validate whether element is enable
    */
    static elementEnable(element: string){
        return cy.get(element).should('be.enabled');
     }
     
   /***
    * Validate whether element is enable
    */
   static elementNotEnable(element: string){
      return cy.get(element).should('be.not.enabled');
   }

   /***
    * Validate whether element is not exist
    */
     static elementNotExist(element: string){
        return cy.get(element).should('not.exist');
     }

   /***
    * Validate whether element is Present
    */
     static elementExist(element: string){
        return cy.get(element).should('exist');
     }

   /***
    * Enter text in textbox
    */
     static enterText(element: string, text : string){
         this.wait()
        return cy.get(element).type(text);
     }

   /***
    * Clear the text in the textbox
    */
     static clearText(element: string){
        return cy.get(element).clear({force: true});  
     }

     /***
    * Clear the text and type in the textbox
    */
     static clearAndEnterText (element: string, text : string){
      this.wait()
      return cy.get(element).clear({force:true}).type(text);
   }


   /**
    * Select the drop down by Text
    */
     static selectByText(element: string, text : string){
        return cy.get(element).select(text);
     }

     static selectByTextAndValue(element: string, text: string, value: string){
      return cy.get(element).select(text).should('have.value', value)
     }

     static wait(){
         return cy.wait(1000)
      }

   /**
    * Select the drop down by Value
    */
     static selectByValue(element: string, value : number){
        return cy.get(element).select(value, {force :true});
     }
     static selectByValueItem(element: string,element1: string, value : number){
      cy.get(element).click({force: true})
      //cy.get(element1)
      //.select(value,{force:true})
      cy.get(element1).then(option => {
      cy.wrap(option).contains(3).click({force: true});  
      cy.get(element1).trigger('mouseenter' ,{force: true})
      //option[2].click();
      })
      //cy.get(element1).click({force :true})
   }

   /**
    * Select the drop down by Index
    */
     static selectByIndex(element: string, index : number){
        return cy.get(element).select(index);
     }

   /**
    * check whether text present in the HTML
    */
     static checkTextinHTML(text: string) {
         return cy.contains(text).should('be.visible');
     }

   /***
    * Get and Validate all the table row value
    */
     static validateTableRowValue(tdElement:string, trElement:string, value:string) {
      cy.get(tdElement).each(($e1, index, $list)=>{   
        var storeNumberColumnValue = $e1.text()
         expect(String(storeNumberColumnValue).includes(value)).to.be.ok
         cy.get(trElement).next     
     })
   }
   
   /***
    * Get the Input value
    */
   static getAndValidateInputVal(element: string, compareVal: string) {
      cy.get(element).should(($input) => {
         const val = $input.val()
         expect(val).to.eql(compareVal)
       })
   }

    /***
    * Get the Input value
    */
    static getAndValidateInputText(element: string, compareVal: string) {
      cy.get(element).should(($input) => {
         const val = $input.text()
         expect(val).to.eql(compareVal)
       })
   }

   /***
    * Element display based on text
    */
   static elementDisplayBasedonTxt(element :string, text:string) {
      return cy.get(element).contains(text)
   }

   /**
    * Validate text contains in the element
    */
   static elementTextContains(element:string, text:string) {
      cy.get(element).contains(text)
   }
    
   /**
    * Wait until element load
    */
   static waitUntilElementLoad(element:string) {
      cy.get(element).should('be.visible')
   }

   /**
     * Select the drop down by Value
     */
   static selectDropdownValue(element: string, value : string){
      return cy.get(element).select(value, {force :true});
   }

   /**
    * Validate table row count with showing records Grid count
    * @param eleTable 
    * @param recordCountGridEle 
    */
   static validateTableRowCountWithGridCount(eleTable:string, recordCountGridEle:string) {
      //Getting table row count
         var count = 0
            cy.get(eleTable).find("tr").then(($row) => {
                  count = $row.length
            //Validate row count with record count grid
                  cy.get(recordCountGridEle).contains(count +" records")
            });
   }
   
   /***
   * Get the Input Text
   */
   static getAndValidateInputTextContains(element: string, compareVal: string) {
      cy.get(element).should(($input) => {
         const val = $input.text()
         expect(val).to.contains(compareVal)
      })
   }
   
   /* selectSpecificRediobutton
   */
   static selectSpecificRediobutton(element: string,value:string){
      return cy.get(element).check(value)
   }
    /* deSelectSpecificRediobutton
   */
   static deSelectSpecificRediobutton(element: string,value:string){
      return cy.get(element).uncheck(value)
   }
   /* selectRediobutton
   */
   static selectRediobutton(element: string){
      return cy.get(element).check()
   }

    /* deSelectRediobutton
   */
   static deSelectRediobutton(element: string){
      return cy.get(element).uncheck()
   }

   /* selectSpecificCheckbox
   */
   static selectSpecificCheckbox(element: string,value:string){
      return cy.get(element).select(value)
   }

   /* selectCheckbox
   */
   static selectCheckbox(element: string){
      return cy.get(element).check()
   }
    /* unCheckCheckbox
    */
   static unCheckCheckbox(element: string){
      return cy.get(element).uncheck()
   }

    /* unCheckSpecificCheckbox
    */
   static unCheckSpecificCheckbox(element: string,value:string){
      return cy.get(element).uncheck(value)
   }

   /****
    * check Rediobutton Selected
    */
    static checkRediobuttonSelected(element: string){
      cy.get(element).should('be.selected')
  }
  /****
    * check checkbox Selected
    */
  static checkCheckBoxSelected(element: string){
   cy.get(element).should('be.selected')
}

   /****
    * Click Element when it's visible only
    */
   static clickElementForce(element: string){
      cy.get(element).should('be.visible').click({force:true})
  }
  /*  */
  static clickIFrameElement(element: string, element1: string) {
   cy.frameLoaded(element);
   cy.iframe(element).find(element1).then(function(){
      cy.get(element1).click({ force: true })
   })
}
static checkIFrameElement(element: string, element1: string) {
   cy.frameLoaded(element);
   cy.iframe(element).find(element1).then(function(){
      cy.get(element1).should('be.visible')
   })
}
}
export {Basepage}