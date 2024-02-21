describe('Subaru Web Aplication', () => {
    it('Postcode (0800,2000,2250,2264,2311,2361)', () => {
                    cy
                    .visit('https://www.subaru.com.au/brz')
                    .wait(1000)
    
                cy.fixture('BRZ2024').then( (data)=>{

//POSTCODE 0800               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('0800')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC800).should('be.visible')
      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC800BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC800BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC800BRZCoupetSM)



//POSTCODE 2000               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('2000')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

        cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2000).should('be.visible')
      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2000BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2000BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2000BRZCoupetSM)


//POSTCODE 2250               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('2250')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2250).should('be.visible')
      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2250BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2250BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2250BRZCoupetSM)


//POSTCODE 2264               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('2264')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2264).should('be.visible')
      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2264BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2264BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2264BRZCoupetSM)


//POSTCODE 2311               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('2311')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2311).should('be.visible')
      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2311BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2311BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2311BRZCoupetSM)

//POSTCODE 2361               
cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
cy.get('#post-code',{withinSubject:null}).type('2361')

.get('.pc__form',{withinSubject:null}).within(() => {
    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
        .click({force: true})
      .get('#viewDealerButton',{withinSubject:null})
        .click({force: true})
        .wait(2000)

   cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2361).should('be.visible')
   cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2361BRZCoupeM)

        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2361BRZCoupeSM)
          
        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2361BRZCoupetSM)
            
            
            })})})})})})})})
        
it('Postcode 2500,2640,2620,2606,3000)', () => {
                cy
                    .visit('https://www.subaru.com.au/brz')
                    .wait(1000)
    
                cy.fixture('BRZ2024').then( (data)=>{
                    //POSTCODE 2500               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2500')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

               cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2500).should('be.visible')
               cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2500BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2500BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2500BRZCoupetSM)


 //POSTCODE 2640               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2640')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

               cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2640).should('be.visible')
               cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2640BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2640BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2640BRZCoupetSM)


 //POSTCODE 2620               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2620')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

               cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2620).should('be.visible')
               cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2620BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2620BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2620BRZCoupetSM)

 //POSTCODE 2606               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('2606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

               cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC2606).should('be.visible')
               cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC2606BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC2606BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC2606BRZCoupetSM)

 //POSTCODE 3000               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('3000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

               cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC3000).should('be.visible')
               cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3000BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3000BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3000BRZCoupetSM)

        
        })})})})})})})
    
it('Postcode 3024,3063,3630,4000,4700)', () => {
            cy
                .visit('https://www.subaru.com.au/brz')
                .wait(1000)
    
            cy.fixture('BRZ2024').then( (data)=>{ 
                
                cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
                cy.get('#post-code',{withinSubject:null}).type('3024')
    
                .get('.pc__form',{withinSubject:null}).within(() => {
                    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                        .click({force: true})
                      .get('#viewDealerButton',{withinSubject:null})
                        .click({force: true})
                        .wait(2000)
    
                      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC3024).should('be.visible')
                      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3024BRZCoupeM)
    
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3024BRZCoupeSM)
                          
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3024BRZCoupetSM)
    
     //POSTCODE 3063               
                cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
                cy.get('#post-code',{withinSubject:null}).type('3063')
    
                .get('.pc__form',{withinSubject:null}).within(() => {
                    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                        .click({force: true})
                      .get('#viewDealerButton',{withinSubject:null})
                        .click({force: true})
                        .wait(2000)
    
                      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC3063).should('be.visible')
                      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3063BRZCoupeM)
    
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3063BRZCoupeSM)
                          
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3063BRZCoupetSM)
    
     //POSTCODE 3630               
                cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
                cy.get('#post-code',{withinSubject:null}).type('3630')
    
                .get('.pc__form',{withinSubject:null}).within(() => {
                    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                        .click({force: true})
                      .get('#viewDealerButton',{withinSubject:null})
                        .click({force: true})
                        .wait(2000)
    
                      cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC3630).should('be.visible')
                      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC3630BRZCoupeM)
    
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC3630BRZCoupeSM)
                          
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC3630BRZCoupetSM)
    
    
     //POSTCODE 4000               
                cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
                cy.get('#post-code',{withinSubject:null}).type('4000')
    
                .get('.pc__form',{withinSubject:null}).within(() => {
                    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                        .click({force: true})
                      .get('#viewDealerButton',{withinSubject:null})
                        .click({force: true})
                        .wait(2000)
    
                        cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC4000).should('be.visible')
                      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4000BRZCoupeM)
    
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4000BRZCoupeSM)
                          
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4000BRZCoupetSM)
    
     //POSTCODE 4700               
                cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
                cy.get('#post-code',{withinSubject:null}).type('4700')
    
                .get('.pc__form',{withinSubject:null}).within(() => {
                    cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                        .click({force: true})
                      .get('#viewDealerButton',{withinSubject:null})
                        .click({force: true})
                        .wait(2000)
    
    
                      
                        cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC4700).should('be.visible')
                      cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC4700BRZCoupeM)
    
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC4700BRZCoupeSM)
                          
                        cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                              .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC4700BRZCoupetSM)
    

    }) }) }) }) }) }) })

it('Postcode 5000,5606,6000,6330,7000)', () => {
        cy
            .visit('https://www.subaru.com.au/brz')
            .wait(1000)
    
        cy.fixture('BRZ2024').then( (data)=>{
    

            //POSTCODE 5000               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('5000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

                    cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC5000).should('be.visible')
                  cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5000BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5000BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5000BRZCoupetSM)

 //POSTCODE 5606               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('5606')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

                    cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC5606).should('be.visible')
                  cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC5606BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC5606BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC5606BRZCoupetSM)

 //POSTCODE 6000               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('6000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

                    cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC6000).should('be.visible')  
                  cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6000BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6000BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6000BRZCoupetSM)


 //POSTCODE 6330               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('6330')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

                  cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC6330).should('be.visible')  
                  cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC6330BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC6330BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC6330BRZCoupetSM)


 //POSTCODE 7000               
            cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer > a',{withinSubject:null}).click()
            cy.get('#post-code',{withinSubject:null}).type('7000')

            .get('.pc__form',{withinSubject:null}).within(() => {
                cy.get('.pc__results > :nth-child(1)',{withinSubject:null})
                    .click({force: true})
                  .get('#viewDealerButton',{withinSubject:null})
                    .click({force: true})
                    .wait(2000)

                  cy.get(':nth-child(1) > .modelWalk__pricing > .modelWalk__finance > .modelWalk__priceDisclaimer',{withinSubject:null}).contains(data.MPC7000).should('be.visible')  
                  cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.MPVariant1).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(0).should('be.visible').should('have.text', data.PC7000BRZCoupeM)

                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.MPVariant2).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(1).should('be.visible').should('have.text', data.PC7000BRZCoupeSM)
                      
                    cy.get('.modelWalk__modelTitle',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.MPVariant3).scrollIntoView()
                          .get('.modelWalk__price',{withinSubject:null}).eq(2).should('be.visible').should('have.text', data.PC7000BRZCoupetSM)


            })})}) })})})})

})