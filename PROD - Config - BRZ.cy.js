describe('Subaru Web Aplication', () => {
it('Postcode (0800,2000,2250,2264,2311,2361)', () => {
                cy
                .visit('https://www.subaru.com.au/configure/models')
                .wait(1000)

            cy.fixture('BRZ2024').then( (data)=>{

         
//POSTCODE 0800
            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('0800')

        //Next Button
            cy.get('.customCTA',{withinSubject:null}).click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()

                .get('[data-test="button:build"]').eq(4).click()
                
            //Manual TAB
                .get('[data-test="label:postcode:label"]').should('have.text', data.PC800)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800BRZCoupetSM)

            //Automatic TAB
                
                .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 2000
                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //Manual TAB
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2000)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000BRZCoupetSM)

            //Automatic TAB
                
            .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2250

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2250')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //Manual TAB
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2250)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250BRZCoupetSM)

            //Automatic TAB
                
            .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //Manual TAB
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2264)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264BRZCoupetSM)

            //Automatic TAB
                
            .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2311')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //Manual TAB
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2311)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311BRZCoupetSM)

            //Automatic TAB
                
            .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2361')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //Manual TAB
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2361)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361BRZCoupeM)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361BRZCoupeSM)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361BRZCoupetSM)

            //Automatic TAB
                
            .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361BRZCoupeAuto)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361BRZCoupeSAuto)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361BRZCoupetSAuto)

                //Back to Manual Tab
                .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


            })})
        
it('Postcode 2500,2640,2620,2606,3000)', () => {
                cy
                    .visit('https://www.subaru.com.au/configure/models')
                    .wait(1000)
    
                cy.fixture('BRZ2024').then( (data)=>{
    
    //POSTCODE 2500
                cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('2500')
    
            //Next Button
                cy.get('.customCTA',{withinSubject:null}).click()
                        .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                        .get('.customSkipCTA').click()
                        .get('.customCTA').click()
    
                    .get('[data-test="button:build"]').eq(4).click()

        //Manual TAB
        .get('[data-test="label:postcode:label"]').should('have.text', data.PC2500)
        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500BRZCoupeM)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500BRZCoupeSM)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500BRZCoupetSM)

    //Automatic TAB
        
    .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500BRZCoupeAuto)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500BRZCoupeSAuto)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500BRZCoupetSAuto)

        //Back to Manual Tab
        .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2640

        .get('[data-test="label:postcode:label"]').click()
        .get('.SPC_WIDGET-MuiInputBase-input').type('2640')

//Next Button
    cy.get('.customCTA').click()
            .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
            .get('.customSkipCTA').click()
            .get('.customCTA').click().wait(1000)
            
    //Manual TAB
    .get('[data-test="label:postcode:label"]').should('have.text', data.PC2640)
        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640BRZCoupeM)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640BRZCoupeSM)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640BRZCoupetSM)

    //Automatic TAB
        
    .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640BRZCoupeAuto)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640BRZCoupeSAuto)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640BRZCoupetSAuto)

        //Back to Manual Tab
        .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2620

        .get('[data-test="label:postcode:label"]').click()
        .get('.SPC_WIDGET-MuiInputBase-input').type('2620')

//Next Button
    cy.get('.customCTA').click()
            .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
            .get('.customSkipCTA').click()
            .get('.customCTA').click().wait(1000)

    //Manual TAB
    .get('[data-test="label:postcode:label"]').should('have.text', data.PC2620)
        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620BRZCoupeM)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620BRZCoupeSM)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620BRZCoupetSM)

    //Automatic TAB
        
    .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620BRZCoupeAuto)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620BRZCoupeSAuto)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620BRZCoupetSAuto)

        //Back to Manual Tab
        .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2606

        .get('[data-test="label:postcode:label"]').click()
        .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

//Next Button
    cy.get('.customCTA').click()
            .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
            .get('.customSkipCTA').click()
            .get('.customCTA').click().wait(1000)

    //Manual TAB
    .get('[data-test="label:postcode:label"]').should('have.text', data.PC2606)
        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606BRZCoupeM)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606BRZCoupeSM)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606BRZCoupetSM)

    //Automatic TAB
        
    .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606BRZCoupeAuto)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606BRZCoupeSAuto)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606BRZCoupetSAuto)

        //Back to Manual Tab
        .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 3000

        .get('[data-test="label:postcode:label"]').click()
        .get('.SPC_WIDGET-MuiInputBase-input').type('3000')

