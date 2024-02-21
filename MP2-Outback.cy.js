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
 
 //POSTCODE 2500               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2500')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2500OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2500OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2500OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2500OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2500OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 
//POSTCODE 2640    

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2640')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2640OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2640OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2640OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2640OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2640OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

//POSTCODE 2620

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2620')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2620OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2620OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2620OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2620OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2620OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 
//POSTCODE 2606

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2606OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2606OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2606OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2606OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2606OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 //POSTCODE 3000

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('3000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3000OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3000OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3000OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC3000OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC3000OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 

     
            })})}) })})})})})})