describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.oem-staging.subaru.com.au/configure/' , {
                    //Comment out for prod verification
                    auth: {
                        username: 'subaru',
                        password: 'tzDntDgW9HNW'
                    },
                     })
                     cy.fixture('MY24ForesterPricing').then( (data)=>{

//3024-4700  
//POSTCODE 3024
                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('3024')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(2).click()

               //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3024Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3024Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 3063

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3063')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

               //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3063Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3063Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 3630

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3630')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

                //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3630Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3630Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 4000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC4000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 4700

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4700')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4700Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC4700Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()



              })

              })
        })
     })

                