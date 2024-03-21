import { Basepage } from "../../support/basepage";
import { recurse } from "cypress-recurse";
import testdataSSP from "../../fixtures/self_service.json";
import "../../support/commands";
import { basePlacements } from "@popperjs/core";

export class EBpage {
  /**
   * Page Elements
   */
  public status: string =    "p[class='text-sm font-bold text-[#56AC60] inline-flex items-center']";
  public name: string =    "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)";
  public dueBils: string =    "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)";
  public outstandingBilltab: string =    "button[class='md:text-md px-4 py-2 text-sm border-mtn-link text-mtn-link border-b-2 font-medium']";
  public totalOustandAmtgoption1: string =    "div[class='flex items-center justify-center gap-3'] span";
  public totalOustandAmtonCustomLevel: string = "h1[class='text-lg font-medium text-black'] div"
  public invoiceTable: string =    "table[class='w-full divide-y divide-gray-300']>tbody>tr";
  public invoiceColumn: string = "tbody tr td:nth-child(4)";
  public additionalPay: string = ".text-mtn-link.font-medium.cursor-pointer";
  public additionalAmountPlace: string =    "input[placeholder='Enter excess amount ']";
  public additionalAmountMsg: string = ".error-message";
  public confirmPopup: string =    "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1)";
  public mobileNoPopup: string =    "body > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)";
  public enterMobNo: string =    "div[class='mt-5'] input[class='w-full border-0 border-b border-b-black border-opacity-20 px-0 py-1 text-[13px] font-medium text-black md:text-[14px]']";
  public confirmNo: string =    "button[class='rounded-full mt-8 w-[100px] md:w-36 h-[36px] md:h-12 text-black font-semibold text-[15px] md:text-[17px] bg-[#FFCB05]']";
  public closeBtn: string = "img[alt='Close']";
  public billAmount: string =    "div[class='mx-8 my-6 flex flex-col pr-8'] span:nth-child(2) p span"; 
  public additonalAmount: string = "div[class='mx-8 my-6 flex flex-col pr-8'] span:nth-child(3) p span";
  public totalCheckoutAmountforAll: string = "div[class='mx-8 my-6 flex flex-col pr-8'] span:nth-child(4) p span"
  public totalCheckoutAmountforEx: string =    "div[class='mx-8 my-6 flex flex-col pr-8'] span:nth-child(5) p span";
  public payNow: string =    "button[class='font-medium mt-6 !py-3 border-transparent bg-mtn-sunshine text-black border hover:shadow-md inline-flex items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-75 px-8 py-2 shadow-sm']";
  public selectInvoiceOpt: string = "input[value='selected-invoice']";
  public invoiceRow1: string = "tbody tr:nth-child(1)";
  public invoiceRow2: string = "tbody tr:nth-child(2)";
  public invoiceNumberCol: string = "td:nth-child(2)"
  public invoiceAmountCol: string = "td:nth-child(4)"
  public invoiceOutAmtCol: string = "td:nth-child(5)"
  public checkInvoiceBox: string = "input[type='checkbox']";
  public invoiceTxtBox: string = "input[type='text']";
  public checkbox1: string = "tbody tr:nth-child(1) input[type='checkbox']";
  public debitCardOption: string = "body > app-root:nth-child(1) > app-root:nth-child(2) > app-payment-gateway:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > app-pg-home:nth-child(1) > mat-card:nth-child(1) > mat-card-content:nth-child(1) > mat-list:nth-child(1) > div:nth-child(2) > mat-list-item:nth-child(1)"
  public paidExcessAmount: string = "div[class='p-4 shadow-lg md:p-8'] div div:nth-child(4) p"
  public backToHomeWebBills: string = "div[class='flex justify-center py-4'] a"

