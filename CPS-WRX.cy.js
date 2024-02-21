describe('Subaru Web Aplication', () => {
    context('Capped Price Servicing', () => {
        it('STG - WRX SP', () => {
            cy
                .visit('https://www.subaru.com.au/service/capped-price-servicing')

            cy
            //Check WRX Service Plans
                .get(':nth-child(2) > .selected-model > p > span')
                    .click({force: true})

                .get('.capped-pricing-desktop > .row > :nth-child(2)')
                    .should('have.text', 'WRX')
                    .scrollIntoView();

            cy

            //TABLE VALIDATION FOR wRX SP

                //Validate Header
                    .get('[style="min-width: 270px;"]')
                    .should('have.text', 'Scheduled Service Intervals1')

                    .get('thead > .priceTable__tr > :nth-child(2)')
                    .should('have.text', 'WRX AWD and WRX AWD RS Manual2')

                    .get('thead > .priceTable__tr > :nth-child(3)')
                    .should('have.text', 'WRX AWD, WRX AWD RS, WRX AWD tS, WRX Sportswagon AWD, WRX Sportswagon AWD GT and WRX Sportswagon AWD tS Sport Lineartronic2')

                //Validate 1st row
                    .get('tbody > :nth-child(1) > :nth-child(1)')
                    .should('have.text', '1 Month Health Check and Chat')

                    .get('tbody > :nth-child(1) > :nth-child(2)')
                    .should('have.text', 'Free')

                    .get('tbody > :nth-child(1) > :nth-child(3)')
                    .should('have.text', 'Free')

                //Validate 2nd row
                    .get('tbody > :nth-child(2) > :nth-child(1)')
                    .should('have.text', "'A' Service15,000kms or 12 months")

                    .get('tbody > :nth-child(2) > :nth-child(2)')
                    .should('have.text', '$378.33')

                    .get('tbody > :nth-child(2) > :nth-child(2)')
                    .should('have.text', '$378.33')

                //Validate 3rd row
                    .get('tbody > :nth-child(3) > :nth-child(1)')
                    .should('have.text', "'B' Service30,000kms or 24 months")

                    .get('tbody > :nth-child(3) > :nth-child(2)')
                    .should('have.text', '$517.96')
                    
                    .get('tbody > :nth-child(3) > :nth-child(3)')
                    .should('have.text', '$517.96')

                //Validate 4th row
                    .get('tbody > :nth-child(4) > :nth-child(1)')
                    .should('have.text', "'C' Service45,000kms or 36 months")

                    .get('tbody > :nth-child(4) > :nth-child(2)')
                    .should('have.text', '$453.19') 

                    .get('tbody > :nth-child(4) > :nth-child(3)')
                    .should('have.text', '$453.19') 

                
            //Validate 5th row
                    .get('tbody > :nth-child(5) > :nth-child(1)')
                    .should('have.text', "'D' Service60,000kms or 48 months")

                    .get('tbody > :nth-child(5) > :nth-child(2)')
                    .should('have.text', '$859.13') 
            
                    .get('tbody > :nth-child(5) > :nth-child(3)')
                    .should('have.text', '$792.10') 
                
             //Validate 6th row
                    .get('tbody > :nth-child(6) > :nth-child(1)')
                    .should('have.text', "'E' Service75,000kms or 60 months")

                    .get('tbody > :nth-child(6) > :nth-child(2)')
                    .should('have.text', '$394.78') 

                    .get('tbody > :nth-child(6) > :nth-child(3)')
                    .should('have.text', '$394.78') 



                //Validate Disclaimer below the table

                    .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > p > strong')
                    .should('have.text', "The recommended scheduled service interval for 2023 Subaru WRX models is every 12 months or 15,000 kilometres, whichever occurs first.")

                //Needs updating
                    // .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > div > sup')
                    // .should('have.text', "The above quoted Capped Price Servicing prices are applicable to Model Year 2023 Subaru WRX models. Our Capped Price Servicing prices include GST and represent the locked in maximum price for the first 5 years or 75,000 kilometres travelled, whichever occurs first. 1. The first five (5) standard scheduled services are covered under the Subaru 5 Year/75,000 Kilometre Capped Price Servicing Program (not counting the 1 Month Health Check and Chat). No claims are permitted beyond 63 months/78,000kms (whichever occurs first). 2. Prices include GST. Actual prices may vary from retailer to retailer, but rest assured the Capped Price applicable to your vehicle is the maximum that you will pay for your scheduled service during the Program period. For an exact quote on your scheduled service, contact your local participating authorised Subaru Service Centre. Available at participating Subaru Retailers only and does not apply to rental and some other classes of vehicle.  For full terms and conditions, please see the links below.") 
                    

                })

            })
        })