//Next Button
    cy.get('.customCTA').click()
            .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
            .get('.customSkipCTA').click()
            .get('.customCTA').click().wait(1000)

    //Manual TAB
    .get('[data-test="label:postcode:label"]').should('have.text', data.PC3000)
        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000BRZCoupeM)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000BRZCoupeSM)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000BRZCoupetSM)

    //Automatic TAB
        
    .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

        .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
            .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000BRZCoupeAuto)
    
        .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
            .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000BRZCoupeSAuto)

        .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
            .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000BRZCoupetSAuto)

        //Back to Manual Tab
        .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()
      })

      })

it('Postcode 3024,3063,3630,4000,4700)', () => {
        cy
            .visit('https://www.subaru.com.au/configure/models')
            .wait(1000)

        cy.fixture('BRZ2024').then( (data)=>{

//POSTCODE 3024
        cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('3024')

    //Next Button
        cy.get('.customCTA',{withinSubject:null}).click()
                .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                .get('.customSkipCTA').click()
                .get('.customCTA').click()

            .get('[data-test="button:build"]').eq(4).click()

      //Manual TAB
      .get('[data-test="label:postcode:label"]').should('have.text', data.PC3024)
      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024BRZCoupeM)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024BRZCoupeSM)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024BRZCoupetSM)

  //Automatic TAB
      
  .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024BRZCoupeAuto)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024BRZCoupeSAuto)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024BRZCoupetSAuto)

      //Back to Manual Tab
      .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 3063

      .get('[data-test="label:postcode:label"]').click()
      .get('.SPC_WIDGET-MuiInputBase-input').type('3063')

//Next Button
  cy.get('.customCTA').click()
          .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
          .get('.customSkipCTA').click()
          .get('.customCTA').click().wait(1000)

  //Manual TAB
  .get('[data-test="label:postcode:label"]').should('have.text', data.PC3063)
      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063BRZCoupeM)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063BRZCoupeSM)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063BRZCoupetSM)

  //Automatic TAB
      
  .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063BRZCoupeAuto)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063BRZCoupeSAuto)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063BRZCoupetSAuto)

      //Back to Manual Tab
      .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 3630

      .get('[data-test="label:postcode:label"]').click()
      .get('.SPC_WIDGET-MuiInputBase-input').type('3630')

//Next Button
  cy.get('.customCTA').click()
          .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
          .get('.customSkipCTA').click()
          .get('.customCTA').click().wait(1000)

  //Manual TAB
  .get('[data-test="label:postcode:label"]').should('have.text', data.PC3630)
      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630BRZCoupeM)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630BRZCoupeSM)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630BRZCoupetSM)

  //Automatic TAB
      
  .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630BRZCoupeAuto)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630BRZCoupeSAuto)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630BRZCoupetSAuto)

      //Back to Manual Tab
      .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 4000

      .get('[data-test="label:postcode:label"]').click()
      .get('.SPC_WIDGET-MuiInputBase-input').type('4000')

//Next Button
  cy.get('.customCTA').click()
          .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
          .get('.customSkipCTA').click()
          .get('.customCTA').click().wait(1000)

  //Manual TAB
  .get('[data-test="label:postcode:label"]').should('have.text', data.PC4000)
      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000BRZCoupeM)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000BRZCoupeSM)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000BRZCoupetSM)

  //Automatic TAB
      
  .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000BRZCoupeAuto)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000BRZCoupeSAuto)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000BRZCoupetSAuto)

      //Back to Manual Tab
      .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 4700

      .get('[data-test="label:postcode:label"]').click()
      .get('.SPC_WIDGET-MuiInputBase-input').type('4700')

