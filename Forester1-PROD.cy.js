describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.subaru.com.au/configure/models')
                .wait(1000)

            cy.fixture('MY24ForesterPricing').then( (data)=>{

//POSTCODE 0800
            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('0800')

        //Next Button

        // cy.get('.SPC_WIDGET-MuiButton-label').click()
        // cy.get('.SPC_WIDGET-MuiButton-label').click()
            cy.get('.customCTA',{withinSubject:null}).click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA',{withinSubject:null}).click()
                    .get('.customCTA',{withinSubject:null}).click()

                .get('[data-test="button:build"]').eq(2).click()

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC800Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC800Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2000
                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2000')

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
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2250

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2250')

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
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2250Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2250Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

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
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2264Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2264Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2311')

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
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2311Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2311Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2361')

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
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2361Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2361Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

              })

              })
        })
     })

                