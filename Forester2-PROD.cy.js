describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.subaru.com.au/configure/models')
                .wait(1000)

                     cy.fixture('MY24ForesterPricing').then( (data)=>{

//2500-3000   
            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('2500')

        //Next Button

        // cy.get('.SPC_WIDGET-MuiButton-label').click()
        // cy.get('.SPC_WIDGET-MuiButton-label').click()

        cy.get('.customCTA',{withinSubject:null}).click()
        .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
        .get('.customSkipCTA',{withinSubject:null}).click()
        .get('.customCTA',{withinSubject:null}).click()


                .get('[data-test="button:build"]').eq(2).click()
                .wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2500Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2500Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2640

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2640')

        //Next Button
            // cy.get('[data-test="button:postcode"]').click()
            // cy.get('[data-test="button:selectDealer"]').click()

                    //Next Button
                    cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)
            
             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2640Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2640Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2620

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2620')

        //Next Button
            // cy.get('[data-test="button:postcode"]').click()
            // cy.get('[data-test="button:selectDealer"]').click()

                    //Next Button
                    cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2620Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2620Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

        //Next Button
            // cy.get('[data-test="button:postcode"]').click()
            // cy.get('[data-test="button:selectDealer"]').click()

                    //Next Button
                    cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

              //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2606Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2606Forester25iS)        

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 3000

              .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3000')

        //Next Button
            // cy.get('[data-test="button:postcode"]').click()
            // cy.get('[data-test="button:selectDealer"]').click()

                    //Next Button
                    cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

               //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000ForesterHybridS)
                    
            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

              })

              })
        })
     })

                