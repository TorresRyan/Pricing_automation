describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
            .visit("https://www.subaru.com.au/around-the-corner/2024-impreza/" , {
                // //Comment out for prod verification
                // auth: {
                //     username: 'subaru',
                //     password: 'tzDntDgW9HNW'
                // },
                     })
            cy.fixture('ImprezaMCPricing').then( (data)=>{
 
 //POSTCODE 3024               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('3024',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3024Impreza20S)

 //POSTCODE 3063               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('3063',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3063Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3063Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3063Impreza20S)

 //POSTCODE 3630               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('3630',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
  

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3630Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3630Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3630Impreza20S)

 //POSTCODE 4000               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('4000',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4000Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4000Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4000Impreza20S)


 //POSTCODE 4700               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('4700',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4700Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4700Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4700Impreza20S)


                })})}) })})})})})})