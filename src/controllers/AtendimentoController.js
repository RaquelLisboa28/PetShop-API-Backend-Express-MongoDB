const atendimentoRepository = require("../repositories/AtendimentoReposity");
const petRepository = require("../repositories/PetReposity");
const donoRepository = require("../repositories/DonoReposity");
const servicoRepository = require("../repositories/ServicoReposity");
const { ObjectId } = require("mongodb");

class AtendimentoController {
  async index(req, res) {
    const atendimentos = await atendimentoRepository.find();
    res.json(atendimentos);
  }

  async show(req, res) {
    const id = req.params.id;
    const atendimento = await atendimentoRepository.findOne({
      _id: new ObjectId(id),
    });

    res.json(atendimento);
  }

  async store(req, res) {
    try {
      // antes de inserir, verificar se o body contém os valores para petId, donoId, servicoId
      // Caso não exista algum dos tres, retornar com erro 400, e a mensagem dizendo que faltam informações essenciais
      if (!req.body.petId) {
        res.status(400).json({
          message: "É necessario enviar o petId",
        });
        return;
      }

      const pet = await petRepository.findOne({
        _id: new ObjectId(req.body.petId),
      });

      if (!pet) {
        res.status(404).json({
          message: "Pet não encontrado",
        });
        return;
      }

      if (!req.body.donoId) {
        res.status(400).json({
          message: "É necessario enviar o donoId ",
        });
        return;
      }

      const dono = await donoRepository.findOne({
        _id: new ObjectId(req.body.donoId),
      });

      if (!dono) {
        res.status(404).json({
          message: "Dono não encontrado.",
        });
        return;
      }

      if (!req.body.servicoId) {
        res.status(400).json({
          message: "É necessario enviar o servicoId",
        });
        return;
      }

      const servico = await servicoRepository.findOne({
        _id: new ObjectId(req.body.servicoId),
      });

      if (!servico) {
        res.status(404).json({
          message: "Serviço não encontrado."
        })
        return;
      }

      const novoAtendimento = await atendimentoRepository.insertOne(req.body);
      res.json(novoAtendimento);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async update(req, res) {
    const dadosAtualizados = req.body;
    await atendimentoRepository.updateOne(
      { _id: new ObjectId(req.params.id) },
      dadosAtualizados
    );
    res.json(dadosAtualizados);
  }

  async destroy(req, res) {
    await atendimentoRepository.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.json("atendimento removido!");
  }
}

// Listar = index = GET /
// Pegar 1 só = show = GET /:id
// Adicionar = store = POST /
// Atualizar = update = PUT /:id
// Apagar = destroy = DELETE /:id

module.exports = new AtendimentoController();
