describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.subaru.com.au/configure')
                .wait(1000)

            cy.fixture('WRXPricing').then( (data)=>{

//2500-3024            
//POSTCODE 2500

            cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('2500')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()

                .get('[data-test="button:build"]').eq(5).click()
            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2500WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2500WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2500WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2500WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2500WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2500WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



//POSTCODE 2640

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2640')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2640WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2640WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2640WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2640WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2640WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2640WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 2620

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2620')

         //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2620WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2620WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2620WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2620WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2620WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2620WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2606')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2606WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2606WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2606WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2606WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2606WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2606WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 3000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC3000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC3000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 3024

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('3024')

         //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3024WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC3024WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC3024WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC3024WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC3024WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC3024WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



              })

              })
        })
     })

                