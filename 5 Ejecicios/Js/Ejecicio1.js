function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius-input").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `${celsius}°C es igual a ${fahrenheit.toFixed(2)}°F`;
}

function countWords() {
    const paragraph = document.getElementById("paragraph-input").value.trim();
    const wordCount = paragraph.split(/\s+/).length;
    document.getElementById("word-count").textContent = `El párrafo contiene ${wordCount} palabras.`;
}

function calculateAge() {
    const birthYear = parseInt(document.getElementById("birth-year-input").value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById("age-result").textContent = `Tu edad es ${age} años.`;
}

function convertToCurrency() {
    const dollarAmount = parseFloat(document.getElementById("dollar-input").value);
    const conversionRate = 0.85; // 1 USD = 0.85 EUR
    const euroAmount = dollarAmount * conversionRate;
    document.getElementById("conversion-result").textContent = `${dollarAmount} USD es igual a ${euroAmount.toFixed(2)} EUR.`;
}

function convertToUppercase() {
    const inputText = document.getElementById("text-input").value;
    document.getElementById("transformed-text").textContent = inputText.toUpperCase();
}

function convertToLowercase() {
    const inputText = document.getElementById("text-input").value;
    document.getElementById("transformed-text").textContent = inputText.toLowerCase();
}