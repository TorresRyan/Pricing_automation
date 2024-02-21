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

         
//POSTCODE 0800
                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('0800')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(3).click()
                     .wait(3500)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC800)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC800OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC800OutbackTouringXT)
                               
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2000)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()


             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2000OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2000OutbackTouringXT)
                               
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()
     
//POSTCODE 2250

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2250')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2250)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250OutbackTouring)
                
            //Click Arrow
            .get('[data-test="image:variant:next"]').click()
            .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2250OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2250OutbackTouringXT)

            //Click Arrow
            .get('[data-test="image:variant:prev"]').click()
            .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2264)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()


             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2264OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2264OutbackTouringXT)
         
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

 //POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2311')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)
                
            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2311)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2311OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2311OutbackTouringXT)
        
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()

 //POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2361')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //VALIDATE OUTBACK VARIANTS
            .get('[data-test="label:postcode:label"]').should('have.text', data.PC2361)
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361OutbackAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361OutbackSport)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361OutbackTouring)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2361OutbackSportXT)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2361OutbackTouringXT)
                       
            //Click Arrow
                .get('[data-test="image:variant:prev"]').click()
                .get('[data-test="image:variant:prev"]').click()             


              })
              })
        })
     })

                