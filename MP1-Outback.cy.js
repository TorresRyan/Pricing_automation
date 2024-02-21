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
 
 //POSTCODE 0800               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('0800')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC800OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC800OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC800OutbackTouringXT)


                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 
//POSTCODE 2000               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2000OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2000OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2000OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()


//POSTCODE 2250               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2250')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2250OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2250OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2250OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 
//POSTCODE 2264

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2264')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2264OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2264OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2264OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 //POSTCODE 2311

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2311')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2311OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2311OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible'    ).should('have.text', data.PC2311OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()

 
//POSTCODE 2361

            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2361')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361OutbackAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361OutbackSport)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2361OutbackTouring)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--next',{withinSubject:null}).click()
                .get('.modelWalk__control--next',{withinSubject:null}).click()

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.MPVariant4)
                    .get('.modelWalk__price',{withinSubject:null}).eq(3).should('be.visible').should('have.text', data.PC2361OutbackSportXT)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.MPVariant5)
                    .get('.modelWalk__price',{withinSubject:null}).eq(4).should('be.visible').should('have.text', data.PC2361OutbackTouringXT)

                //Click Arrow right in Carousel
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
                .get('.modelWalk__control--prev',{withinSubject:null}).click()
 
   
     
  

            })})}) })})})})})})})