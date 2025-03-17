const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 800 }
];

const produroEncontrado = produtos.find (produto => produto.nome === "Teclado");
  if (produroEncontrado) {
    console.log("Produto: ${produroEncontrado.nome}, Preço: ${produtoEncontrado.preco")
  } else {
    console.log('Produto não encontrado');
  }

  const alunoAprovado = alunos.find( alunos => alunos.nota >= 7)
  if (alunoAprovado) {
    console.log("Aluno aprovado + ${alunosAprovado.nome}, Nota: ${alunoAprovado.nota}"); 
} else {
  console.log("nenhum aluno aprovado");
}

  const usuarioId = usuarios.find ( usuarioId => usuarios.id === 102);
   if (usuarioId) {
    console.log(" Usuario encontrado: ${usuarioid.nome}");
   }else { 
   console.log ("Usuario não encontrado");
   }

   const livroEncontrado = livros.find ( livros => livros.titulo === " O Senhor dos aneis")
   if (livroEncontrado)
   { console.log("Autor e livro encontrado: ${livroEncontrado.autor}");
   } else {
    console.log("Livro não encontrado");
   }

    const funcionarioEncontrado = funcinarios.find (funcionario => funcionario.cargo === "Gerente")
    if (funcionarioEncontrado) 
    { console.log ('Nome do funcinario ${funcionarioEncontrado.nome}');
    }else {
        console.log ("Funcionario não encontrado")};

    const pessoaEncontrada = pessoas.find ( pessoa => pessoa.cpf === "123.456.789-00")
    if (pessoaEncontrada) { 
    console.log("Nome da pessoa do cpf encontrado: ${pessoasEncontrada.nome}");
} else {
    console.log('Pessoa não encontrada');
}

    const marcaEncontrada = carros.find ( carro => carro.modelo === "Civic");
    if (marcaEncontrada) {
        console.log("Marca encontrada: ${marcaEncontrada.marca}")    
    } else {console.log("Carro não encontrado.");

    }

    const clienteEncontrado = clientes.find ( cliente => cliente.conta === 4567)
    if (clienteEncontrado) {console.log("Nome do cliente: ${clienteEncontrado.nome}");
} else { 
    console.log ("Conta não encontrada");
}

const produtoForaEstoque = produtos.find ( produto => produto.estoque === 0);
if(produtoForaEstoque) {
    console.log("Produto sem estoque: ${produtoForaEstoque.nome}");
} else {
    console.log("Todos os produtos estão disponiveis");
}

const pedidoEncontrado = pedidos.find (pedido => pedido.numero === "A123")
if (pedidoEncontrado) {
    console.log("Status do pedido: ${pedidoEncontrado.status}");
} else {
    console.log("Pedido não encontrado");
}   