  //global variables
  public oustandingAmountNum: number = 0
  public totalcheckoutAmountExNum: any
  public totalcheckoutAmountAllNum: any
  /**navigateTo_*/
  validateInvoiceAutopopulateOnTotalOutstadingTab() {
    cy.get(this.outstandingBilltab).scrollIntoView();
    cy.wait(2000);
    let sumOfInvoices = 0
    let invoiceAmountSt: any
    cy.get(this.invoiceColumn).each(function($invoice, index, $listOfinvoice)
          {
            const invoiceText = $invoice.text()       
            invoiceAmountSt = invoiceText.split('₦')[1].trim()
            cy.log(invoiceAmountSt)
            let invoiceArray = Number(+invoiceAmountSt.replace(/,/g, ''))  //remove comma from amount 
            cy.log('invoice without comma' , invoiceArray)
              sumOfInvoices = sumOfInvoices + invoiceArray
              cy.log('sum of invoices', sumOfInvoices)
          })
        //capture total outstading amount
    var value1=""
    let capturedOutStAmt: string
    let capturedOutstandingAmountSt: any
    cy.get(this.totalOustandAmtgoption1).then(($element) => {
      capturedOutStAmt = $element.text()
      capturedOutstandingAmountSt = capturedOutStAmt.split('₦')[1]
      cy.log(capturedOutstandingAmountSt)
      let textNumber1Array = capturedOutstandingAmountSt.split(",")
        for (let i = 0; i <textNumber1Array.length; i++) 
        {
          cy.log(textNumber1Array[i])
          value1 = value1+textNumber1Array[i]
        }
        this.oustandingAmountNum = this.oustandingAmountNum+parseInt(value1)
        cy.log("outstading balance ",this.oustandingAmountNum)
    }).then(()=> {
      //compare autopopulate amount with sum of invoices
      expect(sumOfInvoices).to.equal(this.oustandingAmountNum)
    })
  }
  //Overall Outsating bill pay
  proceedForPayTotalOuststaingAmount(){
    cy.get(this.outstandingBilltab).scrollIntoView();
    cy.contains("Proceed").should("have.text", "Proceed").click();
    }

  enterMobileNo(){
      cy.get(this.mobileNoPopup).find(this.enterMobNo)
        .type(testdataSSP.Billpayment.AcDetailsOf2000008721.mobileNumber);
      cy.get(this.mobileNoPopup).contains("Confirm").should("be.visible").click()
  }
    //checkout amount
  getTotalCheckoutAmount(){
    cy.get(this.totalCheckoutAmountforAll).then(($element) =>{
      const capturedtext2 = $element.text()
      var capturedCheckoutpageAmount = capturedtext2.split("₦")[1]
      this.totalcheckoutAmountAllNum = Number(+capturedCheckoutpageAmount.replace(/,/g, ''))
      cy.log(this.totalcheckoutAmountAllNum)
    }).then(() => {
      expect(this.totalcheckoutAmountAllNum).to.equal(this.oustandingAmountNum)
    })
  }
  validateTotalOuststandingAmountWithTotalCheckoutAmount(){  //compare total outstanding with checkout amount
    expect(this.totalcheckoutAmountAllNum).to.equal(this.oustandingAmountNum)
  }

  payNowforPaymentGateway() {
    cy.wait(1000);
    cy.contains("Pay now").should("be.visible").click();
    //redirect on the payment gateway
  }

  public existingExcessPayment: any
  captureExistingExcessAmount() {
    cy.get(this.paidExcessAmount).then(($element) => {
      const existExcessAmountST = $element.text().split("₦")[1]
      this.existingExcessPayment = Number(+existExcessAmountST.replace(/,/g, ''))
      cy.log('Exisitng Excess Amount', this.existingExcessPayment)
    })
  }
  enterExcessPayment() {
    cy.get(this.additionalPay).should("be.visible").click();
    cy.get(this.additionalAmountPlace).type(testdataSSP.Billpayment.AcDetailsOf2000008721.excessAmount)
    cy.contains("Confirm").should("be.visible").click();
  }
  
//checkoutpage//
  validatecarryExcessAndOutstadingAmount(){

    let sumOfexcessOutstanding: any
    cy.get(this.totalCheckoutAmountforEx).then(($element) =>{
        const capturedtext2 = $element.text()
        var capturedCheckoutpageAmount = capturedtext2.split("₦")[1]
        cy.log(capturedCheckoutpageAmount)
        this.totalcheckoutAmountExNum = Number(+capturedCheckoutpageAmount.replace(/,/g, ''))
        cy.log(this.totalcheckoutAmountExNum)
        //add excess and outstanding amounts
        sumOfexcessOutstanding = this.oustandingAmountNum+parseInt(testdataSSP.Billpayment.AcDetailsOf2000008721.excessAmount)
        cy.log('sum of excess & outstanding', sumOfexcessOutstanding)
      }).then(()=>{
        expect(this.totalcheckoutAmountExNum).to.be.equal(sumOfexcessOutstanding)
      })
  }
  public billAmountNum: any
  getBillAmountonCheckout(){
    //Bill Amount
    cy.get(this.billAmount).then(($element) =>{
        const capturedbilltext2 = $element.text()
        var capturedBillAmount = capturedbilltext2.split("₦")[1]
        this.billAmountNum = Number(+capturedBillAmount.replace(/,/g, '')) 
        cy.log('Bill amount', this.billAmountNum)
      })
    }
    public sumOfexcessOutstandingonCheckout: any
  getAdditionalAmountonCheckout(){
        //additional amount
        let additonalAmountNum: number
        cy.get(this.additonalAmount).then(($element) =>{
          const capturedaddtionaltext2 = $element.text()
          var capturedAdditionalAmountST = capturedaddtionaltext2.split("₦")[1]
          additonalAmountNum = Number(+capturedAdditionalAmountST.replace(/,/g, ''))
          cy.log('additional amount: ' + additonalAmountNum)
          this.sumOfexcessOutstandingonCheckout = this.billAmountNum+additonalAmountNum
        cy.log("sum of excess and outstanding ",this.sumOfexcessOutstandingonCheckout)
      }).then(()=>{
        expect(this.totalcheckoutAmountExNum).to.be.equal(this.sumOfexcessOutstandingonCheckout)
      })
    }

