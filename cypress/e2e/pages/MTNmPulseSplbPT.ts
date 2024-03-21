import { Basepage } from "../../support/basepage";
import testdata from "../../fixtures/mpulseSplbPt.json";
import { test } from "mocha";

export class MTNmPulseSplbPT {

    //create locators for elements

    public ClickHereToPerticipate: string = "#participant_btn-round-2 > a > button"
    public SpellingBeePage: string = "#block-selfservice-content > div > div.container.py-2 > div > div.col-lg-6.col-md-6.col-12.text-center > div > h1"
    public playAnnually: string = "#annually"
    public clickPlayAnnually: string ="#annually"
    public spellingBeePopUp1: string ="#bee-quiz-annually > div > div > div.modal-body > div > div > div > div:nth-child(1) > div > div > h5"
    public practiceTest: string ="#bee-quiz-annually > div > div > div.modal-body > div > div > div > div.quiz-btn-margin > div:nth-child(1) > div > a > button"
    public practiceTestButton: string ="#bee-quiz-annually > div > div > div.modal-body > div > div > div > div.quiz-btn-margin > div:nth-child(1) > div > a"
    public practiceTestPage: string ="#testType"
    public ptanswerfield1: string ="#answer"
    public ptNext1: string ="#next-button"
    public finalResult: string ="#block-selfservice-content > div > div.container > div > div:nth-child(5) > div > div > div:nth-child(10) > div.answer-option-box > div.answer-option-box-wrong"

   
   
    //Action methods

    ClickonClickHereToPerticipate () {
     cy.get(this.ClickHereToPerticipate).click();

    }
    
    validateSplbPage() {
      expect(Basepage.elementVisibleContainsText(this.SpellingBeePage,testdata.HomePage.SpellingBeePage.SpellingBeePageHeader)).to.be.ok
    }

    validatesplbbutton1() {
        expect(Basepage.elementVisibleContainsText(this.playAnnually,testdata.HomePage.SpellingBeePage.SpellingBeeButton1)).to.be.ok
    }
    
    clickPlayAnnuallyButton() {
        cy.get(this.clickPlayAnnually).click();
    }

    validateSplbPopUp1() {
        expect(Basepage.elementVisibleContainsText(this.spellingBeePopUp1,testdata.HomePage.SpellingBeePage.SpellingBeePopUp1)).to.be.ok

}
   
    validatePracticeTestButton() {
        expect(Basepage.elementVisibleContainsText(this.practiceTest,testdata.HomePage.SpellingBeePage.SpellingBeeButton1)).to.be.ok
}

    clickonPracticeTestButton() {
        cy.get(this.practiceTestButton).click();
}

    validatePracticeTestPage() {
        expect(Basepage.elementVisibleContainsText(this.practiceTestPage,testdata.HomePage.SpellingBeePage.PracticeTest)).to.be.ok
}
    
    validatePracticeTest() {
        cy.get('#answer').type('a')
        cy.wait(2000)
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('b')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('c')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('d')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('e')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('f')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('g')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('h')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('i')
        cy.get(this.ptNext1).click();
        cy.wait(2000)
        cy.get('#answer').type('j')
        cy.wait(2000)        
        cy.get(this.ptNext1).click();
        
}

    validateFinalResult() {
        cy.wait(5000)
        expect(Basepage.elementVisibleContainsText(this.finalResult,testdata.HomePage.SpellingBeePage.finalResult)).to.be.ok
    }

}
export default new MTNmPulseSplbPT();