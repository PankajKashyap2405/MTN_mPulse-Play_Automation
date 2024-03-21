import {Basepage} from "../../support/basepage";
import { recurse } from "cypress-recurse";
import testdataSSP from "../../fixtures/self_service.json";
import '../../support/commands';
import { basePlacements } from "@popperjs/core";


export class self_servicePage{
/**
 * Page Elements
 */
   public footer :string = "div[class='hidden grid-cols-2 text-left md:grid lg:mb-0 lg:grid-cols-6 lg:text-left']"
   public breadcrumbContactus :string = "a[class='flex items-center text-sm font-normal text-[#000]']"
   public mailIcon :string = "img[alt='Mail']"
   public mailHeading :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(1) div h4"
   public mailParagraph :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(1) div p"
   public mailAnchorText :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(1) div a"
   public locationIcon :string = "img[alt='Location']"
   public locationHeading :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(2) div h4"
   public locationParagraph :string = "span[class='text-[14px] md:text-[15px] block font-normal text-[#29668B]']"
   public locationAnchorText :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(2) > span:nth-child(2)"
   public phoneIcon :string = "img[alt='Phone']"
   public phoneHeading :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(3) h4"
   public phoneCall300 :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(3) p a:nth-child(1)"
   public phoneCall080310300 :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(3) p a:nth-child(3)"
   public phoneTextdescription :string = "div[class='relative mt-3 basis-[35%] rounded-lg bg-[#FFFAE0] p-4 md:mt-[30px] md:p-16'] div:nth-child(3) p"
   public h4_mainTitle:string = "div[class='mt-[30px] basis-[60%]'] h4"
   public h3_mainTitle:string = "div[class='mt-[30px] basis-[60%]'] h3"
   public subTitle:string = "div[class='mt-[30px] basis-[60%]'] p"
   public firstName: string = "div[class='block flex-row items-center justify-between md:flex'] div:nth-child(1) label"
   public firstnamePlaceholder: string = "input[name='first_name']"
   public lastName: string = "div[class='block flex-row items-center justify-between md:flex'] div:nth-child(2) label"
   public lastnamePlaceholder: string = "input[name='last_name']"
   public phoneNumberLable: string = "div[class='flex flex-row items-center justify-between'] div:nth-child(1) label"
   public phoneNumberPlaceholder: string = "input[name='phone_no']"
   public emailLabel: string = "div[class='flex flex-row items-center justify-between'] div:nth-child(2) label"
   public emailPlaceholder: string = "input[name='email']"
   public subjectLable: string = "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > label:nth-child(1)"
   public subjectPlaceholder: string = "input[name='subject']"
   public msgnote: string = "div[class='mt-5'] label:nth-child(1)"
   public msgBox: string = "textarea[placeholder='Type your text here..']"
   public submitButton: string = "button[type='submit']"
   public notification: string = "div[class='notification-container']"
   public noficationError: string = "div[class='notification notification-error notification-enter-done']"
   public notificationSuccess: string = "div[class='notification notification-success notification-enter-done']"
   public notificationTitle: string = ".title"
    
    /**navigateTo_*/
    clickOnFooterlinkofContactUs()
    {
      cy.get(this.footer).contains('Contact us').click({force:true}).should('have.attr', 'href')
      cy.wait(2000)
    }

    validateContactUspageURL()
    {
      cy.url().should('include', '/contact-us')
      cy.get(this.breadcrumbContactus).should('have.attr', 'href').and('include', 'contact-us')
      cy.wait(1000)
    }

