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
 
 //POSTCODE 0800               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('0800')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC800WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC800WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC800WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC800WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC800WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC800WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC800WRXAWDTsSporstwagon)
                                   
                //SEDAN TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()

 //POSTCODE 2000                 
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2000WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2000WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2000WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2000WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2000WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2000WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2000WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()

//POSTCODE 2250        
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2250')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2250WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2250WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2250WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2250WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2250WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2250WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2250WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()
                    
//POSTCODE 2264        
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2264')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2264WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2264WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2264WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2264WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2264WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2264WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2264WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()     

//POSTCODE 2311        
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2311')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2311WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2311WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2311WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2311WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2311WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2311WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2311WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()   



//POSTCODE 2361        
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code').type('2361')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361WRXAWDManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361WRXAWD50yrsSEManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2361WRXAWDAutomatic)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2361WRXAWD50yrsSEAutomatic)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.Variant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2361WRXAWDRSManual)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.Variant6)
                    .get('.modelWalk__price',{withinSubject:null}).eq(5).should('be.visible').should('have.text', data.PC2361WRXAWDRSAutomatic)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.Variant7)
                    .get('.modelWalk__price',{withinSubject:null}).eq(6).should('be.visible').should('have.text', data.PC2361WRXAWDTs)

                //SPORTSWAGON TAB
                cy.get('.variantToggle',{withinSubject:null}).contains('Sportswagon').click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.Variant8)
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361WRXAWDSporstwagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.Variant9)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361WRXAWD50yrsSESportswagon)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.Variant10)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2361WRXAWDGTSporstwagon)

                //Click Arrow right in Carousel 
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.Variant11)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2361WRXAWDTsSporstwagon)                                
                //SEDAN TAB
                    cy.get('.variantToggle',{withinSubject:null}).contains('Sedan').click()
                    


  

            })})}) })})})}) }) }) })