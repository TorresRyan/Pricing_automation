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
            cy
                .fixture('CrosstrekPricing').then( (data)=>{

//POSTCODE 3024

             //Click Postcode selector
        cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('3024')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()


//POSTCODE 3063

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('3063')

         //Select first Item on Dropdown list
         .get('#react-select-3-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()


//POSTCODE 3630

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('3630')

         //Select first Item on Dropdown list
         .get('#react-select-4-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()

//POSTCODE 4000

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('4000')

         //Select first Item on Dropdown list
         .get('#react-select-5-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()



//POSTCODE 4700

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('4700')

         //Select first Item on Dropdown list
         .get('#react-select-6-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()


                })})})})