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

//POSTCODE 0800

             //Click Postcode selector
        cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('0800')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()


//POSTCODE 2000

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2000')

         //Select first Item on Dropdown list
         .get('#react-select-3-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()


//POSTCODE 2250

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2250')

         //Select first Item on Dropdown list
         .get('#react-select-4-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()

//POSTCODE 2264

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2264')

         //Select first Item on Dropdown list
         .get('#react-select-5-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()



//POSTCODE 2311

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2311')

         //Select first Item on Dropdown list
         .get('#react-select-6-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()

//POSTCODE 2361

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2361')

         //Select first Item on Dropdown list
         .get('#react-select-7-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20L)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20R)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWDHybridL)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWDHybridS)


         .get('.XAiAKhtHrL',{withinSubject:null}).click()
         

                })})})})