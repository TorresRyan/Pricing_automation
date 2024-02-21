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
            cy.fixture('MY24OutbackPricing').then( (data)=>{

         
//POSTCODE 5000
                  cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('5000')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(3).click()
                     .wait(3500)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC5000)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5000OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5000OutbackTouringXT)

            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 5606

              .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5606')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC5606)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5606OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5606OutbackTouringXT)
                               
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()
     
//POSTCODE 6000

              .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC6000)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6000OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6000OutbackTouringXT)

            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 6330

              .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6330')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC6330)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6330OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6330OutbackTouringXT)
    
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

 //POSTCODE 7000

              .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('7000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC7000)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC7000OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC7000OutbackTouringXT)
    
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click() 

 
              })
              })
        })
     })

                