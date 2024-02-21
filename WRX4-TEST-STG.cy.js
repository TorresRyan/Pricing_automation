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

            cy.fixture('WRXPricing').then( (data)=>{

//6000-7000            
//POSTCODE 6000

                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('6000')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(5).click()
                     .wait(3500)
            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC6000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC6000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



//POSTCODE 6330

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('6330')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6330WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC6330WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC6330WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC6330WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC6330WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC6330WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 7000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('7000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC7000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC7000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC7000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC7000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC7000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC7000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



            })
        })
  })
})

          