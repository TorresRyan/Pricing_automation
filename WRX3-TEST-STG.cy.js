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

//3063-5606            
//POSTCODE 3063

                cy.get('.SPC_WIDGET-MuiInputBase-input')
                    .type('3063')

            //Next Button
                .get('.SPC_WIDGET-MuiButton-label').click()
                .get('.SPC_WIDGET-MuiButton-label').click().wait(3000)

                .get('[data-test="button:build"]').eq(5).click()
                     .wait(3500)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3063WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3063WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC3063WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC3063WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3063WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3063WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



//POSTCODE 3630

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3630')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3630WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3630WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC3630WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC3630WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3630WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3630WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 4000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC4000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC4000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC4000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 4700

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('4700')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4700WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC4700WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC4700WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC4700WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC4700WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC4700WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 5000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5000')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC5000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC5000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()

            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 5606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('5606')

        //Next Button
                .get('[data-test="button:postcode"] > .SPC_WIDGET-MuiButton-label').click()
                .get('[data-test="button:selectDealer"]').click().wait(1000)

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606WRXAWDAutomatic)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5606WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC5606WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC5606WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC5606WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC5606WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC5606WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()

              })
              })
        })
     })

