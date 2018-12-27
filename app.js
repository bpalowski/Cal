//listen for a submit being sent
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);

//Calculate results
function calculateResults(e) {
  e.preventDeault();
}
