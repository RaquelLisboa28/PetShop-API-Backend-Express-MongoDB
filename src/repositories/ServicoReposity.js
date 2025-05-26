const Db = require ('../config/db')

class ServicoRepository extends Db {
    constructor() {
        super("servicos")
    }
}

module.exports = new ServicoRepository()
