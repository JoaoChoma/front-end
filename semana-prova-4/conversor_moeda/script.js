const amountInput = document.getElementById('amountInput');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const result = document.getElementById('result');

async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === '') {
        alert('Por favor, insira um valor para converter.');
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const exchangeRate = data.rates[to];
        if (exchangeRate) {
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
        } else {
            result.textContent = 'As moedas selecionadas não são suportadas.';
        }
    } catch (error) {
        result.textContent = 'Ocorreu um erro ao converter a moeda. Por favor, tente novamente mais tarde.';
    }
}