  public selectedTotalOutstanding: any
  public invoiceNumber1: any
  public invoiceAmtBeforePay: any
  selectWholeInvoiceForCustomPayment() {
    cy.get(this.outstandingBilltab).scrollIntoView();
    cy.wait(1000);
    cy.get(this.selectInvoiceOpt).click({ force: true });
    cy.wait(2000);
  
    cy.get(this.invoiceRow2)
      .find(this.checkInvoiceBox)
      .check()
      .should("be.checked");
      //get invoice number
    cy.get(this.invoiceRow2).find(this.invoiceNumberCol).then(($element) => {
        this.invoiceNumber1 = $element.text(); 
    })
      //get invoice amount before payment
    cy.get(this.invoiceRow2).find(this.invoiceOutAmtCol).then(($element) => {
        const invoiceOutAmt = $element.text();
        let invoiceOutAmtST = invoiceOutAmt.split("₦")[1]
        this.invoiceAmtBeforePay = Number(+invoiceOutAmtST.replace(/,/g, ''))  //remove comma from amount ,
        cy.log("Invoice OutAmt",this.invoiceAmtBeforePay)
    })
    cy.get(this.totalOustandAmtonCustomLevel).then(($element) => {
      const totalinvoices = $element.text();
      let totalinvoicesST = totalinvoices.split("₦")[1]
      cy.log(totalinvoicesST);
      this.selectedTotalOutstanding = Number(+totalinvoicesST.replace(/,/g, ''))  //remove comma from amount ,
      cy.log("Selected invoices amount", this.selectedTotalOutstanding)
    })
    cy.contains('Proceed').click()
  }

  public editedTotalOutstanding: any
  public editedInvoiceAmt: any
  editedInvoiceForCustomPayment() {
    cy.get(this.outstandingBilltab).scrollIntoView();
    cy.wait(1000);
    cy.get(this.selectInvoiceOpt).click({ force: true });
    cy.wait(2000);
  
    cy.get(this.invoiceRow2)
      .find(this.checkInvoiceBox)
      .check()
      .should("be.checked");
      //get invoice number
    cy.get(this.invoiceRow2).find(this.invoiceNumberCol).then(($element) => {
        this.invoiceNumber1 = $element.text(); 
    })
    //get invoice amount
    cy.get(this.invoiceRow2).find(this.invoiceOutAmtCol).then(($element) => {
      const invoiceOutAmtST = $element.text();
      let invoiceOutAmt = invoiceOutAmtST.split("₦")[1]
      this.invoiceAmtBeforePay = Number(+invoiceOutAmt.replace(',', ''))  //remove comma from amount ,
      cy.log("invoice amount", this.invoiceAmtBeforePay)
     })
      //edit invoice amount
    cy.get(this.invoiceRow2).find(this.invoiceTxtBox).type(testdataSSP.Billpayment.AcDetailsOf2000008721.editedInvoiceAmount)
    cy.wait(1000);
    let numEditedAmount: any
    cy.get(this.totalOustandAmtonCustomLevel).then(($element) => {
      const totalinvoices = $element.text();
      let totalinvoicesST = totalinvoices.split("₦")[1]
      cy.log(totalinvoicesST);
      this.editedTotalOutstanding = Number(+totalinvoicesST.replace(/,/g, ''))  //remove comma from amount ,
      cy.log("Edited Total amount", this.editedTotalOutstanding)
    }).then(() => {
        expect(this.editedTotalOutstanding).to.equal(parseInt(testdataSSP.Billpayment.AcDetailsOf2000008721.editedInvoiceAmount))
  
    })
    cy.contains('Proceed').click()
  }

