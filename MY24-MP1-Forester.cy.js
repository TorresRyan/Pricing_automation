describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/forester-new/" , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                    })
                
            cy.fixture('MY24ForesterPricing').then( (data)=>{
                cy.wait(3000)
                
                cy.get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant1)
    
                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant2)
    
                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant3)
                
                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant4)
    
                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant5)

                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant6)
    
                .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                        .should('be.visible').should('have.text', data.Variant7)
       
///POSTCODE 0800

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('0800')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


 ///POSTCODE 2000

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2000')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

///POSTCODE 2250

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2250')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


///POSTCODE 2264

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2264')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()        
                
  ///POSTCODE 2311

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2311')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()      
                
 ///POSTCODE 2361

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2361')

            //Select first Item on Dropdown list
            .get('#react-select-7-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()    

            })})}) })