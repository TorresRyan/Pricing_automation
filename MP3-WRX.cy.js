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
 
//POSTCODE 3024

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('3024')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3024WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3024WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC3024WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC3024WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC3024WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3024WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3024WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 


//POSTCODE 3063

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('3063')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3063WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3063WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3063WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3063WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC3063WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC3063WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC3063WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3063WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3063WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3063WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3063WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 


//POSTCODE 3630

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('3630')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3630WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3630WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible')  .should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3630WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3630WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC3630WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC3630WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC3630WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3630WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3630WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3630WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3630WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 

//POSTCODE 4000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('4000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC4000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC4000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC4000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 

//POSTCODE 4700

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('4700')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4700WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4700WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4700WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4700WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC4700WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC4700WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC4700WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4700WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4700WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4700WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4700WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click() 


                          

                })})})})})})})})})