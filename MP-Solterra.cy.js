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
 
 //POSTCODE 0800               
                    cy.wait(1000)

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('0800')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(3000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800SolterraAWDTouring)


 
//POSTCODE 2000               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000SolterraAWDTouring)


//POSTCODE 2250               
            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2250')


            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250SolterraAWDTouring)

 
//POSTCODE 2264

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2264')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264SolterraAWDTouring)

 
 //POSTCODE 2311

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2311')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311SolterraAWDTouring)

//POSTCODE 2361

            cy.get('.modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('.pc__lookup > .pc__fieldWrap > #post-code',{withinSubject:null}).click({force: true}).type('2361')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

            cy  .get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                    .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361SolterraAWD)

                .get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2)
                    .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361SolterraAWDTouring)
     
  

            })})}) })})})})})})})