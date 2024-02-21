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

         
//POSTCODE 3063
                cy.get('.MuiOutlinedInput-input')
                    .type('3063')

            //Next Button
                .get('[data-test="button:postcode"]').click()
                .get('[data-test="button:selectDealer"]').click()

                .get('[data-test="button:build"]').eq(6).click()


            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3063SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3063SolterraAWDTouring)


//POSTCODE 3630

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('3630').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC3630SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC3630SolterraAWDTouring)
     
//POSTCODE 4000

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('4000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4000SolterraAWDTouring)

//POSTCODE 4700

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('4700').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC4700SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC4700SolterraAWDTouring)

 //POSTCODE 5000

                .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('5000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5000SolterraAWDTouring)
      


 //POSTCODE 5606

            .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('5606').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC5606SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC5606SolterraAWDTouring)
      

 //POSTCODE 6000

            .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('6000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6000SolterraAWDTouring)
      

 //POSTCODE 6330

            .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('6330').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC6330SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC6330SolterraAWDTouring)
      
 //POSTCODE 7000

            .get('[data-test="label:postcode:label"]').click()
                .get('.MuiOutlinedInput-input').click().type('7000').wait(100)

                cy.get('[data-test="button:postcode"]',{withinSubject:null}).click()
                .get('[data-test="button:selectDealer"]',{withinSubject:null}).click()

            //VALIDATE Solterra VARIANTS
                .get('[data-test="text:trimLevel:title"]').eq(0).should('have.text', data.Variant1)
                    .get('[data-test="text:price:primary"]').eq(0).should('contain.text', data.PC7000SolterraAWD)
            
                .get('[data-test="text:trimLevel:title"]').eq(1).should('have.text', data.Variant2)
                    .get('[data-test="text:price:primary"]').eq(1).should('contain.text', data.PC7000SolterraAWDTouring)
      

              })
              })
        })
     })

                