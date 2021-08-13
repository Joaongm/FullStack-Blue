import React, { Component, Fragment } from 'react';
import Post from '../Post/Post';
import Info from '../UI/Info/Info';
import Button from '../UI/Button/Button';

export class Posts extends Component {
    // state = {
    //     show: false,
    //     publications: [
    //         {
    //             id: 1,
    //             author: 'David Sotto Mayor',
    //             title: 'Hoje o dia está radiante!',
    //             text: 'Hoje eu estou muito feliz e queria compartilhar isso!',
    //             imageUrl: 'https://images.madeiramadeira.com.br/product/images/39150880-adesivo-parede-paisagem-lago-montanhas-natureza-gg392prd3uniu7iyx7upl-179-1-800x729.jpg'
    //         },
    //         {
    //             id: 2,
    //             author: 'João Ninguém',
    //             title: 'Meu carro novo!',
    //             text: 'Estou muito feliz, comprei um carro zero e vou dirigir agora mesmo... uhul!',
    //             imageUrl: 'https://s2.glbimg.com/eUN4P_OpCjHKzqGa3Cmi4-Y4jRA=/0x0:695x376/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/l/b/AyCpHmQYq70WvFk9QZBA/lsev-carro-impresso-em-3d-1.png'
    //         },
    //         {
    //             id: 3,
    //             author: 'Sicrano da Silva',
    //             title: 'Não compre, adote!',
    //             text: 'Hoje eu resgatei um gatinho da rua, agora ele está mais seguro.',
    //             imageUrl: 'http://s2.glbimg.com/4Ek8CnZSuYyyvaNQEPPiX_d-faA=/e.glbimg.com/og/ed/f/original/2017/11/24/gali1.jpg'
    //         },
    //         {
    //             id: 4,
    //             author: 'Beltrano Souza',
    //             title: 'Estou apredendo JS',
    //             text: 'JavaScript é uma linguagem incrível! Estou aprendendo bastante e logo estarei escrevendo vários códigos.',
    //             imageUrl: 'https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png'
    //         },
    //         {
    //             id: 5,
    //             author: 'Fulano Anônimo',
    //             title: 'Estou aprendendo a hackear.',
    //             text: 'Hoje não sei muita coisa... mas, quando eu pegar a prática ninguém vai se safar!',
    //             imageUrl: 'https://img.olhardigital.com.br/wp-content/uploads/2021/01/iStock-912299634_Easy-Resize.com_.jpg'
    //         }
    //     ]
    // }

    state = {
        show: false,
        loading: false,
        publications: []
    }
    
    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.addNewPost !== this.props.addNewPost){
            this.fetchData()
        }
    }

    fetchData = async () => {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();
        console.log(data.publications)

        this.setState({publications: data.publications})

    }

    deleteHandler = async (data) => {
        await fetch('http://localhost:8080/publicacao/' + data.id, {
            method: 'DELETE'
        })
        this.fetchData()
    }

    closeInfoHandler = () => {
        this.setState({ show: false }) 
    }



    render() {

        console.log(this.props.addNewPost)

        const pubs = this.state.publications

        let allPublications;
        if (pubs.length === 0) {
            return allPublications = <h1>Você não possui publicações!</h1>
        }
        allPublications = pubs.map(postKey => <Post {...postKey} key={postKey._id} onCaptureId={this.deleteHandler}/>)

        return (
            <Fragment>
                <Info show={this.state.show} clicked={this.closeInfoHandler}>
                    <p>Criado com sucesso!!!</p>
                    <Button styleButton='info' onClick={this.closeInfoHandler}>OK!</Button>
                </Info>
                {allPublications}
            </Fragment>
        )
    }
}

export default Posts
