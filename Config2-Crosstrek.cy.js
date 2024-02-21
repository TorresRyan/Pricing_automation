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

//POSTCODE 3630
                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('3630')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(1).click()
                     .wait(3500)

//Close Stock pop up
            // cy.wait(3500)
            // .get('.popup__close > span')
            //      .click()

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()




//POSTCODE 4000
           cy
                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 4700

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4700')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 5000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 5606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5606')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 6000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()


//POSTCODE 6330

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6330')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

//POSTCODE 7000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('7000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //PETROL TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000CrosstrekAWD20L)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000CrosstrekAWD20R)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000CrosstrekAWD20S)
                
            //HYBRID TAB
                
                .get('[data-test="tab:switch_marketingCategory:Hybrid"] > .SPC_WIDGET-MuiTab-wrapper').should('have.text', 'Hybrid').click()

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000CrosstrekAWDHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000CrosstrekAWDHybridS)

                //Back to Petrol Tab
                .get('[data-test="tab:switch_marketingCategory:Petrol"] > .SPC_WIDGET-MuiTab-wrapper') .click()

                
              })

            })
      })
   })

              