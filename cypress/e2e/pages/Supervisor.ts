import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/Omdollars.json"

export class Supervisor{

    public emailId2:string="input[placeholder='Email Id']"
    public password2:string="input[placeholder='Password']"
    public loginButton2:string="button[type='submit'] div"
    public userIcon2:string = ".col-8.text-end.pr"
    public Supervisor2:string ="mat-sidenav-container[class='mat-drawer-container mat-sidenav-container container-fluid p-0'] p:nth-child(2)"
    public logOut2:string = "li[data-bs-target='#logoutModal'] a[class='dropdown-item']"
    public confirmation2: string  = "#exampleModalLabel > b"
    public yesButton2:string = "#logoutModal > div > div > div.modal-footer > button.btn.btn-primary"
    public LoginLabel2:string = "div[class='col-12'] h1"
    public BidProject2: string ="a[title='Create a bid for an active project or view existing bids']"
    public volunteerpool2:string="a[title='View volunteer detials - to accept or reject a volunteer'] li"
    public viewAction2:string ="tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)"
    public bidderlist2:string=".my-2"
    public projectmange2:string ="a[title='Manage projects and track tasks'] li"
    public viewAction3: string ="tbody tr:nth-child(1) td:nth-child(3) a:nth-child(1)"
    public projectname: string="div[class='col-5 col-md-5'] h1[class='my-2']"
    public reward2:string="th:nth-child(2)"
    public Assignsup:string=".col-5.col-md-5.col-lg-3.ng-star-inserted"
    public Multiselectdropdown:string="ng-multiselect-dropdown > div > div:nth-child(1) > span"
    public RewardHistroy: string="a[title='View rewards spent on a task and project level'] li"
    public Searchbox:string="app-reward-history > div > div.row.my-3.justify-content-between > div > div >input"
    public projectcol:string="body app-root th:nth-child(1)"
    public verifytext:string="tbody tr:nth-child(1) td:nth-child(1)"
    public Dropdowncheckbox:string="ng-multiselect-dropdown > div > div:nth-child(1) > span"
    public searchsup:string="#supervisorModal > div > div > form > div.modal-body > div > div > ng-multiselect-dropdown > div > div.dropdown-list > ul.item1 > li"
    public chkbox:string ="#supervisorModal > div > div > form > div.modal-body > div > div > ng-multiselect-dropdown > div > div.dropdown-list > ul.item2 > li > input[type=checkbox]"
    public Yesbutton:string ="div[id='supervisorModal'] button:nth-child(2)"
    public assignpopup:string="div[aria-label='Assigned Successfully']"
   
    OmdollarsSupervisorLogin(){
        Basepage.enterText(this.emailId2, "pallavi@ekfrazo.in")
        Basepage.enterText(this.password2, "292929")
        Basepage.clickElement(this.loginButton2)

    }
    ValidateSupervisor(){
        expect(Basepage.elementVisibleContainsText(this.Supervisor2, Data.ProjectOwner.Supervisor.Super)).to.be.ok
    }
  
    Onclickbidproject(){
      
        Basepage.clickElement(this.BidProject2)
    }

    OnclickVolunteerpool(){

      Basepage.clickElement(this.volunteerpool2)
    }

    
    Onclickviewaction1(){

        Basepage.clickElement(this.viewAction2)
    }
    validateviewbidderlist(){
        expect(Basepage.elementVisibleContainsText(this.bidderlist2, Data.ProjectOwner.Supervisor.bidder))
    }
    
    onclickProjectmanagment(){
        cy.wait(500)
        Basepage.clickElement(this.projectmange2)
    }
   
    onclickviewaction2(){

        Basepage.clickElement(this.viewAction3)
    }
    
    validateprojectname(){

        expect(Basepage.elementVisibleContainsText(this.projectname, Data.ProjectOwner.Supervisor.pname))

    }
    OnclickRewardedTask(){
        cy.get(this.reward2).click
    }
    OnclickSupervisor(){
       Basepage.clickElement(this.Assignsup)
    }
   Onclickdropdown(){
    cy.get(this.Multiselectdropdown).click({force:true})
   }
  
   Onclicksearchsup(){
    cy.get(this.searchsup).type('{selectall}{backspace}');
    cy.get(this.searchsup).type('Vignesh')
    cy.get(this.searchsup).type('{enter}')
    cy.get(this.chkbox).check({force:true}).should('be.checked')
    cy.get(this.Yesbutton).click()
}
    ValidateSucesspopup(){

        expect(Basepage.elementVisibleContainsText(this.assignpopup, Data.ProjectOwner.Supervisor.Assmessage))
    }
    OnclickRewardHistory(){
      
        Basepage.clickElement(this.RewardHistroy)
    }
   OnclickSearchbox(){
        Basepage.clickElement(this.Searchbox)
        cy.get(this.Searchbox).click({force:true}).type('ABC TEST',{force:true})
      
    }
    Validatesearchvalue(){
          cy.get("tbody[class='ng-star-inserted']").then(()=>{
          cy.get('tr');
          cy.get('td');
          cy.get(this.projectcol).each(($projectNamecoloumn,list) => {
              var projectcol= $projectNamecoloumn.text()
             expect(String(projectcol).match(this.verifytext))
          })
          })
          
         
        }        
   
}
export default new Supervisor();


