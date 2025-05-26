const { Router } = require('express')
const pet = require('./pet')
const dono = require('./dono')
const atendimento = require('./atendimento')
const servico = require('./servico')

const router = Router()

router.use('/pet', pet)
router.use('/dono', dono)
router.use('/atendimento', atendimento)
router.use('/servico', servico)

module.exports = router