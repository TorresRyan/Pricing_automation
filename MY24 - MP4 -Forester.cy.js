describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/forester/" , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                    })

                    cy.fixture('MY24ForesterPricing').then( (data)=>{
                        cy.wait(3000)
///POSTCODE 5000

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('5000')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 5606

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('5606')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 6000

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('6000')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()

     

///POSTCODE 6330

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('6330')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()



///POSTCODE 7000

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('7000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


                })})})})    