    validateContactIcons()
    {
      //validate icons
      cy.get(this.mailIcon).should('have.attr', 'src')
      //cy.get(this.mailIcon).should('have.css', 'width', '16px').and('have.css','height', '13px')
      cy.get(this.locationIcon).should('have.attr', 'src')
      cy.get(this.phoneIcon).should('have.attr', 'src')
    }
    validateContactEmailDetails()
    {
      expect(Basepage.elementVisibleContainsText(this.mailHeading, testdataSSP.ContactUsPage.ContactDetails.mail_heading))
      expect(Basepage.elementVisibleContainsText(this.mailParagraph, testdataSSP.ContactUsPage.ContactDetails.mail_paragraph))
      cy.get(this.mailAnchorText).should('have.attr', 'href').and('include', testdataSSP.ContactUsPage.ContactDetails.mail_anchorText)
    }
    validateContactAddressDetails()
    {
      expect(Basepage.elementVisibleContainsText(this.locationHeading, testdataSSP.ContactUsPage.ContactDetails.location_heading))
      //expect(Basepage.elementVisibleContainsText(this.locationParagraph, testdataSSP.ContactUsPage.ContactDetails.location_paragraph))
      expect(Basepage.elementVisibleContainsText(this.locationAnchorText, testdataSSP.ContactUsPage.ContactDetails.location_anchorText))
    }
    validateContactNumberDetails()
    {
      expect(Basepage.elementVisibleContainsText(this.phoneHeading, testdataSSP.ContactUsPage.ContactDetails.phone_heading))
      //expect(Basepage.elementVisibleContainsText(this.phoneCall300, testdataSSP.ContactUsPage.ContactDetails.phone_No300))
      cy.get(this.phoneCall300).should('have.attr', 'href').and('include', testdataSSP.ContactUsPage.ContactDetails.phone_tel300)
      //expect(Basepage.elementVisibleContainsText(this.phoneCall080310300, testdataSSP.ContactUsPage.ContactDetails.phone_No080310300))
      cy.get(this.phoneCall080310300).should('have.attr', 'href').and('include', testdataSSP.ContactUsPage.ContactDetails.phone_tel080310300)
      expect(Basepage.elementVisibleContainsText(this.phoneTextdescription, testdataSSP.ContactUsPage.ContactDetails.phone_paragraphText))
    }
    validatePageHeadings()
    {
      expect(Basepage.elementVisibleContainsText(this.h4_mainTitle, testdataSSP.ContactUsPage.ContactDetails.h4_heading))
      expect(Basepage.elementVisibleContainsText(this.h3_mainTitle, testdataSSP.ContactUsPage.ContactDetails.h3_heading))
      expect(Basepage.elementVisibleContainsText(this.subTitle, testdataSSP.ContactUsPage.ContactDetails.sub_heading))
      cy.wait(1000)
    }
    enterAndValidateFormDetails()
    {
      expect(Basepage.elementVisibleContainsText(this.firstName, testdataSSP.ContactUsPage.ContactDetails.first_name))
      Basepage.enterText(this.firstnamePlaceholder, testdataSSP.ContactUsPage.ContactDetails.placeholder_fname)
      expect(Basepage.elementVisibleContainsText(this.lastName, testdataSSP.ContactUsPage.ContactDetails.last_name))
      Basepage.enterText(this.lastnamePlaceholder, testdataSSP.ContactUsPage.ContactDetails.placeholder_lname)
      expect(Basepage.elementVisibleContainsText(this.phoneNumberLable, testdataSSP.ContactUsPage.ContactDetails.phone_noText))
      Basepage.enterText(this.phoneNumberPlaceholder, testdataSSP.ContactUsPage.ContactDetails.placeholder_phoneNo) //.should('have.length', '11')
      expect(Basepage.elementVisibleContainsText(this.emailLabel, testdataSSP.ContactUsPage.ContactDetails.emailText))
      Basepage.enterText(this.emailPlaceholder, testdataSSP.ContactUsPage.ContactDetails.placeholder_email) //.should('contain.text', '@')
      expect(Basepage.elementVisibleContainsText(this.subjectLable, testdataSSP.ContactUsPage.ContactDetails.subject))
      Basepage.enterText(this.subjectPlaceholder, testdataSSP.ContactUsPage.ContactDetails.subjectText)  //subjectText
      expect(Basepage.elementVisibleContainsText(this.msgnote, testdataSSP.ContactUsPage.ContactDetails.message_note))
      cy.get(this.msgBox).should('have.attr', 'placeholder').and('include', testdataSSP.ContactUsPage.ContactDetails.message_placeholderText)
      Basepage.enterText(this.msgBox, testdataSSP.ContactUsPage.ContactDetails.message_boxTypeText)
      //repeat mob
      Basepage.enterText(this.phoneNumberPlaceholder, testdataSSP.ContactUsPage.ContactDetails.placeholder_phoneNo) //repeat mob no
    }
    submitForm()
    {
      cy.get(this.submitButton, {timeout:100}).should('be.visible').click({force: true})
    }

    validateSucessful_Submittion_of_Form()
    {
      // cy.on('window:alert', (txtmsg) =>
      // {
      //   expect(txtmsg).to.equal('Your request has been send successfully.') 
      // })
      expect(Basepage.elementTextContains('.message', 'Your request has been send successfully.'))
      expect(Basepage.elementTextContains(this.notificationTitle, testdataSSP.ContactUsPage.ContactDetails.Success))
    }
  
}


export default new self_servicePage();

