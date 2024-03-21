import { Basepage } from "../../support/basepage";
import { recurse } from "cypress-recurse";
import testdataSSP from "../../fixtures/self_service.json";
import { basePlacements } from "@popperjs/core";

export class SSP_BulkSMSCorpPage {
//Page elements
public myServices: string = "div[class='p-6'] ul li:nth-child(1) a"
public smsTab: string = "div[class='flex space-x-6'] button:first-child"
public ussdTab: string = "div[class='flex space-x-6'] button:last-child"
public productDropdown: string = "div[class='max-w-[325px]'] div[class='relative mt-1'] button"
//public productDropdownUSSD: string = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > section:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > button:nth-child(1)"
public smsOpendingBalance: string = "div[class='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 my-4'] > div:nth-child(2) > span[class='block font-[500] text-md text-black']"
public ussdChargingBalance: string = "div[class='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-center gap-3 pt-8'] div:first-child span[class='block font-[500] text-[15px] text-black']"
public RateCard: string = "div[class='p-6 mb-7 sm:mb-0 rounded-2xl bg-white shadow-lg']"
public buyRateCard: string = "a[class='bg-[#FFCB05] py-2 rounded-full px-10 text-[16px] text-black ']"
public volumeRateCard: string = "div[class='p-6 mb-7 sm:mb-0 rounded-2xl bg-white shadow-lg'] div:nth-child(2   ) div:nth-child(1) h5"
public priceRateCard: string = "div[class='p-6 mb-7 sm:mb-0 rounded-2xl bg-white shadow-lg'] div:nth-child(3) div:nth-child(1) h5"
public subTotal: string = "div[class='flex flex-col space-y-3 pt-8 px-4 border-b border-b-black border-opacity-20 pb-4'] > div:nth-child(2) span:nth-child(2)"
public total: string = "div[class='flex justify-between space-x-8 px-4 pt-2'] span[class='text-black font-bold']"
public vat: string = "div[class='flex justify-between space-x-8']:nth-child(3) > span:nth-child(1)"
public wht: string = "div[class='flex justify-between space-x-8']:nth-child(4) > span:nth-child(1)"
public vatAmount: string = "div[class='flex justify-between space-x-8']:nth-child(3) > span:nth-child(2)"
public whtAmount: string = "div[class='flex justify-between space-x-8']:nth-child(4) > span:nth-child(2)"
public debitCardOption: string = "body > app-root:nth-child(1) > app-root:nth-child(2) > app-payment-gateway:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-pg-home:nth-child(1) > mat-card:nth-child(1) > mat-card-content:nth-child(1) > mat-list:nth-child(1) > div:nth-child(2) > mat-list-item:nth-child(1)"
//receipt-content
public transactionID: string =  "body > app-root:nth-child(1) > app-root:nth-child(2) > app-payment-gateway:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > app-pg-success:nth-child(2) > mat-card:nth-child(1) > mat-card-content:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h2:nth-child(2)"
public successMsg:string = "div[class='w-full py-4 px-8'] div:nth-child(2) div:nth-child(2) p:nth-child(1)"
public receiptAmount:string = "div[class='flex items-end pb-1'] b"
public serviceAccount:string = "div[class='flex items-center justify-between py-6']:nth-child(4) p:nth-child(2)"
public backToHome: string = "div[class='text-center mt-5 text-[#29668B] underline'] a"
public history: string = "a[href='/account/history']"
public transactionTab: string = "div[class='flex space-x-6'] button:nth-child(2)"
public smsButton: string = "input[value='sms']"
public ussdButton: string = "input[value='ussd']"
public historyDropdown: string = "div[class='relative mt-1'] button"
public transactionIdColumn: string = "table[class='min-w-full mt-7'] td:nth-child(2)"
public statusHistory: string = "table[class='min-w-full mt-7'] td:nth-child(5) span"
public startCalendar: string = "div[class='relative z-10 mb-5 w-full'] label[for='supportExpiry']+div"
public startDate1: string = "label[for='supportExpiry']+div button:nth-child(5)"
public endCalendar: string = "div[class='relative z-10 mb-5 w-full']:nth-child(2) input"
public endDate: string = "div[class='relative z-10 mb-5 w-full']:nth-child(2) button[class='flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 text-yellow-500']"
public searchBarHistory: string = "div[class='hidden md:block border-black border border-opacity-10 rounded-md p-3 undefined'] div[class='relative'] input"
//global variables
public subtotalAmount_Checkoutpage: any
public totalCalCheckoutAmount: any
public carryProductOfprice_volume: any
public totalAmount_Checkoutpage: any
public openingBalance1:any
public ussd_ChargingBalance1:any
public volume: any
public genratedTransactionID: any
//----------------------------------------------------------------SMS
selectSMSproduct(){
    cy.get(this.myServices).click()
    cy.get(this.productDropdown).click({force:true})
    cy.contains(testdataSSP.BulkSMScorporate.SMS.smsProduct1).click()
    cy.wait(5000)
    cy.get(this.smsTab).scrollIntoView()
 
}
captureOpeningSMSBalance(){
    //let openingBalance1:number
    cy.get(this.smsOpendingBalance, {timeout: 5000}).then(($element) => {
    let openingBalance = $element.text()
        this.openingBalance1 = Number(openingBalance)
        }).then(() => {
        cy.log("Opening Balance ", this.openingBalance1)
        console.log("opening balance ", this.openingBalance1)
        })
    }

selectUSSDproduct(){
        //Basepage.selectByText(this.productDropdown, 'BulkSpTest')
        cy.get(this.myServices).click()
        cy.wait(1000)
        cy.get(this.ussdTab).click()
        cy.wait(1000)
        cy.get(this.productDropdown).click({force:true})
        cy.contains(testdataSSP.BulkSMScorporate.USSD.ussdProduct1).click()
        cy.wait(5000)
        cy.get(this.ussdTab).scrollIntoView()
    }
public newUssd_ChargingBalance: any
captureOpeningUSSDBalance(){
        cy.get(this.ussdChargingBalance).then(($element) => {
        let ussd_ChargingBalanceSt = $element.text().split(" ")[2].trim()
        this.ussd_ChargingBalance1 = Number(+ussd_ChargingBalanceSt.replace(',', ''))  //remove comma ,
        this.ussd_ChargingBalance1 = this.ussd_ChargingBalance1
            }).then(() => {
                cy.log("USSD charging Balance ", this.ussd_ChargingBalance1)
                console.log("USSD charging Balance ", this.ussd_ChargingBalance1)
                
            })
    }

captureRateCardDetails(){
    //let volume: number
    cy.get(this.volumeRateCard).then(($element) =>{
    let volume1 = $element.text()
        this.volume = Number(volume1)
        }).then(() => {
        cy.log("Volume", this.volume)
        console.log("volume : ",this.volume)
        })

    let price: number
    cy.get(this.priceRateCard).then(($element) =>{
    let price1 = $element.text().split('/')[0].split('₦')[1].trim()
        price = Number(price1)
        }).then(() => {
        cy.log("Price", price)
        cy.log(typeof(price))
        console.log("Price: ",price)
        //carry amount
        this.carryProductOfprice_volume = price*this.volume
        cy.log("Page CarryAmount ",this.carryProductOfprice_volume)
        })
    }
selectToBuyRateCard(){
    cy.get(this.RateCard).contains('Buy').click()
}

//purchase product

validateCarryProductAmount_checkoutAmount(){
    cy.wait(8000)
    let subvalue=""
    cy.get(this.subTotal).then(($element) =>{
        let subtotalString = $element.text().split('₦')[1].trim()
        let subtotalArray = subtotalString.split(",")
        for (let i = 0; i <subtotalArray.length; i++) 
            {
              cy.log(subtotalArray[i])
              subvalue = subvalue+subtotalArray[i]
            }
        this.subtotalAmount_Checkoutpage = Number(subvalue)
        cy.log("Subtotal ", this.subtotalAmount_Checkoutpage)
        console.log("Subtotal ", this.subtotalAmount_Checkoutpage)
        expect(this.subtotalAmount_Checkoutpage).to.equal(this.carryProductOfprice_volume)
    })
}
validatecheckoutAmountwithTax(){
    //VAT
    let vatAmountNum: number
    let expectedVatAmount: number
    cy.get(this.vat).then(($element) =>{
        let vatString = $element.text().split('(')[1].split(')')[0].split('%')[0]  //VAT (7.5%)
        let vatRate = Number(vatString) //7.5split(')')[0]
        cy.log("VAT Rate ", vatRate, "%")
        expectedVatAmount = vatRate*this.subtotalAmount_Checkoutpage/100
        cy.log("Expected VAT Amount ", expectedVatAmount)
    })
    cy.get(this.vatAmount).then(($element) =>{
        let vatAmountString = $element.text().split('₦')[1]  //(+) ₦15
        vatAmountNum = Number(vatAmountString) //15
        cy.log("VAT Amount on checkout ", vatAmountNum)
        expect(expectedVatAmount).to.equal(vatAmountNum)
    })
    //WHT
    let whtAmountNum: number
    let expectedWHTAmount: number
    let expectedTotal: number
    cy.get(this.wht).then(($element) =>{
        let whtString = $element.text().split('(')[1].split(')')[0].split('%')[0]  //WHT (5.22%)
        let whtRate = Number(whtString) //5.22
        cy.log("WHT Rate ", whtRate, "%")
        expectedWHTAmount = whtRate*this.subtotalAmount_Checkoutpage/100
        cy.log("Expected WHT Amount ", expectedWHTAmount)
    })
    cy.get(this.whtAmount).then(($element) =>{
        let whtAmountString = $element.text().split('₦')[1]  //(-) ₦10.44
        whtAmountNum = Number(whtAmountString) //10.44
        cy.log("WHT Amount on checkout", whtAmountNum)
        expect(expectedWHTAmount).to.equal(whtAmountNum)
    }).then(() => {
    //calculate total with applied tax
        expectedTotal = this.subtotalAmount_Checkoutpage+vatAmountNum-whtAmountNum
        cy.log("expectedTotal ", expectedTotal)
    })
    //cature and compare the total amount
    let totalvalue=""
    cy.get(this.total).then(($element) =>{
        let totalString = $element.text().split('₦')[1].trim()
        let totalArray = totalString.split(",")
        for (let i = 0; i <totalArray.length; i++) 
        {
            cy.log(totalArray[i])
            totalvalue = totalvalue+totalArray[i]
        }
        this.totalAmount_Checkoutpage = Number(totalvalue)
        console.log("total on checkout ", this.totalAmount_Checkoutpage)
        expect(expectedTotal).to.equal(this.totalAmount_Checkoutpage)
    })

}

payCheckoutAmount(){
    cy.contains('Pay now').click()
}

selectPaymentOption(){
    cy.get(this.debitCardOption).click({force:true})
}

