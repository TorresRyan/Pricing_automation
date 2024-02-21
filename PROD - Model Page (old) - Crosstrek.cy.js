describe('Crosstrek Model Page Pricing', () => {
it('Postcode (0800,2000,2250,2264,2311,2361)', () => {
           cy
                        .visit('https://www.subaru.com.au/crosstrek/')
                        .wait(1000)
        
                    cy.fixture('CrosstrekPricing').then( (data)=>{
//POSTCODE 0800

             //Click Postcode selector
        cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('0800')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC800).should('be.visible')
 cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
         .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20L)

     .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
         .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20R)

     .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
         .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('[data-controls="next"]',{withinSubject:null}).click()
     .get('[data-controls="next"]',{withinSubject:null}).click()


     .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
         .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWDHybridL)

     .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
         .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC800CrosstrekAWDHybridS)


         .get('[data-controls="prev"]',{withinSubject:null}).click()
         .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 2000

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2000')

         //Select first Item on Dropdown list
         .get('#react-select-3-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2000).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 2250

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2250')

         //Select first Item on Dropdown list
         .get('#react-select-4-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2250).should('be.visible')
         cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
                 .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20L)
     
             .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
                 .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20R)
     
             .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
                 .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWD20S)
     
             //Click Arrow right in Carousel
             .get('[data-controls="next"]',{withinSubject:null}).click()
             .get('[data-controls="next"]',{withinSubject:null}).click()
     
     
             .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
                 .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWDHybridL)
     
             .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
                 .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2250CrosstrekAWDHybridS)
     
     
                 .get('[data-controls="prev"]',{withinSubject:null}).click()
                 .get('[data-controls="prev"]',{withinSubject:null}).click()


//POSTCODE 2264

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2264')

         //Select first Item on Dropdown list
         .get('#react-select-5-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2264).should('be.visible')
         cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
                 .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20L)
     
             .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
                 .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20R)
     
             .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
                 .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWD20S)
     
             //Click Arrow right in Carousel
             .get('[data-controls="next"]',{withinSubject:null}).click()
             .get('[data-controls="next"]',{withinSubject:null}).click()
     
     
             .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
                 .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWDHybridL)
     
             .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
                 .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2264CrosstrekAWDHybridS)
     
     
                 .get('[data-controls="prev"]',{withinSubject:null}).click()
                 .get('[data-controls="prev"]',{withinSubject:null}).click()


//POSTCODE 2311

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2311')

         //Select first Item on Dropdown list
         .get('#react-select-6-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)

         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2311).should('be.visible')
         cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
                 .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20L)
     
             .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
                 .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20R)
     
             .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
                 .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWD20S)
     
             //Click Arrow right in Carousel
             .get('[data-controls="next"]',{withinSubject:null}).click()
             .get('[data-controls="next"]',{withinSubject:null}).click()
     
     
             .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
                 .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWDHybridL)
     
             .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
                 .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2311CrosstrekAWDHybridS)
     
     
                 .get('[data-controls="prev"]',{withinSubject:null}).click()
                 .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 2361

             //Click Postcode selector
             cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2361')

         //Select first Item on Dropdown list
         .get('#react-select-7-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2361).should('be.visible')
         cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
                 .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20L)
     
             .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
                 .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20R)
     
             .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
                 .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWD20S)
     
             //Click Arrow right in Carousel
             .get('[data-controls="next"]',{withinSubject:null}).click()
             .get('[data-controls="next"]',{withinSubject:null}).click()
     
     
             .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
                 .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWDHybridL)
     
             .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
                 .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2361CrosstrekAWDHybridS)
     
     
                 .get('[data-controls="prev"]',{withinSubject:null}).click()
                 .get('[data-controls="prev"]',{withinSubject:null}).click()
         

                })})
            
it('Postcode 2500,2640,2620,2606,3000)', () => {            
                cy
                .visit('https://www.subaru.com.au/crosstrek/')
                .wait(1000)

            cy.fixture('CrosstrekPricing').then( (data)=>{
            
  //POSTCODE 2500

             //Click Postcode selector
        cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('2500')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2500).should('be.visible')
 cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
         .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500CrosstrekAWD20L)

     .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
         .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500CrosstrekAWD20R)

     .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
         .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('[data-controls="next"]',{withinSubject:null}).click()
     .get('[data-controls="next"]',{withinSubject:null}).click()


     .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
         .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500CrosstrekAWDHybridL)

     .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
         .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2500CrosstrekAWDHybridS)


         .get('[data-controls="prev"]',{withinSubject:null}).click()
         .get('[data-controls="prev"]',{withinSubject:null}).click()
          

