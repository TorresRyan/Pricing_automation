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
 
//2500-3024     
 ///POSTCODE 2500

            //Click Postcode selector
            cy.get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2500')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


 ///POSTCODE 2640

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2640')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

///POSTCODE 2620

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2620')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


///POSTCODE 2606

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('2606')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()        
                
  ///POSTCODE 3000

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('3000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()      
                
 ///POSTCODE 3024

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('3024')

            //Select first Item on Dropdown list
            .get('#react-select-7-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 0800 Prices
            .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024Forester25i)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024Forester25iL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024Forester25iPremium)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024Forester25iSport)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024Forester25iS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant6).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024ForesterHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant7).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024ForesterHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()    


            })})}) })