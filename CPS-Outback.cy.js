describe('Subaru Web Aplication', () => {
    context('Capped Price Servicing', () => {
        it('PROD - Outback CPS', () => {
            cy
                .visit('https://www.subaru.com.au/service/capped-price-servicing')

            cy
            //Check Outback Service Plans
                .get(':nth-child(3) > .selected-model > p > span')
                    .click({force: true})

                .get('.capped-pricing-desktop > .row > :nth-child(3)')
                    .should('have.text', 'Outback')
                    .scrollIntoView();

             cy

            //Validate 2 Outback Buttons
                .get('#servicePlanPriceInterval > .cappedPricingTableHeading > .cta_wrapper > :nth-child(2)')
                    .should('be.visible')     

                .get('#servicePlanPriceInterval > .cappedPricingTableHeading > .cta_wrapper > :nth-child(3)')
                    .should('be.visible')     
           
            //Outback AWD Sport XT and Outback AWD Touring XT CVT TAB
                .get('#servicePlanPriceInterval > .cappedPricingTableHeading > .cta_wrapper > :nth-child(3)')
                     .should('have.text', "Outback AWD Sport XT and Outback AWD Touring XT CVT")

            //Outback AWD, Outback AWD Sport and Outback AWD Touring CVT TAB
                .get('#servicePlanPriceInterval > .cappedPricingTableHeading > .cta_wrapper > :nth-child(2)')
                     .should('have.text', "Outback AWD, Outback AWD Sport and Outback AWD Touring CVT")
                     .click({force: true})
 

              cy

           //TABLE VALIDATION FOR Outback SP
            //Validate Header
                .get('[style="min-width: 270px;"]')
                .should('have.text', 'Scheduled Service Intervals1')

                .get('thead > .priceTable__tr > :nth-child(2)')
                .should('have.text', 'Outback AWD, Outback AWD Sport and Outback AWD Touring CVT2')


            //Validate 1st row
                .get('tbody > :nth-child(1) > :nth-child(1)')
                .should('have.text', '1 Month Health Check and Chat')

                .get('tbody > :nth-child(1) > :nth-child(2)')
                .should('have.text', 'Free')

            //Validate 2nd row
                .get('tbody > :nth-child(2) > :nth-child(1)')
                .should('have.text', "'A' Service12,500kms or 12 months")

                .get('tbody > :nth-child(2) > :nth-child(2)')
                .should('have.text', '$370.91')

            //Validate 3rd row
                .get('tbody > :nth-child(3) > :nth-child(1)')
                .should('have.text', "'B' Service25,000kms or 24 months")

                .get('tbody > :nth-child(3) > :nth-child(2)')
                .should('have.text', '$636.98')

            //Validate 4th row
                .get('tbody > :nth-child(4) > :nth-child(1)')
                .should('have.text', "'C' Service37,500kms or 36 months")

                .get('tbody > :nth-child(4) > :nth-child(2)')
                .should('have.text', '$379.36') 

            //Validate 5th row
                .get('tbody > :nth-child(5) > :nth-child(1)')
                .should('have.text', "'D' Service50,000kms or 48 months")

                .get('tbody > :nth-child(5) > :nth-child(2)')
                .should('have.text', '$888.62') 
            
            //Validate 6th row
                .get('tbody > :nth-child(6) > :nth-child(1)')
                .should('have.text', "'E' Service62,500kms or 60 months")

                .get('tbody > :nth-child(6) > :nth-child(2)')
                .should('have.text', '$398.77') 

            //Validate Disclaimer below the table
                .get(':nth-child(2) > :nth-child(3) > .field > .field-items > .field-item > p > strong')
                .should('have.text', "The recommended scheduled service interval for Model Year 2023 Subaru Outback (excluding XT variants) vehicles is every 12 months or 12,500 kilometres, whichever occurs first.")

                .get(':nth-child(2) > :nth-child(3) > .field > .field-items > .field-item > :nth-child(2) > div')
                .should('have.text', "The above quoted Capped Price Servicing prices are applicable to Model Year 2023 Subaru Outback (excluding XT variants) vehicles. Our Capped Price Servicing prices include GST and represent the locked in maximum price for the first 5 years or 62,500 kilometres traveled, whichever occurs first. 1. The first five (5) standard scheduled services are covered under the Subaru 5 year/62,500 Kilometre Capped Price Servicing Program (not counting the 1 Month Health Check and Chat). No claims are permitted beyond 63 months or 65,500 kilometres (whichever occurs first). 2. Prices include GST. Actual prices may vary from retailer to retailer, but rest assured the Capped Price applicable to your vehicle is the maximum that you will pay for your scheduled service during the Program period. For an exact quote on your scheduled service, contact your local participating authorised Subaru Service Centre. Available at participating Subaru Retailers only and does not apply to rental and some other classes of vehicle. For full terms and conditions, please see the links below.") 



            //Validate 2nd Outback TAB
            //Outback AWD Sport XT and Outback AWD Touring XT CVT TAB
                .get('#servicePlanPriceInterval > .cappedPricingTableHeading > .cta_wrapper > :nth-child(3)')
                .click({force: true})


            //TABLE VALIDATION FOR Outback SP
            //Validate Header
                .get('[style="min-width: 270px;"]')
                .should('have.text', 'Scheduled Service Intervals1')

                .get('thead > .priceTable__tr > :nth-child(2)')
                .should('have.text', 'Outback AWD Sport XT and Outback AWD Touring XT CVT2')


            //Validate 1st row
                .get('tbody > :nth-child(1) > :nth-child(1)')
                .should('have.text', '1 Month Health Check and Chat')

                .get('tbody > :nth-child(1) > :nth-child(2)')
                .should('have.text', 'Free')

            //Validate 2nd row
                .get('tbody > :nth-child(2) > :nth-child(1)')
                .should('have.text', "'A' Service15,000kms or 12 months")

                .get('tbody > :nth-child(2) > :nth-child(2)')
                .should('have.text', '$376.61')

            //Validate 3rd row
                .get('tbody > :nth-child(3) > :nth-child(1)')
                .should('have.text', "'B' Service30,000kms or 24 months")

                .get('tbody > :nth-child(3) > :nth-child(2)')
                .should('have.text', '$518.40')

            //Validate 4th row
                .get('tbody > :nth-child(4) > :nth-child(1)')
                .should('have.text', "'C' Service45,000kms or 36 months")

                .get('tbody > :nth-child(4) > :nth-child(2)')
                .should('have.text', '$460.15') 

            //Validate 5th row
                .get('tbody > :nth-child(5) > :nth-child(1)')
                .should('have.text', "'D' Service60,000kms or 48 months")

                .get('tbody > :nth-child(5) > :nth-child(2)')
                .should('have.text', '$819.68') 
            
            //Validate 6th row
                .get('tbody > :nth-child(6) > :nth-child(1)')
                .should('have.text', "'E' Service75,000kms or 60 months")

                .get('tbody > :nth-child(6) > :nth-child(2)')
                .should('have.text', '$404.47') 



                })

            })
        })