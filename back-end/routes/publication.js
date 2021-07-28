const express = require('express');
const router = express.Router();

const Publication = require('../models/publication');

// const publications = [
//     {
//         id: 1,
//         author: 'David Sotto Mayor',
//         title: 'Hoje o dia está radiante!',
//         text: 'Hoje eu estou muito feliz e queria compartilhar isso!'
//     },
//     {
//         id: 2,
//         author: 'João Ninguém',
//         title: 'Meu carro novo!',
//         text: 'Estou muito feliz, comprei um carro zero e vou dirigir agora mesmo... uhul!'
//     },
//     {
//         id: 3,
//         author: 'Sicrano da Silva',
//         title: 'Não compre, adote!',
//         text: 'Hoje eu resgatei um gatinho da rua, agora ele está mais seguro.'
//     },
//     {
//         id: 4,
//         author: 'Beltrano Souza',
//         title: 'Estou apredendo JS',
//         text: 'JavaScript é uma linguagem incrível! Estou aprendendo bastante e logo estarei escrevendo vários códigos.'
//     },
//     {
//         id: 5,
//         author: 'Fulano Anônimo',
//         title: 'Estou aprendendo a hackear.',
//         text: 'Hoje não sei muita coisa... mas, quando eu pegar a prática ninguém vai se safar!'
//     }
// ];

router.get('/', (req, res, next) => {

    Publication.find()
    .then( publications => {

        if(!publications){
            return res.status(404).json({
                message: "Nenhuma publicação encontrada!",
                error: err
            })
        }

        res.status(200).json({
            message: "Publicações recuperadas com sucesso!",
            publications: publications
        });
    })
    .catch( err => {
        res.status(500).json({
            message: "Ocorreu um erro interno! Tente novamente mais tarde.",
            error: err
        })
    })
});

router.get('/publicacoes/:pubId', (req, res, next) => {
    const pubId = +req.params.pubId;

    const pubIndex = publications.findIndex( pub => pub.id == pubId );

    if(pubIndex < 0){
        return res.status(404).json({
            message: "Publicação não encontrada!"
        });
    }

    const pub = publications[pubIndex];

    res.status(200).json({
        message: "Publicação encontrada com sucesso!",
        publication: pub
    })

})

router.post('/nova-publicacao', (req, res, next) => {

    const author = 'David Sotto Mayor' // Mais tarde o 'author' será setado por autenticação
    const title = req.body.title;
    const text = req.body.text;
    const image = req.body.image

    const newPublication = new Publication({ author: author, title: title, text: text, image: image });

    return  newPublication.save()
    .then( result => {
        res.status(201).json({
            message: "Publicação criada com sucesso!",
            newPublication: newPublication
        })
    })
    .catch( err => {
        res.status(500).json({
            message: "Ocorreu um erro interno! Tente novamente mais tarde.",
            error: err
        })
    })
    

})

router.put('/publicacao/:pubId', (req, res, next) => {
    const pubId = req.params.pubId

    const updatedAuthor = 'David Sotto Mayor' // Mais tarde o 'author' será setado por autenticação
    const updatedTitle = req.body.title;
    const updatedText = req.body.text;
    const updatedImage = req.body.image

    Publication.findByIdAndUpdate(pubId)
    .then( publication => {
        if(!publication){
            // tratar erro
        }

        publication.author = updatedAuthor;
        publication.title = updatedTitle;
        publication.text = updatedText;
        publication.image = updatedImage;

        return publication.save()
        .then( result => {
        res.status(200).json({
                message: "Publicação atualizada com sucesso",
                publication: result
            })
        })
    })
    .catch( err => {
        res.status(500).json({
            message: "Ocorreu um erro interno! Tente novamente mais tarde.",
            error: err
        })
    })
})

router.delete('/publicacao/:pubId', (req, res, next) => {
    const pubId = +req.params.pubId;

    publications.splice(pubId - 1, 1)

    res.status(200).json({
        message: "Publicação excluida com sucesso!"
    })

})

module.exports = router;
