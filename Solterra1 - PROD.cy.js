describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
            .visit('https://www.subaru.com.au/configure/models')
            .wait(1000)

            cy.fixture('SolterraPricing').then( (data)=>{

         
//POSTCODE 2500
            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('2500')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()

                .get('[data-test="button:build"]').eq(6).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500SolterraAWDTouring)


//POSTCODE 2640

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2640')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640SolterraAWDTouring)
     
//POSTCODE 2620

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2620')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620SolterraAWDTouring)

//POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606SolterraAWDTouring)

 //POSTCODE 3000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)
                
            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000SolterraAWDTouring)
      


 //POSTCODE 3024

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3024')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024SolterraAWDTouring)
      


              })
              })
        })
     })

                