document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('clcForm');
    const swapButton = document.getElementById('swapButton');
    const submitButton = document.getElementById('submitButton');
    const deSelect = document.getElementById('de');
    const paraSelect = document.getElementById('para');
    const resultadoDiv = document.getElementById('resultado');
    const erroDiv = document.getElementById('erro');
    const convertedValue = document.getElementById('convertedValue');
    const exchangeRate = document.getElementById('exchangeRate');

    // URL base do seu backend Spring Boot
    const API_BASE_URL = 'http://localhost:8080/api'; // Altere para a URL do seu backend

    // Função para obter o símbolo da moeda
    function getCurrencySymbol(code) {
        const symbols = {
            'USD': 'US$',
            'EUR': '€',
            'BRL': 'R$',
            'GBP': '£',
            'JPY': '¥'
        };
        return symbols[code] || code;
    }

    // Função para formatar o valor monetário
    function formatCurrency(value, currencyCode) {
        const symbol = getCurrencySymbol(currencyCode);
        return `${symbol} ${parseFloat(value).toFixed(2)}`;
    }

    // Função para trocar as moedas selecionadas
    swapButton.addEventListener('click', function () {
        const deValue = deSelect.value;
        const paraValue = paraSelect.value;

        if (deValue && paraValue) {
            deSelect.value = paraValue;
            paraSelect.value = deValue;
        }
    });

    // Função para mostrar loading
    function showLoading() {
        submitButton.disabled = true;
        submitButton.innerHTML = '<div class="loading-spinner"></div><span>Convertendo...</span>';
    }

    // Função para esconder loading
    function hideLoading() {
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Converter</span>';
    }

    // Função para fazer a requisição para o Spring Boot
    async function converterMoeda(valor, de, para) {
        try {
            const response = await fetch(`${API_BASE_URL}/converter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    valor: valor,
                    moedaOrigem: de,
                    moedaDestino: para
                })
            });

            if (!response.ok) {
                throw new Error('Erro na conversão');
            }

            return await response.json();
        } catch (error) {
            throw new Error('Erro ao conectar com o servidor');
        }
    }

    // Processar o formulário
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Limpar mensagens anteriores
        erroDiv.textContent = '';
        resultadoDiv.style.display = 'none';

        // Obter valores do formulário
        const valor = parseFloat(document.getElementById('num1').value);
        const de = deSelect.value;
        const para = paraSelect.value;

        // Validações
        if (!valor || valor <= 0) {
            erroDiv.textContent = 'Por favor, insira um valor válido maior que zero.';
            return;
        }

        if (!de || !para) {
            erroDiv.textContent = 'Por favor, selecione as moedas de origem e destino.';
            return;
        }

        if (de === para) {
            erroDiv.textContent = 'As moedas de origem e destino não podem ser iguais.';
            return;
        }

        // Mostrar loading
        showLoading();

        try {
            // Fazer requisição para o Spring Boot
            const resultado = await converterMoeda(valor, de, para);

            // Exibir resultado
            convertedValue.textContent = formatCurrency(resultado.valorConvertido, para);
            exchangeRate.textContent = `Taxa de câmbio: 1 ${de} = ${resultado.taxaCambio.toFixed(4)} ${para}`;

            resultadoDiv.style.display = 'flex';
        } catch (error) {
            erroDiv.textContent = error.message;
        } finally {
            hideLoading();
        }
    });
});