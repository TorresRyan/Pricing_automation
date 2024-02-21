describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.subaru.com.au/configure/models')
                .wait(1000)

            cy.fixture('CrosstrekPricing').then( (data)=>{
            
//POSTCODE 800
            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('0800')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

                .get('[data-test="button:build"]').eq(1).click()
                

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 2250

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2250')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2311')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)
            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2361')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2500

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2500')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2640

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2640')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2620

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2620')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)


            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)


            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 3000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 3024

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3024')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click().wait(1000)


            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()



              })

              })
        })
     })

                