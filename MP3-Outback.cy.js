describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/outback" , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                     })
                
            cy.fixture('MY24OutbackPricing').then( (data)=>{
 
 //POSTCODE 3024               

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('3024')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3024OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3024OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC3024OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()


 
//POSTCODE 3063    

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('3063')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3063OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3063OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3063OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3063OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC3063OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

//POSTCODE 3630

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('3630')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3630OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3630OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3630OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()


                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3630OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC3630OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 
//POSTCODE 4000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('4000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4000OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4000OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4000OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4000OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC4000OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 
 //POSTCODE 4700

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('4700')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4700OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4700OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4700OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC4700OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC4700OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 

     
            })})}) })})})})})})