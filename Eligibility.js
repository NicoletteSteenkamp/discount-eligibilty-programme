function checkEligibility() {
  let age = parseInt(document.getElementById("age").value);
  let isMember = document.getElementById("membership").checked;

  let resultMessage = "";

  if (age >= 65) {
    resultMessage = "You are eligible for a Senior Discount🎁!";
  } else if (age >= 18 && isMember) {
    resultMessage = "You are eligible for a Member Discount💃!";
  } else {
    resultMessage = "Sorry, you are not eligible for any discount😞";
  }

  let resultDiv = document.getElementById("result");
  resultDiv.textContent = resultMessage;
}
