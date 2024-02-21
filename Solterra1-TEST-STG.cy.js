describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
            .visit('https://au-ecom-preprod.inchcapedigital.com/au/sub-dis/cms/spc' , {
                //Comment out for prod verification
                auth: {
                    username: 'x15user',
                    password: '29D6HCuZsqPi*iX@$91o84'
                },
                 })

            cy.fixture('SolterraPricing').then( (data)=>{

         
//POSTCODE 2500
                cy.get('.MuiOutlinedInput-input')
                    .type('2500')

            //Next Button
                .get('[data-test="button:postcode"]').click()
                .get('[data-test="button:selectDealer"]').click()

                .get('[data-test="button:build"]').eq(6).click()



            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2500SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2500SolterraAWDTouring)


//POSTCODE 2640

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2640').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2640SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2640SolterraAWDTouring)
     
//POSTCODE 2620


                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2620').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2620SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2620SolterraAWDTouring)

//POSTCODE 2606

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2606').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2606SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2606SolterraAWDTouring)

 //POSTCODE 3000

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('3000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()
                
            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3000SolterraAWDTouring)
      


 //POSTCODE 3024
                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('3024').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3024SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3024SolterraAWDTouring)
      


              })
              })
        })
     })

                