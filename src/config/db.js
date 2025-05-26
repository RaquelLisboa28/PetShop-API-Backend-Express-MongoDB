const { MongoClient } = require("mongodb")

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

class Db {

    table = null

    constructor(table) {
        this.table = table
    }

    async connectDb() {
        await client.connect()
        return client.db("petshop")
    }

    async find() {
        const db = await this.connectDb()
        const cursor = await db.collection(this.table).find()
        return await cursor.toArray()
    }

    async findOne(condicao) {
        const db = await this.connectDb()
        return await db.collection(this.table).findOne(condicao)
    }

    async deleteOne(condicao) {
        const db = await this.connectDb()
        await db.collection(this.table).deleteOne(condicao)
    }
    
    async insertOne(dados) {
        const db = await this.connectDb()
        const { insertedId } = await db.collection(this.table).insertOne(dados);
        return { ...dados, _id: insertedId }; 
    }

    async updateOne(condicao, novosDados) {
        const db = await this.connectDb()
        await db.collection(this.table).updateOne(
            condicao,
            {
                $set: novosDados
            }
        )
    }
}

module.exports = Db
