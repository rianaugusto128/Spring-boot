document.getElementById('clcForm').addEventListener('submit', function (e) {
    e.preventDefault(); // evita recarregamento da página

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value; // corrigido!

    let resultado = "";
    let erro = "";



    try {
        const response = await fetch('https://localhost:8080/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                num1: num1,
                num2: num2,
                operacao: operacao
            })  
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data.erro) {
            document.getElementById('erro').textContent = data.erro;
        } else {
            document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado;
        }
    } catch (err) {
        document.getElementById('erro').textContent = 'Erro: ' + err.message;
    }

    //  switch (operacao) {
    //      case "somar":
    //          resultado = num1 + num2;
    //          break;
    //
    //      case "subtrair":
    //          resultado = num1 - num2;
    //          break;
    //
    //      case "multiplicar":
    //          resultado = num1 * num2;
    //          break;
    //
    //      case "dividir":
    //          if (num2 === 0) {
    //              erro = "Divisão por zero não permitida";
    //          } else {
    //              resultado = num1 / num2;
    //          }
    //          break;
    //
    //      default:
    //          erro = "Opção inválida";
    //  }


   // const divResultado = document.getElementById('resultado');
    //const divErro = document.getElementById('erro');

    //if (erro) {
    //    divErro.textContent = erro;
    //    divResultado.textContent = "";
//} else {
   //     divResultado.textContent = "já existe um usuário com esta conta";
       // divErro.textContent = "";
   /// }
