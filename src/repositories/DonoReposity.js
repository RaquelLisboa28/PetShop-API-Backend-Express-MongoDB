const Db = require ('../config/db')

class DonoRepository extends Db {
    constructor() {
        super("donos")
    }
}

module.exports = new DonoRepository()