//POSTCODE 2640

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2640')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2640).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2640CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()            
   
            
 //POSTCODE 2620

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2620')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2620).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2620CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()            
                           
            
 //POSTCODE 2606

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('2606')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC2606).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC2606CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()            
   
            
//POSTCODE 3000

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('3000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC3000).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()                      

            })})

it('Postcode (3024,3063,3630,4000,4700)', () => {            
                cy
                .visit('https://www.subaru.com.au/crosstrek/')
                .wait(1000)

            cy.fixture('CrosstrekPricing').then( (data)=>{
            
//POSTCODE 3024

             //Click Postcode selector
        cy.get('.SB3ardDru1')
             .click().wait(100)
         //Type Postcode
         .get('.css-1l88fgy').type('3024')

         //Select first Item on Dropdown list
         .get('#react-select-2-option-0').click()

         //Click Show Prices Button
         .get('.fCDXQZgm7_').click().wait(100)


         cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC3024).should('be.visible')
 cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
         .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20L)

     .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
         .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20R)

     .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
         .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWD20S)

     //Click Arrow right in Carousel
     .get('[data-controls="next"]',{withinSubject:null}).click()
     .get('[data-controls="next"]',{withinSubject:null}).click()


     .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
         .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWDHybridL)

     .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
         .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3024CrosstrekAWDHybridS)


         .get('[data-controls="prev"]',{withinSubject:null}).click()
         .get('[data-controls="prev"]',{withinSubject:null}).click()
          
//POSTCODE 3063

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('3063')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC3063).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3063CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 3630

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('3630')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC3630).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC3630CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 4000

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('4000')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC4000).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()


//POSTCODE 4700

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('4700')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC4700).should('be.visible')
    cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC4700CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()
        })})

it('Postcode (5000,5606,6000,6330,7000)', () => {            
            cy
            .visit('https://www.subaru.com.au/crosstrek/')
            .wait(1000)

        cy.fixture('CrosstrekPricing').then( (data)=>{
        
//POSTCODE 5000

                //Click Postcode selector
            cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('5000')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC5000).should('be.visible')
        cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()

//POSTCODE 5606

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('5606')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC5606).should('be.visible')
        cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC5606CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()

 //POSTCODE 6000

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('6000')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC6000).should('be.visible')
        cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.MPC6000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()           


//POSTCODE 6330

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('6330')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC6330).should('be.visible')
        cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.MPC6330CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC6330CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()       
            
            
//POSTCODE 7000

                //Click Postcode selector
                cy.get('.SB3ardDru1')
                .click().wait(100)
            //Type Postcode
            .get('.css-1l88fgy').type('7000')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)


            cy.get('#tns1-item0 > .t62LocationText',{withinSubject:null}).contains(data.MPC7000).should('be.visible')
        cy  .get('#tns1-item0 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant1).should('be.visible').scrollIntoView()
            .get('#tns1-item0 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000CrosstrekAWD20L)

        .get('#tns1-item1 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant2).should('be.visible').scrollIntoView()
            .get('#tns1-item1 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000CrosstrekAWD20R)

        .get('#tns1-item2 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant3).should('be.visible').scrollIntoView()
            .get('#tns1-item2 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000CrosstrekAWD20S)

        //Click Arrow right in Carousel
        .get('[data-controls="next"]',{withinSubject:null}).click()
        .get('[data-controls="next"]',{withinSubject:null}).click()


        .get('#tns1-item3 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant4).should('be.visible').scrollIntoView()
            .get('#tns1-item3 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000CrosstrekAWDHybridL)

        .get('#tns1-item4 > .t62SlideHeading',{withinSubject:null}).contains(data.Variant5).should('be.visible').scrollIntoView()
            .get('#tns1-item4 > .t62ModelPriceWrapper > .t62ModelPrice',{withinSubject:null}).should('be.visible').should('have.text', data.PC7000CrosstrekAWDHybridS)


            .get('[data-controls="prev"]',{withinSubject:null}).click()
            .get('[data-controls="prev"]',{withinSubject:null}).click()                    

})
})
})

        



            