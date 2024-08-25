var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// URL da API para obter taxas de câmbio em relação ao USD
var API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';
// Função para buscar as taxas de câmbio
function fetchExchangeRates() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_URL)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erro ao obter taxas de câmbio:', error_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Função para preencher os selects com as moedas disponíveis
function populateCurrencySelectors() {
    return __awaiter(this, void 0, void 0, function () {
        var fromCurrencySelect, toCurrencySelect, data, currencies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fromCurrencySelect = document.getElementById('from-currency');
                    toCurrencySelect = document.getElementById('to-currency');
                    return [4 /*yield*/, fetchExchangeRates()];
                case 1:
                    data = _a.sent();
                    if (data) {
                        currencies = Object.keys(data.rates);
                        currencies.forEach(function (currency) {
                            var option1 = document.createElement('option');
                            option1.value = currency;
                            option1.text = currency;
                            fromCurrencySelect.appendChild(option1);
                            var option2 = document.createElement('option');
                            option2.value = currency;
                            option2.text = currency;
                            toCurrencySelect.appendChild(option2);
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Função para converter o valor entre duas moedas
function convertCurrency() {
    return __awaiter(this, void 0, void 0, function () {
        var amountInput, fromCurrencySelect, toCurrencySelect, resultDiv, amount, fromCurrency, toCurrency, data, fromRate, toRate, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amountInput = document.getElementById('amount');
                    fromCurrencySelect = document.getElementById('from-currency');
                    toCurrencySelect = document.getElementById('to-currency');
                    resultDiv = document.getElementById('result');
                    amount = parseFloat(amountInput.value);
                    fromCurrency = fromCurrencySelect.value;
                    toCurrency = toCurrencySelect.value;
                    if (isNaN(amount) || amount <= 0) {
                        alert('Por favor, insira um valor válido.');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetchExchangeRates()];
                case 1:
                    data = _a.sent();
                    if (data) {
                        fromRate = data.rates[fromCurrency];
                        toRate = data.rates[toCurrency];
                        if (fromRate && toRate) {
                            result = (amount / fromRate) * toRate;
                            resultDiv.innerText = "Resultado: ".concat(result.toFixed(2), " ").concat(toCurrency);
                        }
                        else {
                            resultDiv.innerText = 'Conversão não suportada.';
                        }
                    }
                    else {
                        resultDiv.innerText = 'Erro ao obter taxa de câmbio.';
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Adicionar evento de clique para o botão de conversão
document.getElementById('convert-button').addEventListener('click', convertCurrency);
// Popula os selects ao carregar a página
window.addEventListener('load', populateCurrencySelectors);