 //Payment getway set on commonPage

validateReceiptDetailsforSMS()
{
    expect(Basepage.elementVisibleContainsText(this.successMsg, testdataSSP.ReceiptDetails.successMessage))
    expect(Basepage.elementVisibleContainsText(this.receiptAmount, String(this.totalAmount_Checkoutpage)))
    expect(Basepage.elementVisibleContainsText(this.serviceAccount, testdataSSP.BulkSMScorporate.SMS.smsProduct1))
    cy.wait(3000)
    cy.get(this.backToHome).click()
}
validateReceiptDetailsforUSSD()
{
    expect(Basepage.elementVisibleContainsText(this.successMsg, testdataSSP.ReceiptDetails.successMessage))
    expect(Basepage.elementVisibleContainsText(this.receiptAmount, String(this.totalAmount_Checkoutpage)))
    expect(Basepage.elementVisibleContainsText(this.serviceAccount, testdataSSP.BulkSMScorporate.USSD.ussdProduct1))
    cy.wait(3000)
    cy.get(this.backToHome).click()
    
}

captureTransactionID(){
    cy.wait(1000)
    cy.get(this.transactionID).then(($element)=>{
        this.genratedTransactionID = $element.text().trim()
    cy.log("Transaction ID:", this.genratedTransactionID)
    })
}
gotoHistoryforTransactionID(){
    cy.wait(2000)
    cy.get(this.history).click()
    cy.wait(2000)
    cy.get(this.transactionTab).click() 
    cy.wait(1000)
}
validateTransactionIDwithHistroyforSMS(){
    cy.get(this.smsButton).check({force:true})
    cy.get(this.ussdButton).check({force:true})
    cy.get(this.smsButton).check({force:true})
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.historyDropdown).click({force:true})
    cy.contains(testdataSSP.BulkSMScorporate.SMS.smsProduct1).click()
    cy.wait(1000) 
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.startCalendar).click()
    cy.get(this.startDate1).click()
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.endCalendar).click()
    cy.get(this.endDate).click()
        cy.get(this.transactionTab).scrollIntoView
    cy.contains('View details').click()
    cy.get(this.searchBarHistory).type(this.genratedTransactionID)
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.transactionIdColumn).then(($element)=>{
        const transactionIdinHistory = $element.text().trim()
        cy.log('column id', transactionIdinHistory)
        expect(this.genratedTransactionID).to.equal(transactionIdinHistory)
    })
    cy.get(this.transactionTab).scrollIntoView
 
}
public status:any
validateTransactionIDwithHistroyforUSSD(){
    
    cy.get(this.ussdButton).check({force:true})
    cy.get(this.smsButton).check({force:true})
    cy.get(this.ussdButton).check({force:true}) //clicking isssue

        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.historyDropdown).click({force:true})
    cy.contains(testdataSSP.BulkSMScorporate.USSD.ussdProduct1).click()
    cy.wait(1000) 
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.startCalendar).click()
    cy.get(this.startDate1).click()
        cy.get(this.transactionTab).scrollIntoView
    cy.get(this.endCalendar).click()
    cy.get(this.endDate).click()
        cy.get(this.transactionTab).scrollIntoView
    cy.contains('View details').click()
    cy.get(this.searchBarHistory).type(this.genratedTransactionID)
        cy.get(this.transactionTab).scrollIntoView
    
    cy.get(this.transactionIdColumn).then(($element)=>{
        const transactionIdinHistory = $element.text().trim()
        cy.log('column id', transactionIdinHistory)
        expect(this.genratedTransactionID).to.equal(transactionIdinHistory)
    })
    cy.get(this.transactionTab).scrollIntoView
    //status
    
    cy.get(this.statusHistory).then(($element)=>{
        status = $element.text().trim()
        cy.log('Status:', status)
    })
    
 
}

