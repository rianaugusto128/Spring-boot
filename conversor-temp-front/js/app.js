document.getElementById('clcForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    const erroDiv = document.getElementById('erro');
    const respostaDiv = document.getElementById('resultado');

    erroDiv.textContent = '';
    respostaDiv.textContent = '';

    try {
        const response = await fetch('http://localhost:8080/converter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                valor: num1,
                de: de,
                para: para
            })
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data.erro) {
            erroDiv.textContent = 'Erro: ' + data.erro;
        } else {
            respostaDiv.textContent = 'Resultado: ' + data.resultado;
        }
    } catch (err) {
        erroDiv.textContent = 'Erro: ' + err.message;
    }
});
