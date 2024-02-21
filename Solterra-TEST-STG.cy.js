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

         
//POSTCODE 0800
                cy.get('.MuiOutlinedInput-input')
                    .type('0800')

            //Next Button
                .get('[data-test="button:postcode"]').click()
                .get('[data-test="button:selectDealer"]').click()

                .get('[data-test="button:build"]').eq(6).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC800SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC800SolterraAWDTouring)


//POSTCODE 2000

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2000SolterraAWDTouring)


     
//POSTCODE 2250


                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2250').wait(100)
                
                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2250SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2250SolterraAWDTouring)




//POSTCODE 2264

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2264').wait(100)
                
                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2264SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2264SolterraAWDTouring)

 //POSTCODE 2311

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2311').wait(100)
                
                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2311SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2311SolterraAWDTouring)
      


 //POSTCODE 2361

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('2361').wait(100)
                
                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC2361SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC2361SolterraAWDTouring)
      


              })
              })
        })
     })

                