describe('Subaru Web Aplication', () => {
    context('Pricing', () => {
        it('STG - Pricing Config Page', () => {
            cy
                .visit("https://www.oem-staging.subaru.com.au/crosstrek", {
                //Comment out for prod verification
                auth: {
                    username: 'subaru',
                    password: 'tzDntDgW9HNW'
                },
                })
            cy
                .fixture('CrosstrekPricing').then( (data)=>{
           
            //Validate Crosstrek Variants
           cy .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant1)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant2)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant3)
           
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L')

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                    .should('be.visible').should('have.text', data.Variant5)

//POSTCODE 0800

            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)
            //Type Postcode
            .get('.css-1hwfws3').type('0800')

            //Select first Item on Dropdown list
            .get('#react-select-2-option-0').click({ force: true }).wait(2000)

            //Click Show Prices Button
            .get('.fCDXQZgm7_ > .flex').click({ force: true }).wait(100)

            //Validate Potcode 0800 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800CrosstrekAWD20R)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC800CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2000')

            //Select first Item on Dropdown list
            .get('#react-select-3-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2000 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000CrosstrekAWD20R)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2000CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2250
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2250')

            //Select first Item on Dropdown list
            .get('#react-select-4-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2250 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2250CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2264
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2264')

            //Select first Item on Dropdown list
            .get('#react-select-5-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2264 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264CrosstrekAWD20R)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2264CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2311
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2311')

            //Select first Item on Dropdown list
            .get('#react-select-6-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2311 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2311CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2361
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2361')

            //Select first Item on Dropdown list
            .get('#react-select-7-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2361 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2361CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//PC2500
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2500')

            //Select first Item on Dropdown list
            .get('#react-select-8-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2500 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2500CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()

//PC2640
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2640')

            //Select first Item on Dropdown list
            .get('#react-select-9-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2640 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2640CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//PC2620
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2620')

            //Select first Item on Dropdown list
            .get('#react-select-10-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2620 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620CrosstrekAWDHybridL)

          .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2620CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()
               

//PC2606
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('2606')

            //Select first Item on Dropdown list
            .get('#react-select-11-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 2606 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC2606CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//3000
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('3000')

            //Select first Item on Dropdown list
            .get('#react-select-12-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 3000 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3000CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


//3024
            //Click Postcode selector
            .get('._imuZ_BAsi')
                .click().wait(100)

            //Type Postcode
            .get('.css-1hwfws3').type('3024')

            //Select first Item on Dropdown list
            .get('#react-select-13-option-0').click()

            //Click Show Prices Button
            .get('.fCDXQZgm7_').click().wait(100)

            //Validate Potcode 3024 Prices
            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8').should('be.visible').should('have.text', data.Variant1).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024CrosstrekAWD20L)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(2) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant2).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024CrosstrekAWD20R)


            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(3) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant3).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024CrosstrekAWD20S)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(4) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', 'Crosstrek AWD Hybrid L').click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024CrosstrekAWDHybridL)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(5) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant5).click()
            .get('.__Nn_xs2UF > span').eq(0).should('have.text', data.PC3024CrosstrekAWDHybridS)

            .get('.NqT14GO6Kw > .vN1XRjaZt4 > .Y_y3GrOKW7 > :nth-child(1) > ._ZN04VUxw8')
                .should('be.visible').should('have.text', data.Variant1).click()


                   
                })
            })
        })
    })
