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

//5000-7000
//POSTCODE 5000
                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('5000')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(2).click()
                     .wait(3500)

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 5606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5606')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

              //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5606Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5606Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 6000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

              //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 6330

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6330')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

               //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6330Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6330Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 7000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('7000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

                //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000Forester25i)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000Forester25iL)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000Forester25iPremium)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC7000Forester25iSport)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC7000Forester25iS)
                               

            //HYBRID TAB
                .get('[data-test="tab:switch_marketingCategory:Hybrid"]').click()

            //HYBRID VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000ForesterHybridL)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant7)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000ForesterHybridS)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Petrol"]').click()
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()


              })

              })
        })
     })

                