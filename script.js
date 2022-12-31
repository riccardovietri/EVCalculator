function calculateTaxCredit() {
    // Get the form values
    var model = document.getElementById("model").value;
    var make = document.getElementById("make").value;
    var price = document.getElementById("price").value;

    // Calculate the tax credit amount
    var taxCreditAmount = 0;
    if (model == "suv" && price <= 80000) {
      taxCreditAmount = 7500;
    } else if (model == "other" && price <= 55000) {
      taxCreditAmount = 7500;
    }

    // Display the tax credit amount
    var message = "You are not eligible for the federal tax credit.";
    if (taxCreditAmount > 0) {
      message = "You are eligible for a tax credit of $" + taxCreditAmount + ".";
    }
    alert(message);
  }