var weight, height, measure, error;

function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let measure = "";
    let error = "Please enter valid positive values";

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("Results").innerHTML = error;
        return;
    }

    
    let heightInMeters = height / 100;
    let BMI = weight / (heightInMeters * heightInMeters);
    BMI = BMI.toFixed(2); 

    
    if (BMI <= 18.4) {
        measure = `Your BMI is ${BMI} kg/m², which means you are Underweight.`;
    } else if (BMI <= 24.9) {
        measure = `Your BMI is ${BMI} kg/m², which means you are Normal.`;
    } else if (BMI <= 29.9) {
        measure = `Your BMI is ${BMI} kg/m², which means you are Overweight.`;
    } else {
        measure = `Your BMI is ${BMI} kg/m², which means you are Obese.`;
    }

    
    document.getElementById("Results").innerHTML = `
        Weight: ${weight} kg<br>
        Height: ${height} cm<br>
        ${measure}
    `;
}

