const foodInput = document.getElementById('foodInput');
const caloriesInput = document.getElementById('caloriesInput');
const foodList = document.getElementById('foodList');
const totalCalories = document.getElementById('totalCalories');

let total = 0;

function addFood() {
    const foodName = foodInput.value.trim();
    const foodCalories = parseInt(caloriesInput.value);

    if (foodName === '' || isNaN(foodCalories)) {
        alert('Por favor, preencha o alimento e as calorias corretamente.');
        return;
    }

    const foodItem = document.createElement('li');
    foodItem.textContent = `${foodName}: ${foodCalories} cal`;

    foodList.appendChild(foodItem);
    total += foodCalories;
    totalCalories.textContent = total;

    foodInput.value = '';
    caloriesInput.value = '';
}
