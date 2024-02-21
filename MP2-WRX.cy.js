describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/wrx" , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                     })
            cy.fixture('WRXPricing').then( (data)=>{

 //POSTCODE 2500        
 cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
 cy.get('#post-code').type('2500')

 .get('.pc__form',{withinSubject:null}).within(() => {
     cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
         .click({force: true})
       .get('#viewDealerButton',{withinSubject:null})
         .click({force: true})
         .wait(2000)

 cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2500WRXAWDManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
         .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2500WRXAWD50yrsSEManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
         .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2500WRXAWDAutomatic)

     //Click Arrow right in Carousel
     .get('.modelWalk__control--next',{withinSubject:null}).click()
     .get('.modelWalk__control--next',{withinSubject:null}).click()
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
         .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2500WRXAWD50yrsSEAutomatic)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
         .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2500WRXAWDRSManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
         .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2500WRXAWDRSAutomatic)

     //Click Arrow right in Carousel 
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
         .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2500WRXAWDTs)

     //SPORTSWAGON TAB
     cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
         .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2500WRXAWDSporstwagon)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
         .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2500WRXAWD50yrsSESportswagon)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
         .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2500WRXAWDGTSporstwagon)

     //Click Arrow right in Carousel 
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
         .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2500WRXAWDTsSporstwagon)                                
     //SEDAN TAB
         cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()   


//POSTCODE 2640 

 cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
 cy.get('#post-code').type('2640')

 .get('.pc__form',{withinSubject:null}).within(() => {
     cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
         .click({force: true})
       .get('#viewDealerButton',{withinSubject:null})
         .click({force: true})
         .wait(2000)

 cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
         .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2640WRXAWDManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
         .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2640WRXAWD50yrsSEManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
         .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2640WRXAWDAutomatic)

     //Click Arrow right in Carousel
     .get('.modelWalk__control--next',{withinSubject:null}).click()
     .get('.modelWalk__control--next',{withinSubject:null}).click()
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
         .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2640WRXAWD50yrsSEAutomatic)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
         .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2640WRXAWDRSManual)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
         .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2640WRXAWDRSAutomatic)

     //Click Arrow right in Carousel 
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
         .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2640WRXAWDTs)

     //SPORTSWAGON TAB
     cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
         .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2640WRXAWDSporstwagon)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
         .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2640WRXAWD50yrsSESportswagon)

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
         .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2640WRXAWDGTSporstwagon)

     //Click Arrow right in Carousel 
     .get('.modelWalk__control--next',{withinSubject:null}).click()

     .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
         .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2640WRXAWDTsSporstwagon)                                
     //SEDAN TAB
         cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()   



//POSTCODE 2620

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2620')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2620WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2620WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2620WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2620WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2620WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2620WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2620WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2620WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2620WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2620WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2620WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()
                    

//POSTCODE 2606

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2606WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2606WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2606WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2606WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2606WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2606WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2606WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2606WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2606WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2606WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPC2606WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 
                    
//POSTCODE 3000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('3000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC3000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC3000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC3000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()  



            })})}) })})})})}) })