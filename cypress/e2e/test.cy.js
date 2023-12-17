/// <reference types="Cypress" />

describe("My First Test", () => {
  // it("Visits the our Application", () => {
  //   cy.visit("https://www.google.com/");
  //   cy.get('#APjFqb').type("react router dom");
  //   cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').clear();
  // });

  // cy.get('.MuiInputBase-input').type("{enter}") entering
  it("Ecommerce Application", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(3000);
    cy.get(":nth-child(2) > :nth-child(1) > .Nav_nav_text__5zKNd").trigger(
      "mouseover"
    );
    cy.wait(3000);
    cy.get(".mega_menu_item").contains("Jackets").click();
    cy.wait(2000);
    cy.get(
      'div[class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-mdjaic-MuiPaper-root-MuiCard-root"]'
    ).should("have.length", 30);
    cy.get(
      'div[class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-mdjaic-MuiPaper-root-MuiCard-root"]'
    ).eq(2).click();
    cy.get('select[style="width: 300px; height: 45px; margin: 0px 0px 0px 18px; border: solid 2px var(--secondary); border-radius: 20px; padding: 10px; font-size: medium;"]').select('UK').should('have.value', 'uk');
    cy.get('[style="width: 120px; height: 43px; background-color: var(--secondary); color: var(--white); margin-top: 20px; margin-left: 40px; border-radius: 50px; text-transform: none; margin-bottom: 20px;"]').contains(/ADD To CART/i).click();
    cy.get('[style="width: 120px; height: 43px; background-color: var(--secondary); color: var(--white); margin-top: 20px; margin-left: 40px; border-radius: 50px; text-transform: none; margin-bottom: 20px;"]').contains("Go to Cart").click();
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlinedPrimary MuiButtonGroup-lastButton css-16kmygl-MuiButtonBase-root-MuiButton-root"]').click();
    cy.get('img[alt="Logo"]').then(function(logoElement){
      cy.log(logoElement);
      console.log("Image")
      // difference b/w console.log() and cy.log() => it will print in your test editor, console.log printed in your console only.
    })
    // alias as('ProductLocator') use like cy.get(@ProductLocator) alternative name, code optimization
  });
});