validateTransactionIDwithHistroyforUSSD_hardcoded()
{
    //cy.get(this.smsButton).check({force:true})
    cy.get(this.ussdButton).check({force:true})
    cy.get(this.smsButton).check({force:true}) 
    cy.get(this.ussdButton).click({force:true}) //clicking issue

    cy.wait(2000)
    cy.get(this.historyDropdown).click({force:true})
    cy.contains(testdataSSP.BulkSMScorporate.USSD.ussdProduct1).click()
    cy.wait(1000)
    cy.get(this.startCalendar).click()
    cy.get(this.startDate1).click()
    cy.get(this.endCalendar).click()
    cy.get(this.endDate).click()
    cy.contains('View details').click()
    cy.get(this.searchBarHistory).type('396139615231536')
    cy.get(this.transactionIdColumn).then(($element)=>{
        const getID = $element.text().trim()
        cy.log('column id', getID)
        expect('396139615231536').to.equal(getID)
        cy.get(this.transactionTab).scrollIntoView
    })
}


checkUpdatedBalanceAfterBuyforSMS()
{   
    cy.wait(300000) //5 minutes wait for update the balance in dashboard
    this.selectSMSproduct()
    let openingBalance2:number
    cy.get(this.smsOpendingBalance, {timeout: 5000}).then(($element) => {
        let openingBalance = $element.text()
        openingBalance2 = Number(openingBalance)
         }).then(() => {
        cy.log("Opening Balance ", openingBalance2)
        console.log("opening balance ", openingBalance2)

        let updatedSMSBalance = this.openingBalance1 + this.volume
        expect(openingBalance2).to.equal(updatedSMSBalance)
        })
        cy.wait(10000)
}
checkUpdatedBalanceAfterBuyforUSSD()
{
    cy.wait(300000) //5 minutes wait for update the balance in dashboard
    this.selectUSSDproduct()  //calling function again
    let expectedUSSDBalance=0
    let ussd_ChargingBalanceNew:any
    cy.get(this.ussdChargingBalance).then(($element) => {
        let ussd_ChargingBalanceSt = $element.text().split(" ")[2].trim()
            ussd_ChargingBalanceNew = Number(+ussd_ChargingBalanceSt.replace(',', ''))  //remove comma ,
            cy.log('ussd_ChargingBalanceNew', ussd_ChargingBalanceNew)
    }).then(()=>{
        expectedUSSDBalance = expectedUSSDBalance + this.carryProductOfprice_volume + this.ussd_ChargingBalance1
    }).then(()=>{
            expect(expectedUSSDBalance).to.equal(ussd_ChargingBalanceNew)
            cy.wait(10000)
    })

    }
}


export default new SSP_BulkSMSCorpPage();