  public invoiceNumber2: any
  validateCustomPayementfulfilmentforWholeInvoice(){
    cy.get(this.outstandingBilltab).scrollIntoView();
    cy.get(this.selectInvoiceOpt).click({ force: true });
    cy.wait(1000);
    cy.get(this.invoiceRow2).find(this.checkInvoiceBox).check().should("be.checked");
    //proceed for validate by invoice number//On Full invoice payment, invoice number should be removed from
    cy.get(this.invoiceRow2).find(this.invoiceNumberCol).then(($element) => {
    this.invoiceNumber2 = $element.text();
    expect(this.invoiceNumber1).to.not.equal(this.invoiceNumber2)
    cy.wait(10000)
  })
}

public invoiceAmtAfterPay: any 
validateCustomPayementfulfilmentforEditedInvoice(){
      //get invoice number
      cy.get(this.outstandingBilltab).scrollIntoView();
      cy.get(this.selectInvoiceOpt).click({ force: true });
      cy.wait(1000);
      cy.get(this.invoiceRow2).find(this.checkInvoiceBox).check().should("be.checked");
      //proceed for validate Deducted invoice amount  
      cy.get(this.invoiceRow2).find(this.invoiceOutAmtCol).then(($element) => {
      const getinvoiceAmtAfterPay = $element.text();
      let invoiceAmtAfterPayST = getinvoiceAmtAfterPay.split("₦")[1]
      cy.log(invoiceAmtAfterPayST);
      this.invoiceAmtAfterPay = Number(+invoiceAmtAfterPayST.replace(/,/g, ''))  //remove comma from amount ,
      cy.log("Invoice Amt After pay", this.invoiceAmtAfterPay)
      let amountAfterDeduction =  this.invoiceAmtBeforePay-this.totalcheckoutAmountAllNum
      expect(this.invoiceAmtAfterPay).to.equal(amountAfterDeduction)
      cy.get(this.outstandingBilltab).scrollIntoView();
      cy.wait(10000)
    })
  }

  validateExcessPayementfulfilment(){
    cy.get(this.paidExcessAmount).scrollIntoView();
    cy.wait(1000);
    //proceed for validate Excess Payment
    let CurrentExcessAmt: any
    let totalExcessPaymentMade: any
    cy.get(this.paidExcessAmount).then(($element)=>{
      const capturedCurrentExcessAmt = $element.text()
      let CurrentExcessAmtST = capturedCurrentExcessAmt.split("₦")[1]
      CurrentExcessAmt = Number(+CurrentExcessAmtST.replace(/,/g, ''))
      cy.log('Current Excess:', CurrentExcessAmt)
      totalExcessPaymentMade = this.existingExcessPayment + parseInt(testdataSSP.Billpayment.AcDetailsOf2000008721.excessAmount)
      cy.log('Excess Made:', totalExcessPaymentMade)
    }).then(()=>{
      expect(CurrentExcessAmt).to.be.equal(totalExcessPaymentMade)
    })
    cy.wait(10000)
  }

  validateCompleteOutstandingPayementFulfilment(){
    let exptedTotalOutstandingAmt
    cy.get(this.totalOustandAmtgoption1).then(($element) => {
        exptedTotalOutstandingAmt = $element.text().trim()
      cy.log(exptedTotalOutstandingAmt)
      cy.log("Expected outstading after payment ",exptedTotalOutstandingAmt)
      expect(exptedTotalOutstandingAmt).to.equal('0')
      cy.wait(10000)
    })
  }
  getTotalCheckoutAmountforCustom(){
    cy.get(this.totalCheckoutAmountforAll).then(($element) =>{
      const capturedtext2 = $element.text()
      var capturedCheckoutpageAmount = capturedtext2.split("₦")[1]
      this.totalcheckoutAmountAllNum = Number(+capturedCheckoutpageAmount.replace(/,/g, ''))
      cy.log("Total Amount", this.totalcheckoutAmountAllNum)
    }).then(() => {
      expect(this.totalcheckoutAmountAllNum).to.equal(this.selectedTotalOutstanding)
    })
  }
  getEditedTotalCheckoutAmountforCustom(){
    cy.get(this.totalCheckoutAmountforAll).then(($element) =>{
      const capturedtext2 = $element.text()
      var capturedCheckoutpageAmount = capturedtext2.split("₦")[1]
      this.totalcheckoutAmountAllNum = Number(+capturedCheckoutpageAmount.replace(/,/g, ''))
      cy.log("Total Amount", this.totalcheckoutAmountAllNum)
    }).then(() => {
      expect(this.totalcheckoutAmountAllNum).to.equal(this.editedTotalOutstanding)
    })
  }
 backtoHomeWebBills(){
  cy.wait(3000);
  cy.get(this.backToHomeWebBills).click()
 }

 //Payment getway set on commonPage
}
export default new EBpage();
