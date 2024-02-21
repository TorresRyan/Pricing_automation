describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/solterra" , {
                    // //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                     })
            cy.fixture('SolterraPricing').then( (data)=>{
 
 //POSTCODE 2500               

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2500')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2500SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2500SolterraAWDTouring)


 
//POSTCODE 2640               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2640')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2640SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2640SolterraAWDTouring)


//POSTCODE 2620               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2620')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2620SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2620SolterraAWDTouring)

 
//POSTCODE 2606

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2606SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2606SolterraAWDTouring)

 
 //POSTCODE 3000

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('3000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3000SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3000SolterraAWDTouring)

//POSTCODE 3024

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('3024')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024SolterraAWDTouring)
     
  

            })})}) })})})})})})})