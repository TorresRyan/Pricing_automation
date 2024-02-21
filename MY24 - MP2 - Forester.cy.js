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
///POSTCODE 2500

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2500')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 2640

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2640')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 2620

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2620')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()

     

///POSTCODE 2606

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2606')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()



///POSTCODE 3000

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('3000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


                })})})})    
