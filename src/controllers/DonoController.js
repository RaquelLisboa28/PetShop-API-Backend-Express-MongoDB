const donoRepository = require("../repositories/DonoReposity");
const { ObjectId } = require("mongodb");

class DonoController {
  async index(req, res) {
    // Fazer a rotina de pegar os pets
    const donos = await donoRepository.find();
    res.json(donos);
  }

  async show(req, res) {
    const id = req.params.id;
    const dono = await donoRepository.findOne({
      _id: new ObjectId(id),
    });

    res.json(dono);
  }

  async store(req, res) {
    if (!req.body.nome) {
      res.status(400).json({
        message: "Nome não informado. Por favor, insira o nome do dono.",
      });
    }
    if (!req.body.idade) {
      res.status(400).json({
        message: "Idade não informada. Por favor, insira a idade do dono.",
      });
    }
    if (!req.body.contato) {
      res.status(400).json({
        message: "Contato não informado. Por favor, insira o contato do dono",
      });
      return
    }
    const novoDono = await donoRepository.insertOne(req.body);
    res.json(novoDono);
  }

  async update(req, res) {
    const dadosAtualizados = req.body;
    await donoRepository.updateOne(
      { _id: new ObjectId(req.params.id) },
      dadosAtualizados
    );
    res.json(dadosAtualizados);
  }

  async destroy(req, res) {
    await donoRepository.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json("Dono removido!");
  }
}

// Listar = index = GET /
// Pegar 1 só = show = GET /:id
// Adicionar = store = POST /
// Atualizar = update = PUT /:id
// Apagar = destroy = DELETE /:id

module.exports = new DonoController();
