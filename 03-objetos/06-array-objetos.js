const alunos = [
    { nome: "Fernanda", nota: 8 },
    {nome: "Giovanna", nota: 5},
    {nome:"Giulia ", nota: 7},
    {nome:"Guilherme", nota: 2 },
];

console.log(alunos);
const aprovados = alunos.filter((a) => a.nota >= 7);
console.log(aprovados);

aprovados.forEach((aluno) => {
    console.log(`O aluno ${aluno.nome} é bom e tirou a nota ${aluno.nota}`)
});