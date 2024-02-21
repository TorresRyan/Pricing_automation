describe('Subaru Web Aplication', () => {
    context('Capped Price Servicing', () => {
        it('PROD - Crosstrek CPS', () => {
            cy
                .visit('https://www.subaru.com.au/service/capped-price-servicing')
                // .viewport('iphone-6') // only use to test for responsivenesss

            cy
            //Check Crosstrek Service Plans
                .get('.success-checkmark > p > span')
                .should('have.text', 'Crosstrek')
                .scrollIntoView();

           cy

           //TABLE VALIDATION FOR CROSSTREK SP
            //Validate Header
                .get('[style="min-width: 270px;"]')
                .should('have.text', 'Scheduled Service Intervals1')

                .get('thead > .priceTable__tr > :nth-child(2)')
                .should('have.text', 'Crosstrek AWD 2.0L, Crosstrek AWD 2.0R, Crosstrek AWD 2.0S CVT, Crosstrek AWD Hybrid L and Crosstrek AWD Hybrid S MHEV2')

            //Validate 1st row
                .get('tbody > :nth-child(1) > :nth-child(1)')
                .should('have.text', '1 Month Health Check and Chat')

                .get('tbody > :nth-child(1) > :nth-child(2)')
                .should('have.text', 'Free')

            //Validate 2nd row
                .get('tbody > :nth-child(2) > :nth-child(1)')
                .should('have.text', "'A' Service15,000kms or 12 months")

                .get('tbody > :nth-child(2) > :nth-child(2)')
                .should('have.text', '$346.25')

            //Validate 3rd row
                .get('tbody > :nth-child(3) > :nth-child(1)')
                .should('have.text', "'B' Service30,000kms or 24 months")

                .get('tbody > :nth-child(3) > :nth-child(2)')
                .should('have.text', '$473.47')

            //Validate 4th row
                .get('tbody > :nth-child(4) > :nth-child(1)')
                .should('have.text', "'C' Service45,000kms or 36 months")

                .get('tbody > :nth-child(4) > :nth-child(2)')
                .should('have.text', '$420.60') 
               
            //Validate 5th row
                .get('tbody > :nth-child(5) > :nth-child(1)')
                .should('have.text', "'D' Service60,000kms or 48 months")

                .get('tbody > :nth-child(5) > :nth-child(2)')
                .should('have.text', '$771.74') 
            
            //Validate 6th row
                .get('tbody > :nth-child(6) > :nth-child(1)')
                .should('have.text', "'E' Service75,000kms or 60 months")

                .get('tbody > :nth-child(6) > :nth-child(2)')
                .should('have.text', '$361.13') 


            //Validate Disclaimer below the table
                .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > :nth-child(1) > p > strong')
                .should('have.text', "The recommended scheduled service interval for 2024 Subaru Crosstrek models is every 15,000 kilometres or 12 months, whichever occurs first.")

                .get(':nth-child(1) > :nth-child(3) > .field > .field-items > .field-item > :nth-child(2) > sup')
                .should('have.text', "The above quoted Capped Price Servicing prices are applicable to Model Year 2024 Subaru Crosstrek models. Our Capped Price Servicing prices include GST and represent the locked in maximum price for the first 5 years or 75,000 kilometres travelled, whichever occurs first. For full Capped Price Servicing Program terms and conditions please refer to subaru.com.au/capped-price-servicing or call Subaru Australia’s Customer Relations on 1800 22 66 43. 1. The first five (5) standard scheduled services are covered under the Subaru 5 Year/75,000 Kilometre Capped Price Servicing Program (not counting the 1 Month Health Check and Chat). No claims are permitted beyond 63 months/78,000kms (whichever occurs first). 2. Prices include GST. Actual prices may vary from retailer to retailer, but rest assured the Capped Price applicable to your vehicle is the maximum that you will pay for your scheduled service during the Program period. For an exact quote on your scheduled service, contact your local participating authorised Subaru Service Centre. Available at participating Subaru Retailers only and does not apply to rental and some other classes of vehicle. For full terms and conditions, please see the links below.") 
            
            })

    })
})