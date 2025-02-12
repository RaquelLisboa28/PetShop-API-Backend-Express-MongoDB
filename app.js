import tabela2024 from "./tabela.js";
import express from 'express';

const app = express ();

app.get ('/', (requisicao, res) => {
        res.send(tabela2024);
});

app.get('/time-campeao', (req, res) => {
      const champion = tabela2024.find((time) => time.eCampeao )
      res.send(champion)
})

app.get ('/:sigla', (requisicao, res) => {
      const siglaInformada = requisicao.params.sigla.toUpperCase();
      const time = tabela2024.find( infoTime => infoTime.sigla === siglaInformada);
      res.send(time);
} );

app.listen (3000, () => console.log('Servidor rodando com sucesso')) 

