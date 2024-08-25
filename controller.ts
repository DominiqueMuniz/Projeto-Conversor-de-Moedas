// URL da API para obter taxas de câmbio em relação ao USD
const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

interface ExchangeRates {
  rates: { [key: string]: number };
}

// Função para buscar as taxas de câmbio
async function fetchExchangeRates(): Promise<ExchangeRates | null> {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter taxas de câmbio:', error);
    return null;
  }
}

// Função para preencher os selects com as moedas disponíveis
async function populateCurrencySelectors() {
  const fromCurrencySelect = document.getElementById('from-currency') as HTMLSelectElement;
  const toCurrencySelect = document.getElementById('to-currency') as HTMLSelectElement;

  const data = await fetchExchangeRates();
  
  if (data) {
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      option1.value = currency;
      option1.text = currency;
      fromCurrencySelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = currency;
      option2.text = currency;
      toCurrencySelect.appendChild(option2);
    });
  }
}

// Função para converter o valor entre duas moedas
async function convertCurrency() {
  const amountInput = document.getElementById('amount') as HTMLInputElement;
  const fromCurrencySelect = document.getElementById('from-currency') as HTMLSelectElement;
  const toCurrencySelect = document.getElementById('to-currency') as HTMLSelectElement;
  const resultDiv = document.getElementById('result') as HTMLDivElement;

  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  const data = await fetchExchangeRates();
  if (data) {
    const fromRate = data.rates[fromCurrency];
    const toRate = data.rates[toCurrency];

    if (fromRate && toRate) {
      const result = (amount / fromRate) * toRate;
      resultDiv.innerText = `Resultado: ${result.toFixed(2)} ${toCurrency}`;
    } else {
      resultDiv.innerText = 'Conversão não suportada.';
    }
  } else {
    resultDiv.innerText = 'Erro ao obter taxa de câmbio.';
  }
}

// Adicionar evento de clique para o botão de conversão
document.getElementById('convert-button')!.addEventListener('click', convertCurrency);
// Popula os selects ao carregar a página
window.addEventListener('load', populateCurrencySelectors);