//Next Button
  cy.get('.customCTA').click()
          .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
          .get('.customSkipCTA').click()
          .get('.customCTA').click().wait(1000)

  //Manual TAB
  .get('[data-test="label:postcode:label"]').should('have.text', data.PC4700)
      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700BRZCoupeM)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700BRZCoupeSM)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700BRZCoupetSM)

  //Automatic TAB
      
  .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

      .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
          .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700BRZCoupeAuto)
  
      .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
          .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700BRZCoupeSAuto)

      .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
          .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700BRZCoupetSAuto)

      //Back to Manual Tab
      .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

})
})

it('Postcode 5000,5606,6000,6330,7000)', () => {
    cy
        .visit('https://www.subaru.com.au/configure/models')
        .wait(1000)

    cy.fixture('BRZ2024').then( (data)=>{

//POSTCODE 5000
    cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('5000')

//Next Button
    cy.get('.customCTA',{withinSubject:null}).click()
            .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
            .get('.customSkipCTA').click()
            .get('.customCTA').click()

        .get('[data-test="button:build"]').eq(4).click()

         //Manual TAB
         .get('[data-test="label:postcode:label"]').should('have.text', data.PC5000)
         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000BRZCoupeM)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000BRZCoupeSM)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000BRZCoupetSM)

     //Automatic TAB
         
     .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000BRZCoupeAuto)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000BRZCoupeSAuto)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000BRZCoupetSAuto)

         //Back to Manual Tab
         .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 5606

         .get('[data-test="label:postcode:label"]').click()
         .get('.SPC_WIDGET-MuiInputBase-input').type('5606')

 //Next Button
     cy.get('.customCTA').click()
             .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
             .get('.customSkipCTA').click()
             .get('.customCTA').click().wait(1000)

     //Manual TAB
     .get('[data-test="label:postcode:label"]').should('have.text', data.PC5606)
         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606BRZCoupeM)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606BRZCoupeSM)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606BRZCoupetSM)

     //Automatic TAB
         
     .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606BRZCoupeAuto)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606BRZCoupeSAuto)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606BRZCoupetSAuto)

         //Back to Manual Tab
         .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 6000

         .get('[data-test="label:postcode:label"]').click()
         .get('.SPC_WIDGET-MuiInputBase-input').type('6000')

 //Next Button
     cy.get('.customCTA').click()
             .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
             .get('.customSkipCTA').click()
             .get('.customCTA').click().wait(1000)

     //Manual TAB
     .get('[data-test="label:postcode:label"]').should('have.text', data.PC6000)
         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000BRZCoupeM)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000BRZCoupeSM)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000BRZCoupetSM)

     //Automatic TAB
         
     .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000BRZCoupeAuto)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000BRZCoupeSAuto)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000BRZCoupetSAuto)

         //Back to Manual Tab
         .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 6330

         .get('[data-test="label:postcode:label"]').click()
         .get('.SPC_WIDGET-MuiInputBase-input').type('6330')

 //Next Button
     cy.get('.customCTA').click()
             .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
             .get('.customSkipCTA').click()
             .get('.customCTA').click().wait(1000)

     //Manual TAB
     .get('[data-test="label:postcode:label"]').should('have.text', data.PC6330)
         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330BRZCoupeM)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330BRZCoupeSM)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330BRZCoupetSM)

     //Automatic TAB
         
     .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330BRZCoupeAuto)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330BRZCoupeSAuto)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330BRZCoupetSAuto)

         //Back to Manual Tab
         .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 7000

         .get('[data-test="label:postcode:label"]').click()
         .get('.SPC_WIDGET-MuiInputBase-input').type('7000')

 //Next Button
     cy.get('.customCTA').click()
             .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
             .get('.customSkipCTA').click()
             .get('.customCTA').click().wait(1000)

     //Manual TAB
     .get('[data-test="label:postcode:label"]').should('have.text', data.PC7000)
         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000BRZCoupeM)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000BRZCoupeSM)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000BRZCoupetSM)

     //Automatic TAB
         
     .get('[data-test="tab:switch_marketingCategory:Automatic"]').click()

         .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
             .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000BRZCoupeAuto)
     
         .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
             .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000BRZCoupeSAuto)

         .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant6)
             .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000BRZCoupetSAuto)

         //Back to Manual Tab
         .get('[data-test="tab:switch_marketingCategory:Manual"] > .SPC_WIDGET-MuiTab-wrapper') .click()

        })
    })


})
