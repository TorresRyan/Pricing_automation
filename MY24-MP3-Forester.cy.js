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
 
//3063-5000     


             //Click Postcode selector
             cy.get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('3063')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()


///POSTCODE 3630

         //Click Postcode selector
         .get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('3630')

         //Select first Item on Dropdown list
         .get('#react-select-3-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()

///POSTCODE 4000

         //Click Postcode selector
         .get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('4000')

         //Select first Item on Dropdown list
         .get('#react-select-4-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()


///POSTCODE 4700

         //Click Postcode selector
         .get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('4700')

         //Select first Item on Dropdown list
         .get('#react-select-5-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()        
             
///POSTCODE 5000

         //Click Postcode selector
         .get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('5000')

         //Select first Item on Dropdown list
         .get('#react-select-6-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()      
             
///POSTCODE 5606

         //Click Postcode selector
         .get('._imuZ_BAsi')
             .click().wait(100)
         //Type Postcode
         .get('.css-1hwfws3').type('5606')

         //Select first Item on Dropdown list
         .get('#react-select-7-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         //Validate Potcode 0800 Prices
         .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606Forester25i)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant2).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606Forester25iL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant3).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606Forester25iPremium)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant4).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606Forester25iSport)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant5).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606Forester25iS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant6).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606ForesterHybridL)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant7).click()
         .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606ForesterHybridS)

         .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
             .should('be.visible').should('have.text', data.Variant1).click()    


            })})}) })