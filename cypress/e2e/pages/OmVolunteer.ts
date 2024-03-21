import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/Omdollars.json"
import commonPage from "./commonPage";

export class OmVolunteer {
        public emailId4:string="input[placeholder='Email Id']"
        public password4:string="input[placeholder='Password']"
        public loginButton4:string="body > app-root:nth-child(1) > app-gateway:nth-child(2) > app-login:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1)"
        public userIcon4:string = "body > app-root > app-project > mat-sidenav-container > mat-sidenav-content > div > mat-toolbar > div > div > div > div > button > div > div.col.text-start.pl-0"
        public volunteer4:string ="mat-sidenav-container[class='mat-drawer-container mat-sidenav-container container-fluid p-0'] p:nth-child(2)"
        public logOut4:string = "li[data-bs-target='#logoutModal'] a[class='dropdown-item']"
        public confirmation4: string  = "#exampleModalLabel > b"
        public yesButton4:string = "#logoutModal > div > div > div.modal-footer > button.btn.btn-primary"
        public LoginLabel4:string = "div[class='col-12'] h1"
        public myprojects:string =".fa.fa-file-edit.fa-xl"
        public searchingproj:string="input[placeholder='Search Project']"
        public projectName:string="td:nth-child(1)"
        public projectview:string="tbody tr:nth-child(2) td:nth-child(4)"
        public searchtask:string="input[placeholder='Search Task']"
        public Createtask:string=".card-btn.btn"
        public taskname:string="input[placeholder='Task Name']"
        public taskdes:string="textarea[placeholder='Description']"
        public startdate:string="#mat-datepicker-4"
        public Details:string="input[placeholder='Details']"
        public submittask:string="div[class='ng-star-inserted']"
        public succesfullmessage:string="div[aria-label='Task Created Successfully']"
        public rewardhistory:string="a[title='View rewards credited'] li"
        public searchreward:string="input[type='Search']"

        OmVolunteerLogin(){
            Basepage.enterText(this.emailId4, "pallavigeeth291998@gmail.com")
            Basepage.enterText(this.password4, "123456")
            cy.get(this.loginButton4).click()
        }
        ValidateVolunteerlogin(){
            expect(Basepage.elementVisibleContainsText(this.volunteer4, Data.ProjectOwner.Supervisor.OmVolunteer)).to.be.ok
            cy.wait(2000)
        }
      
        Onclicksearch(){
            cy.get(this.searchingproj).click
            cy.get(this.searchingproj).type('ABC TEST');
            cy.wait(4000)
            expect(Basepage.elementVisibleContainsText(this.projectName, Data.ProjectOwner.Supervisor.ProjectVname))
       }
       Onclickonmyproject(){
        Basepage.clickElement(this.myprojects)
        cy.wait(3000)
        Basepage.clickElement(this.projectview)
        cy.wait(1000)
        cy.get(this.searchtask).type('task1')
        cy.wait(1000)
        Basepage.clickElement(this.Createtask)
        Basepage.clickElement(this.taskname)
        cy.get(this.taskname).type('AutomationE2E{enter}')
        cy.get(this.taskdes).type('Automation testing is a software testing technique ')
        cy.get("div:nth-child(6) > div > div > mat-datepicker-toggle > button").click()
        cy.contains('26').click()
        cy.get("mat-datepicker-toggle[data-mat-calendar='mat-datepicker-1']").click()
        cy.contains('28').click()
        cy.get(this.Details).type('details')
        cy.get(this.submittask).click()
        cy.wait(3000)
}
    validatetasksuccess(){
      expect(Basepage.elementVisibleContainsText(this.succesfullmessage, Data.ProjectOwner.Supervisor.tasksuccess))
      cy.wait(1000)
    }
    OnclickRewardHistory(){
        cy.get(this.rewardhistory).click()
        cy.wait(1000)

        cy.get(this.searchreward).click().type('Testing dollars',{force:true})
        cy.wait(1000);
        //cy.get('#searchInput').type(searchValue)    

     }
      Validatevolunteer(){
        const searchValue = 'Testing dollars'
        cy.get('body app-root th:nth-child(1)').each(($el) => {
        cy.wrap($el).should('contain.text',searchValue)
          })

      }
        OmLogout(){
            Basepage.clickElement(this.userIcon4)
            Basepage.clickElement(this.logOut4)
            Basepage.clickElement(this.yesButton4)
         
        }
        ValidateScreen(){
            expect(Basepage.elementVisibleContainsText(this.LoginLabel4, Data.ProjectOwner.Supervisor.LoginLabel)).to.be.ok
        }
    }
    export default new OmVolunteer();

