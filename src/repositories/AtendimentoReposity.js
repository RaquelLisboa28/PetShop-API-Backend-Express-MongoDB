const Db = require ('../config/db')

class AtendimentoRepository extends Db {
    constructor() {
        super("atendimentos")
    }
}

module.exports = new AtendimentoRepository()
