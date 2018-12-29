//listen for a submit being sent
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);

//Calculate results
function calculateResults(e) {
  console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }

  e.preventDefault();
}
// Show Error Function
function showError(error) {
  const errorDiv = document.createElement("div");

  // get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class bootstrap alert
  errorDiv.className = "alert alert-danger";
  //Create text node append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading start with parent Card the grab the element errorDiv and insert into the before with heading.
  card.insertBefore(errorDiv, heading);

  // Clear error after 3sec
  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
