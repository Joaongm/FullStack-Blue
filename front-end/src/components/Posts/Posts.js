import React, { Component, Fragment } from 'react';
import Post from '../Post/Post';
import Info from '../UI/Info/Info';

export class Posts extends Component {
    state = {
        show: false,
        publications: [
            {
                id: 1,
                author: 'David Sotto Mayor',
                title: 'Hoje o dia está radiante!',
                text: 'Hoje eu estou muito feliz e queria compartilhar isso!',
                imageUrl: 'https://images.madeiramadeira.com.br/product/images/39150880-adesivo-parede-paisagem-lago-montanhas-natureza-gg392prd3uniu7iyx7upl-179-1-800x729.jpg'
            },
            {
                id: 2,
                author: 'João Ninguém',
                title: 'Meu carro novo!',
                text: 'Estou muito feliz, comprei um carro zero e vou dirigir agora mesmo... uhul!',
                imageUrl: 'https://s2.glbimg.com/eUN4P_OpCjHKzqGa3Cmi4-Y4jRA=/0x0:695x376/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/l/b/AyCpHmQYq70WvFk9QZBA/lsev-carro-impresso-em-3d-1.png'
            },
            {
                id: 3,
                author: 'Sicrano da Silva',
                title: 'Não compre, adote!',
                text: 'Hoje eu resgatei um gatinho da rua, agora ele está mais seguro.',
                imageUrl: 'http://s2.glbimg.com/4Ek8CnZSuYyyvaNQEPPiX_d-faA=/e.glbimg.com/og/ed/f/original/2017/11/24/gali1.jpg'
            },
            {
                id: 4,
                author: 'Beltrano Souza',
                title: 'Estou apredendo JS',
                text: 'JavaScript é uma linguagem incrível! Estou aprendendo bastante e logo estarei escrevendo vários códigos.',
                imageUrl: 'https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png'
            },
            {
                id: 5,
                author: 'Fulano Anônimo',
                title: 'Estou aprendendo a hackear.',
                text: 'Hoje não sei muita coisa... mas, quando eu pegar a prática ninguém vai se safar!',
                imageUrl: 'https://img.olhardigital.com.br/wp-content/uploads/2021/01/iStock-912299634_Easy-Resize.com_.jpg'
            }
        ]
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.post!== this.props.post){
            this.setState({
                publications: [
                    this.props.post,
                    ...this.state.publications
                ],
                show: true
            })
            
        }
    }

    closeInfoHandler = () => {
        this.setState({ show: false }) 
    }

    render() {

        const pubs = this.state.publications

        let allPublications;
        if (pubs.length === 0) {
            allPublications = <p>Você não possui publicações!</p>
        }
        allPublications = pubs.map(postKey => <Post {...postKey} key={postKey.id} />)

        return (
            <Fragment>
                <Info show={this.state.show} clicked={this.closeInfoHandler}>
                    Isso é um teste
                    <button onClick={this.closeInfoHandler}>OK!</button>
                </Info>
                {allPublications}
            </Fragment>
        )
    }
}

export default Posts
