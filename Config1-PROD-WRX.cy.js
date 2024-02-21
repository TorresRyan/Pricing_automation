describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit('https://www.subaru.com.au/configure')
                .wait(1000)

            cy.fixture('WRXPricing').then( (data)=>{

//0800-2361            
//POSTCODE 0800
                cy.get('.SPC_WIDGET-MuiInputBase-input',{withinSubject:null}).type('0800')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()
        
                        .get('[data-test="button:build"]').eq(5).click()

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800WRXAWDAutomatic)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC800WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC800WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC800WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC800WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()

            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC800WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC800WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2000

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2000')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000WRXAWDAutomatic)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2000WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2000WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2000WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2000WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()

            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2000WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2000WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()

//POSTCODE 2250
                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2250')

        //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()

            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250WRXAWDAutomatic)
                
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2250WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2250WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2250WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2250WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2250WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2250WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2264')

         //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2264WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2264WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2264WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2264WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2264WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2264WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2311')

         //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2311WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2311WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2311WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2311WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2311WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2311WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()


//POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.SPC_WIDGET-MuiInputBase-input').type('2361')

         //Next Button
            cy.get('.customCTA').click()
                    .get('.customSkipCTA',{withinSubject:null}).contains('Skip').click()
                    .get('.customSkipCTA').click()
                    .get('.customCTA').click()


            //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361WRXAWDManual)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361WRXAWD50yrsSEManual)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant3)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361WRXAWDAutomatic)
                

            //Click Arrow
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()
                .get('[data-test="image:variant:next"]').click()

             //SEDAN TAB
                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant4)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2361WRXAWD50yrsSEAutomatic)
            
                .get('[data-test="text:trimLevel:title"]').eq(4).should('have.text', data.Variant5)
                    .get('[data-test="text:price:primary"]').eq(4).should('contain.text', data.PC2361WRXAWDRSManual)

                .get('[data-test="text:trimLevel:title"]').eq(5).should('have.text', data.Variant6)
                    .get('[data-test="text:price:primary"]').eq(5).should('contain.text', data.PC2361WRXAWDRSAutomatic)
                               
            //Click Arrow
                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(6).should('have.text', data.Variant7)
                .get('[data-test="text:price:primary"]').eq(6).should('contain.text', data.PC2361WRXAWDTs)

            //SPORTSWAGON TAB
                .get('[data-test="tab:switch_marketingCategory:Sportswagon"]').click()
                .get('[data-test="image:variant:prev"]').click()


            //SPORTSWAGON VARIANTS

                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant8)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361WRXAWDSporstwagon)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant9)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361WRXAWD50yrsSESportswagon)

                .get('[data-test="text:trimLevel:title"]').eq(2).should('have.text', data.Variant10)
                    .get('[data-test="text:price:primary"]').eq(2).should('contain.text', data.PC2361WRXAWDGTSporstwagon)

                .get('[data-test="image:variant:next"]').click()

                .get('[data-test="text:trimLevel:title"]').eq(3).should('have.text', data.Variant11)
                    .get('[data-test="text:price:primary"]').eq(3).should('contain.text', data.PC2361WRXAWDTsSporstwagon)

            //SEDAN TAB
                .get('[data-test="tab:switch_marketingCategory:Sedan"]').click()
                .get('[data-test="image:variant:prev"]').click()



              })

              })
        })
     })

                