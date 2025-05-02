const MetricDiv = document.getElementById("MetricDiv");
const ImperialDiv = document.getElementById("ImperialDiv");

document.getElementById('Metric').addEventListener("change", () => {
    MetricDiv.classList.remove('hidden');
    ImperialDiv.classList.add('hidden');
});

document.getElementById("Imperial").addEventListener("change", () => {
    ImperialDiv.classList.remove('hidden');
    MetricDiv.classList.add('hidden');
});

document.getElementById("bmiBtn").addEventListener("click", (e) => {
    e.preventDefault(); // ফর্ম সাবমিট হওয়া আটকানো হলো

    const isMetric = document.getElementById("Metric").checked;

    let bmi = 0;

    if (isMetric) {
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        if (!height || !weight || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight (Metric)");
            return;
        }

        bmi = weight / ((height / 100) ** 2);
    } else {
        const feet = parseFloat(document.getElementById('heightFt').value) || 0;
        const inches = parseFloat(document.getElementById('heightIn').value) || 0;
        const stones = parseFloat(document.getElementById('weightSt').value) || 0;
        const pounds = parseFloat(document.getElementById('weightIbs').value) || 0;

        const totalInches = (feet * 12) + inches;
        const totalPounds = (stones * 14) + pounds;
        if (totalInches === 0 || totalPounds === 0) {
            alert("Please enter valid height and weight (Imperial)");
            return;
        }
        bmi = (totalPounds / (totalInches * totalInches)) * 703;
    }
    document.getElementById("redeld").innerText = bmi.toFixed(1);
});
