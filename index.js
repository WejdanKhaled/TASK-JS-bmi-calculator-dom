function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const heightInMeters = height / 100;
  const BMI = weight / (heightInMeters*heightInMeters);
  alert(BMI);

  if (BMI < 18.5) {
    alert("Underweight");
  } else if (BMI >=18.5 && BMI < 25) {
    alert ("Healthy Weight");
  } else if (BMI >= 25 && BMI < 30) {
    alert ("Overwight");
  } else if (BMI >=30) {
    alert("Obesity")
  }
let age1 = 18;
if (age >= 18) { 
  console.log("yourwelcome")
} else if (age < 18) {
  console.log("youarenotwelcome")
}
}