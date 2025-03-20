let totalCalories = 0;

function addEntry() {
    let food = document.getElementById("food").value;
    let calories = parseInt(document.getElementById("calories").value);

    if (food && calories > 0) {
        let entry = document.createElement("li");
        entry.textContent = `${food}: ${calories} cal`;
        document.getElementById("entries").appendChild(entry);

        totalCalories += calories;
        document.getElementById("totalCalories").textContent = totalCalories;
    } else {
        alert("Please enter valid food and calorie values.");
    }
}
