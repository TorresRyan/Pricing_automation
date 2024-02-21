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
 
//6000-7000    
              //Click Postcode selector
              cy.get('._imuZ_BAsi')
              .click().wait(100)
          //Type Postcode
          .get('.css-1hwfws3').type('6000')
 
          //Select first Item on Dropdown list
          .get('#react-select-2-option-0').click()
 
          //Click Show Prices Button
          .get('.fCDXQZgm7_').click().wait(100)
 
          //Validate Potcode 0800 Prices
          .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000Forester25i)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant2).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000Forester25iL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant3).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000Forester25iPremium)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant4).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000Forester25iSport)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant5).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000Forester25iS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant6).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000ForesterHybridL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant7).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000ForesterHybridS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant1).click()
 
 
 ///POSTCODE 6330
 
          //Click Postcode selector
          .get('._imuZ_BAsi')
              .click().wait(100)
          //Type Postcode
          .get('.css-1hwfws3').type('6330')
 
          //Select first Item on Dropdown list
          .get('#react-select-3-option-0').click()
 
          //Click Show Prices Button
          .get('.fCDXQZgm7_').click().wait(100)
 
          //Validate Potcode 0800 Prices
          .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330Forester25i)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant2).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330Forester25iL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant3).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330Forester25iPremium)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant4).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330Forester25iSport)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant5).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330Forester25iS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant6).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330ForesterHybridL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant7).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330ForesterHybridS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant1).click()
 
 ///POSTCODE 7000
 
          //Click Postcode selector
          .get('._imuZ_BAsi')
              .click().wait(100)
          //Type Postcode
          .get('.css-1hwfws3').type('7000')
 
          //Select first Item on Dropdown list
          .get('#react-select-4-option-0').click()
 
          //Click Show Prices Button
          .get('.fCDXQZgm7_').click().wait(100)
 
          //Validate Potcode 0800 Prices
          .get('.wPLKcnmRJX > h2').should('be.visible').should('have.text', data.MPVariant1)
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000Forester25i)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant2).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000Forester25iL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant3).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000Forester25iPremium)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant4).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000Forester25iSport)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant5).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000Forester25iS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(6) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant6).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000ForesterHybridL)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(7) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant7).click()
          .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000ForesterHybridS)
 
          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
              .should('be.visible').should('have.text', data.Variant1).click()

            })})}) })