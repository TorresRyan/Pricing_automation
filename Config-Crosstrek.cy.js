describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.oem-staging.subaru.com.au/configure' , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                     })
            cy.fixture('CrosstrekPricing').then( (data)=>{
            
//Check Postcode 0800
                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('0800')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(1).click()
                     .wait(3500)


            // //Close Stock pop up
            // cy.wait(3500)
            //     .get('.popup__close > span')
            //          .click()

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper').click()


//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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

// //POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

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


//POSTCODE 3063

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3063')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


              })

              })
        })
     })

                