const Db = require('../config/db')

class PetRepository extends Db {
    constructor() {
        super("pets")
    }
}

module.exports = new PetRepository()
