const express = require('express');
const router = express.Router();

const publications = [
    {
        id: 1,
        author: 'David Sotto Mayor',
        title: 'Hoje o dia está radiante!',
        text: 'Hoje eu estou muito feliz e queria compartilhar isso!'
    },
    {
        id: 2,
        author: 'João Ninguém',
        title: 'Meu carro novo!',
        text: 'Estou muito feliz, comprei um carro zero e vou dirigir agora mesmo... uhul!'
    },
    {
        id: 3,
        author: 'Sicrano da Silva',
        title: 'Não compre, adote!',
        text: 'Hoje eu resgatei um gatinho da rua, agora ele está mais seguro.'
    },
    {
        id: 4,
        author: 'Beltrano Souza',
        title: 'Estou apredendo JS',
        text: 'JavaScript é uma linguagem incrível! Estou aprendendo bastante e logo estarei escrevendo vários códigos.'
    },
    {
        id: 5,
        author: 'Fulano Anônimo',
        title: 'Estou aprendendo a hackear.',
        text: 'Hoje não sei muita coisa... mas, quando eu pegar a prática ninguém vai se safar!'
    }
];

router.status(200).get('/', (req, res, next) => {
    res.json({
        message: 'Funciona? Sim!',
        publications: publications
    });
});

router.get('/publicacoes/:pubId', (req, res, next) => {
    const pubId = +req.params.pubId;

    const pubIndex = publications.findIndex( pub => pub.id == pubId );

    if(pubIndex < 0){
        return res.status(200).json({
            message: "Publicação não encontrada!"
        });
    }

    const pub = publications[pubIndex];

    res.status(200).json({
        message: "Publicação encontrada com sucesso!",
        publication: pub
    })

})

module.exports = router;
