describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
            .visit("https://www.oem-staging.subaru.com.au/crosstrek", {
                //Comment out for prod verification
                auth: {
                    username: 'subaru',
                    password: 'tzDntDgW9HNW'
                },
                })
                cy.fixture('CrosstrekPricing').then( (data)=>{
            //Validate Crosstrek Variants
          cy
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant1)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant2)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant3)
            
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant4)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant5)

//3063
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
                .get('.css-1hwfws3').type('3063')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 3063 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063CrosstrekAWD20R)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click() 
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3063CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//3630
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('3630')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 3630 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3630CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//4000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('4000')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 4000 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4000CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//4700
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('4700')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 4700 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant4).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC4700CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//5000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('5000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

             //Validate Potcode 5000 Prices
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000CrosstrekAWD20L)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant2).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000CrosstrekAWD20R)
 
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant3).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000CrosstrekAWD20S)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant4).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000CrosstrekAWDHybridL)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant5).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5000CrosstrekAWDHybridS)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant1).click()
   

//5606
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('5606')

            //Select first Item on Dropdown list
            .get('#react-select-7-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

             //Validate Potcode 5606 Prices
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606CrosstrekAWD20L)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant2).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606CrosstrekAWD20R)
 
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant3).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606CrosstrekAWD20S)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant4).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606CrosstrekAWDHybridL)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant5).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC5606CrosstrekAWDHybridS)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant1).click()


//6000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('6000')

            //Select first Item on Dropdown list
            .get('#react-select-8-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

              //Validate Potcode 6000 Prices
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000CrosstrekAWD20L)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant2).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000CrosstrekAWD20R)
 
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant3).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000CrosstrekAWD20S)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant4).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000CrosstrekAWDHybridL)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant5).click()
             .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6000CrosstrekAWDHybridS)
 
             .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                 .should('be.visible').should('have.text', data.Variant1).click()


//6330
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('6330')

            //Select first Item on Dropdown list
            .get('#react-select-9-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

              //Validate Potcode 6330 Prices
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330CrosstrekAWD20L)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant2).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330CrosstrekAWD20R)
  
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant3).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330CrosstrekAWD20S)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant4).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330CrosstrekAWDHybridL)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant5).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC6330CrosstrekAWDHybridS)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant1).click()
 

//7000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('7000')

            //Select first Item on Dropdown list
            .get('#react-select-10-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

              //Validate Potcode 7000 Prices
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000CrosstrekAWD20L)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant2).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000CrosstrekAWD20R)
  
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant3).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000CrosstrekAWD20S)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant4).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000CrosstrekAWDHybridL)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant5).click()
              .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC7000CrosstrekAWDHybridS)
  
              .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                  .should('be.visible').should('have.text', data.Variant1).click()
 
        })

    })
    })
})