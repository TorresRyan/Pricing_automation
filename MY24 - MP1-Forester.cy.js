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
///POSTCODE 0800

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('0800')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC800ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 2000

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2000')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


///POSTCODE 2250

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2250')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()

     

///POSTCODE 2264

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2264')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()



///POSTCODE 2311

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2311')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()


     ///POSTCODE 2361

            //Click Postcode selector
            .get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2361')

            //Select first Item on Dropdown list
            .get('#react-select-7-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

 cy  .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('[data-index="0"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361Forester25i)

     .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant2)
         .get('[data-index="1"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361Forester25iL)

     .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant3)
         .get('[data-index="2"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361Forester25iPremium)

     //Click Arrow right in Carousel
     .get('._Pdo6rOZdm',{withinSubject:null}).click()


     .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant4)
         .get('[data-index="3"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361Forester25iSport)

     .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant5)
         .get('[data-index="4"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361Forester25iS)

     .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant6)
         .get('[data-index="5"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361ForesterHybridL)

     //Click Arrow right in Carousel 
     .get('._Pdo6rOZdm',{withinSubject:null}).click()

     .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .sJHON9aYK3 > p',{withinSubject:null}).should('be.visible').should('have.text', data.Variant7)
         .get('[data-index="6"] > ._g4kZUDoaQ > :nth-child(1) > .ExLZG2Ut9m > :nth-child(1) > div > .__Nn_xs2UF > .h_bAR3IOcy',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361ForesterHybridS)


     //Click Arrow right in Carousel 
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()
     .get('.XAiAKhtHrL',{withinSubject:null}).click()

                })})})})    
