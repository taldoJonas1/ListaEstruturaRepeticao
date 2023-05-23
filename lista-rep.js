function exe1() {
    let conta = 1; let conta2 = 1
    let A, B, C, D, aux
    while (conta2 <= 5){
        A = Number(prompt('Informe A'))
        B = Number(prompt('Informe B'))
        C = Number(prompt('Informe C'))
        D = Number(prompt('Informe D'))
        let conta = 1
        while (conta <= 4){
            if (A>B) { aux = A; A = B; B = aux;}
            if (B>C) { aux = B; B = C; C = aux;}
            if (C>D) { aux = C; C = D; D = aux;}
            conta++
        }
        alert(`Crescente ${A}, ${B}, ${C} e ${D}`)
        alert(`Decrescente ${D}, ${C}, ${B} e ${A}`)
        conta2++
    }
}

function exe2() {
    let preco = 5.0; let qtde = 120; 
    const desconto = 200;
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>"
    while (preco >= 1){
        lucro = (preco * qtde) - desconto
        saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26

    }
    saida += "</table>"
    document.getElementById("tabela").innerHTML = saida
}

function exe3() {
    let idade;
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    let conta = 1 // contador do while
    while (conta <=8) {
        idade = Number(prompt(`Informe a idade ${conta}`))
        if ((idade >= 0) && (idade <= 15)){
            f1++ // f1 = f1 + 1
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if ((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++ // conta = conta + 1
    }
    // mostra o resultado
    // template string
    alert(`Fx1: ${f1} Fx2: ${f2} Fx3: ${f3} Fx4: ${f4} Fx5: ${f5}`)
    alert(`% Fx1: ${f1/8*100} %Fx5: ${f5/8*100}`)
}
function exe4() {
    let numero = Number(prompt(`Informe um número`))
    let conta = 0
    let resultado
    let saida = ""
    while(conta <= 10){
        resultado = numero * conta
        // acumulador
        saida = saida + `\n ${numero} X ${conta} = ${resultado}`
        conta++
    }
    alert(saida)
}

function exe5() {
    let conta1 = 1
    while (conta1 <= 10){
        let conta2 = 0
        let saida = "" 
        while (conta2 <= 10){
            saida = saida + `\n ${conta1} x ${conta2} = ${conta1*conta2}` 
            conta2++
        }
        alert(saida)
        conta1 ++
    }
}



function exe6() {
    let codigo
    let valor; let totalVista = 0;
    let conta = 1; let totalPrazo = 0;
    while (conta <= 5){
        codigo = prompt('Informe P ou V').toUpperCase()
        valor = Number(prompt('Informe valor'))
        if (codigo == 'P'){
            totalPrazo += valor
        }
        else if (codigo == 'V'){
            totalVista += valor
        }
        else {
            alert('Código inválido, valor não será considerado')
            //conta--
            continue // continua na próxima iteração
        }
        conta++
    }
    let total = totalVista + totalPrazo
    let valorParcela = totalPrazo / 3
    document.getElementById("result6").innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo} Total ${total} Primeira parcela ${valorParcela.toFixed(2)}`
}

function exe7() {
    let idade
    let peso
    let altura = 0
    let i50 = 0
    let s1 = 0
    let s2 = 0
    for ( cont = 1; cont <= 5; cont++){
        idade = prompt(`Insira a idade ${cont}`)
        peso = prompt(`Insira o peso (kg) ${cont}`)
        altura = prompt(`Insira a altura (cm) ${cont}`)
        if(idade < 50){
            i50 ++
        }
        if(idade <= 10 && idade >= 20){
            s1 = s1 + altura
        }
        if(peso > 40){
            s2++
        }
    }
    let pct = (s2 / 5) * 100
    let media = (s1/5)
    alert(`${i50} pessoas têm mais de 50 anos.`)
    alert(`A média das alturas das pessoas com idades entre 10 e 20 anos é ${media}`)
    alert(`${pct}% das pessoas pesam mais de 40 kg`)
}

function exe8() {
    let idade; let altura; let peso; let olhos; let cabelo
    let pessoas = 0
    let s1 = 0
    let s2 = 0
    let s3 = 0
    for ( cont = 1; cont <= 6; cont++){
        idade = prompt(`Insira a idade ${cont}`)
        peso = prompt(`Insira o peso (kg) ${cont}`)
        altura = prompt(`Insira a altura (cm) ${cont}`)
        olhos = prompt(`Insira a cor dos olhos da pessoa ${cont}`).toUpperCase
        cabelo = prompt(`Insira a cor do cabelo da pessoa ${cont}`).toUpperCase
        if(idade > 50 && peso <= 60){
            pessoas++
        }
        if(altura < 150){
            s1 = s1 + idade
        }
        if(olhos = "A"){
            s2++
        }
        if(cabelo = "R" && olhos != "A"){
            s3++
        }
    }
    let pct = (s3 / 6) * 100
    alert(`${pct}% das pessoas possuem olhos azuis.`)
    alert(`${s3} dos ruivos não pussuem olhos azuis.`)
}

function exe9() {
    let idade; let peso
    let altura = 0
    let s1 = 0
    let s2 = 0
    let s3 = 0
    for ( cont = 1; cont <= 10; cont++){
        idade = prompt(`Insira a idade ${cont}`)
        peso = prompt(`Insira o peso (kg) ${cont}`)
        altura = prompt(`Insira a altura (cm) ${cont}`)
        s1 = s1 + idade
        if(peso > 90 && altura < 150) {
            s2++
        }
        if(idade < 10 && ida > 30 && altura < 190) {
            s3++
        }
    }
    let pct = (s3 / 10) * 100
    let media = (s1 / 10)
    alert(`A média das idades é ${media}`)
    alert(`A quantidade de pessoas com mais de 1,50m e menos que 90kg é ${s2}`)
    alert(`${pct}% das pessoas entre 10 e 30 anos possuem menos que 1,90m.`)
}

function exe20() {
    let opcao
    let n1
    let n2
    let n3
    let p1
    let p2
    let p3
    let media

    do {
        opcao = Number (prompt("Menu de opções. \n1. Média aritimetica \n2. Média ponderada \n3. Sair"))
        switch (opcao) {
            case 1: alert("Opção 1 escolhida.")
            n1 = Number (prompt("Entre com a nota 1: "))
            n2 = Number (prompt("Entre com a nota 2: "))
            n3 = Number (prompt("Entre com a nota 3: "))
            media = ((n1 + n2 + n3)/3)
            alert(`A média do aluno foi ${media}`); break

            case 2: alert("Opção 2 escolhida.")
            n1 = Number (prompt("Entre com a nota 1: "))
            p1 = Number (prompt("Entre com o peso da nota 1: "))
            n2 = Number (prompt("Entre com a nota 2: "))
            p2 = Number (prompt("Entre com o peso da nota 2: "))
            n3 = Number (prompt("Entre com a nota 3: "))
            p3 = Number (prompt("Entre com o peso da nota 3: "))
            media = (((n1 * p1) + (n2 * p2) + (n3 * p3))/(p1 + p2 + p3))
            alert(`A média do aluno foi ${media}`); break

            case 3: alert("Programa encerrado"); break

            default: alert("Opção inválida")
        }
    } while (opcao != 3)
}

function exe21() {
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, brancos = 0
    let total, opcao
    
    do {
        opcao = Number (prompt('Escolha uma opção:  \nCandidato 1 = 1 \nCandidato 2 = 2 \nCandidato 3 = 3 \nCandidato 4 = 4 \nNulo = 5 \nBranco = 6 \nSair do programa = 0'))
        switch (opcao) {
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert("Votação encerrada.")
            default: alert("Opção inválida.")
        }
    } while (opcao != 0)

    total = cand1 + cand2 + cand3 + cand4 + nulos + brancos
    if (total > 0){
        alert(`${nulos/total*100}% de votos nulos.`)
        alert(`${brancos/total*100}% de votos brancos.`)
    }
    else {
        alert(`Nenhum voto computado.`)
    }
}

function exe23() {
    let salario, novo, ferias, dt, meses, opcao

    do {
        opcao = Number (prompt(`Escolha uma opção: \n1. Novo salário \n2. Férias \n3. Décimo Terceiro \n4. Sair`))
        switch (opcao){
            case 1: salario = Number (prompt(`Informe o salário.`))
            if ((salario >= 0) && (salario < 210)){
                novo = salario + salario*0.15
            }
            else if ((salario >= 210) && (salario <= 600)){
                novo = salario + salario*0.1
            }
            else if (salario > 600){
                novo = salario + salario*0.05
            }
            else{
                alert(`Salário negativo`); break
            }
            alert(`O novo salário será ${novo}`); break

            case 2: salario = Number (prompt(`Informe o salário.`))
            ferias = salario + salario*0.33

            case 3: salario = Number (prompt(`Informe o salário.`))
                    meses = Number (prompt(`Informe os meses.`))
                    if ((meses >= 1) && (meses <= 12)) {
                        dt = salario + salario*meses/12
                        alert
                    }
            case 4: 
            default: alert(`Opção inválida.`)
        }
    }
}
