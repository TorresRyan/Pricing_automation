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



//POSTCODE 5000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('5000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC5000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC5000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC5000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC5000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC5000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()


//POSTCODE 5606

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('5606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5606WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5606WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5606WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC5606WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC5606WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC5606WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC5606WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5606WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5606WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5606WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC5606WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()


//POSTCODE 6000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('6000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC6000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC6000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC6000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC6000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC6000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()


//POSTCODE 6330

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('6330')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6330WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6330WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6330WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC6330WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC6330WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC6330WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC6330WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6330WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6330WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6330WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC6330WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()                  
                    
 //POSTCODE 7000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('7000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC7000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC7000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC7000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC7000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC7000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC7000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC7000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC7000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC7000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC7000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC7000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()          
                
                })})})})})})})})})