describe('Subaru Web Aplication', () => {
    context('Capped Price Servicing', () => {
        it('PROD - Forester CPS', () => {
            cy
                .visit('https://www.subaru.com.au/service/capped-price-servicing')

            cy
            //Check Forester Service Plans
                .get(':nth-child(6) > .selected-model > p > span')
                    .click({force: true})

                .get('.capped-pricing-desktop > .row > :nth-child(6)')
                    .should('have.text', 'Forester')
                    .scrollIntoView();

            cy
            //TABLE VALIDATION FOR Forester SP

                //Validate Header
                .get('[style="min-width: 270px;"]')
                .should('have.text', 'Scheduled Service Intervals1')

                .get('thead > .priceTable__tr > :nth-child(2)')
                .should('have.text', 'Forester 2.5i AWD, 2.5i-L AWD, 2.5i-P AWD, 2.5i Sport AWD and 2.5i-S AWD CVT2')

                .get('thead > .priceTable__tr > :nth-child(3)')
                .should('have.text', 'Forester Hybrid L AWD and Forester Hybrid S AWD MHEV2')

            //Validate 1st row
                .get('tbody > :nth-child(1) > :nth-child(1)')
                .should('have.text', '1 Month Health Check and Chat')

                .get('tbody > :nth-child(1) > :nth-child(2)')
                .should('have.text', 'Free')

                .get('tbody > :nth-child(1) > :nth-child(3)')
                .should('have.text', 'Free')

            //Validate 2nd row
                .get('tbody > :nth-child(2) > :nth-child(1)')
                .should('have.text', "'A' Service12,500kms or 12 months")

                .get('tbody > :nth-child(2) > :nth-child(2)')
                .should('have.text', '$370.91')

                .get('tbody > :nth-child(2) > :nth-child(3)')
                .should('have.text', '$374.70')

            //Validate 3rd row
                .get('tbody > :nth-child(3) > :nth-child(1)')
                .should('have.text', "'B' Service25,000kms or 24 months")

                .get('tbody > :nth-child(3) > :nth-child(2)')
                .should('have.text', '$636.98')
                
                .get('tbody > :nth-child(3) > :nth-child(3)')
                .should('have.text', '$640.77')

            //Validate 4th row
                .get('tbody > :nth-child(4) > :nth-child(1)')
                .should('have.text', "'C' Service37,500kms or 36 months")

                .get('tbody > :nth-child(4) > :nth-child(2)')
                .should('have.text', '$379.36') 

                .get('tbody > :nth-child(4) > :nth-child(3)')
                .should('have.text', '$383.15') 
            
        //Validate 5th row
                .get('tbody > :nth-child(5) > :nth-child(1)')
                .should('have.text', "'D' Service50,000kms or 48 months")

                .get('tbody > :nth-child(5) > :nth-child(2)')
                .should('have.text', '$888.62') 
        
                .get('tbody > :nth-child(5) > :nth-child(3)')
                .should('have.text', '$892.42') 
            
            //Validate 6th row
                .get('tbody > :nth-child(6) > :nth-child(1)')
                .should('have.text', "'E' Service62,500kms or 60 months")

                .get('tbody > :nth-child(6) > :nth-child(2)')
                .should('have.text', '$398.77') 

                .get('tbody > :nth-child(6) > :nth-child(3)')
                .should('have.text', '$402.57') 


            //Validate Disclaimer below the table

                .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > :nth-child(1) > p > strong')
                .should('have.text', "The recommended scheduled service interval for 2024 Subaru Forester models is every 12 months or 12,500 kilometres, whichever occurs first.")

                .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > :nth-child(2) > sup')
                .should('have.text', "The first five (5) standard scheduled services are covered under the Subaru 5 year/62,500 Kilometre Capped Price Servicing Program (not counting the 1 Month Health Check and Chat). No claims are permitted beyond 63 months or 65,500 kilometres (whichever occurs first). 2. Prices include GST. Actual prices may vary from retailer to retailer, but rest assured the Capped Price applicable to your vehicle is the maximum that you will pay for your scheduled service during the Program period. For an exact quote on your scheduled service, contact your local participating authorised Subaru Service Centre. Available at participating Subaru Retailers only and does not apply to rental and some other classes of vehicle. For full terms and conditions, please see the links below.") 
                


                })

            })
        })