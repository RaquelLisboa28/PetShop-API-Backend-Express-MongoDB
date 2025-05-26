const servicoRepository = require("../repositories/ServicoReposity");
const { ObjectId } = require("mongodb");

class ServicoController {
  async index(req, res) {
    const servicos = await servicoRepository.find();
    res.json(servicos);
  }

  async show(req, res) {
    const id = req.params.id;
    const servico = await servicoRepository.findOne({
      _id: new ObjectId(id),
    });

    res.json(servico);
  }

  async store(req, res) {
    if (!req.body.nome) {
      res.status(400).json({
        message: "Nome não informado. Por favor, insira o nome do serviço.",
      });
    }
    if (!req.body.preco) {
      res.status(400).json({
        message: "Preço não informado. Por favor, insira o preço do serviço.",
      });
      return;
    }
    const novoServico = await servicoRepository.insertOne(req.body);
    res.json(novoServico);
  }

  async update(req, res) {
    const dadosAtualizados = req.body;
    await servicoRepository.updateOne(
      { _id: new ObjectId(req.params.id) },
      dadosAtualizados
    );
    res.json(dadosAtualizados);
  }

  async destroy(req, res) {
    await servicoRepository.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json("Servico removido!");
  }
}

// Listar = index = GET /
// Pegar 1 só = show = GET /:id
// Adicionar = store = POST /
// Atualizar = update = PUT /:id
// Apagar = destroy = DELETE /:id

module.exports = new ServicoController();
