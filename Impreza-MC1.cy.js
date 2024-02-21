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
 
 //POSTCODE 0800               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('0800',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


                    

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC800Impreza20S)

 //POSTCODE 2000               

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('2000',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2000Impreza20S)

 //POSTCODE 2250               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('2250',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2250Impreza20S)

 //POSTCODE 2264               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('2264',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2264Impreza20S)


 //POSTCODE 2311               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('2311',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2311Impreza20S)

 //POSTCODE 2361               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).type('2361',{force: true})

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})


            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361Impreza20L)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361Impreza20R)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3)
                    .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2361Impreza20S)
                    
                })})}) })})})})})})})