let areas = [];

function adicionarArea() {
    const parede = parseFloat(document.getElementById('parede').value);
    const teto = parseFloat(document.getElementById('teto').value);

    if (isNaN(parede) || isNaN(teto) || parede <= 0 || teto <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const areaTotal = parede + teto;
    areas.push(areaTotal);

    document.getElementById('areas').innerHTML += `
        <p>Área adicionada: ${areaTotal.toFixed(2)} m²</p>
    `;

    document.getElementById('parede').value = '';
    document.getElementById('teto').value = '';
}

function calcularMaoDeObra() {
    if (areas.length === 0) {
        document.getElementById('resultado').innerText = "Nenhuma área adicionada.";
        return;
    }

    const precoM2 = parseFloat(document.getElementById('precoM2').value);

    if (isNaN(precoM2) || precoM2 <= 0) {
        alert("Por favor, insira um valor válido para o preço da mão de obra.");
        return;
    }

    const areaTotal = areas.reduce((acc, curr) => acc + curr, 0);
    const custoMaoDeObra = areaTotal * precoM2;

    document.getElementById('resultado').innerHTML = `
        Área Total: ${areaTotal.toFixed(2)} m²<br>
        Custo da Mão de Obra: R$ ${custoMaoDeObra.toFixed(2)}
    `;
}

function impressResultado() {
    const conteudo = document.querySelector('.container').innerHTML;
    const janelaImpressao = window.open('', '', 'height=700,width=700');
    janelaImpressao.document.write('<html><head><title>Imprimir Resultado</title>');
    janelaImpressao.document.write('</head><body >');
    janelaImpressao.document.write(conteudo);
    janelaImpressao.document.write('</body></html>');
    janelaImpressao.document.close();
    janelaImpressao.print();
}