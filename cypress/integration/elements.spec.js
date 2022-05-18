import FormPage from "../pageObjects/FormPage";

// Final task in Automation testing
context("Elements scenarions", () => {
  context("Automation practice form", () => {
    it("Filling practice form", () => {
      FormPage.visit();
      cy.fixture("formData").then((data) => {
        //   Data input 
        FormPage.firstName.type(data.name);
        FormPage.lastName.type(data.lastName);
        FormPage.email.type(data.email);
        FormPage.controlSelections.contains(data.gender).click();
        FormPage.userNum.type(data.mobile);
        FormPage.dateOfBirth.click();
        FormPage.selectYear.select("1930");
        FormPage.selectMonth.select("February");
        FormPage.selectDay.click({ force: true });
        FormPage.subjectField.type(data.subject + "{enter}");
        FormPage.controlSelections.contains(data.hobby).click();
        FormPage.imgUpload.selectFile(data.imagePath);
        FormPage.address.type(data.currentAddress);
        FormPage.stateSelect.type(data.state + "{enter}");
        FormPage.citySelect.type(data.city + "{enter}");
        FormPage.submitBtn.click();

        // Validation
        FormPage.table
          .should("contain", data.name)
          .should("contain", data.lastName)
          .should("contain", data.email)
          .should("contain", data.gender)
          .should("contain", data.mobile)
          .should("contain", data.subject)
          .should("contain", data.hobby)
          .should("contain", data.currentAddress)
          .should("contain", data.state)
          .should("contain", data.city)
          .should("contain", data.imagePath.split("/")[2])
          .should("contain", "28 February,1930");
        FormPage.closeModal.click();
      });
    });
  });
});
