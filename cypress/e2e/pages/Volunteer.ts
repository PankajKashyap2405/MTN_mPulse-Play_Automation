import {Basepage} from "../../support/basepage";
import Data from "../../fixtures/Omdollars.json"


export class Volunteer{
   
    public Registeruser:string ="a[routerlink='../register']"
    public username:string ="input[placeholder='Username']"
    public emailId3:string="input[placeholder='Email Id']"
    public password3:string="input[placeholder='Password']"
    public Registerbutton:string="button[type='submit'] div"
    public Registersucceful:string="div[aria-label='Registration Successfull']"
    public loginButton3:string="button[type='submit'] div"
    public userIcon3:string = ".col-8.text-end.pr"
    public volunteer3:string ="div[aria-label='Login Successfull']"
    public user = Math.random().toString(6).substring(3);
    public email = Math.random().toString(6).substring(3) + "@gmail.com";    

    OmdollarsVolunteerRegister(){
       
        cy.get(this.Registeruser).click({force:true})
        Basepage.enterText(this.username, this.user)
        Basepage.enterText(this.emailId3,  this.email)
        Basepage.enterText(this.password3, "12345")
        cy.get(this.Registerbutton).click({force:true})

       // Basepage.clickElement(this.Registerbutton)
    }
    omdollarsRegistervalidate(){
      expect(Basepage.elementVisibleContainsText(this.Registersucceful, Data.ProjectOwner.Supervisor.succes)).to.be.ok

    }
   
    omdollarsVolunteerLogin(){
       
        Basepage.enterText(this.emailId3, this.email)
        Basepage.enterText(this.password3, "12345")
        Basepage.clickElement(this.loginButton3)
    }
    OmdollarsValidateVolunteer(){
        expect(Basepage.elementVisibleContainsText(this.volunteer3, Data.ProjectOwner.Supervisor.Vol)).to.be.ok
    }
}
export default new Volunteer();