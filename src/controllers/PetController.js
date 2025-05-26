const petRepository = require("../repositories/PetReposity");
const { ObjectId } = require("mongodb");

class PetController {
  async index(req, res) {
    // Fazer a rotina de pegar os pets
    const pets = await petRepository.find();
    res.json(pets);
  }

  async show(req, res) {
    const id = req.params.id;
    const pet = await petRepository.findOne({
      _id: new ObjectId(id),
    });

    res.json(pet);
  }

  async store(req, res) {
    // verificar se tem nome e se não estiver nome dar um erro
    if(!req.body.nome){
      res.status(400).json({
        message: "Nome não informado. Por favor, insira o nome do pet."
      });
    }
    if(!req.body.sexo){
       res.status(400).json({
        message: "Sexo não informado. Por favor, insira o sexo do pet."
       })  
    }
    if(!req.body.raca){
      res.status(400).json({
        message: "Raça não informado. Por favor, insira a raça do pet."
      })
    }
    const novoPet = await petRepository.insertOne(req.body);
    res.json(novoPet);
  }

  async update(req, res) {
    const dadosAtualizados = req.body;
    await petRepository.updateOne(
      { _id: new ObjectId(req.params.id) },
      dadosAtualizados
    );
    res.json(dadosAtualizados);
  }

  async destroy(req, res) {
    await petRepository.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json("pet removido!");
  }
}

// Listar = index = GET /
// Pegar 1 só = show = GET /:id
// Adicionar = store = POST /
// Atualizar = update = PUT /:id
// Apagar = destroy = DELETE /:id

module.exports = new PetController();
