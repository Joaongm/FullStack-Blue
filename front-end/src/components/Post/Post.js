import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    const captureIdHandler = (treatment) => {
        const id = props.id;

        props.onCaptureId({ id: id, treatment: treatment });
        
    }

    return (
        <article className={classes.boxPost}>
            <span>Autor: {props.author}</span>
            <figure>
                <img src={props.image}
                alt={`imagem de ${props.author}`} />
            </figure>
            <div>
                <h3>{props.title}</h3>
                <p>
                    {props.text}
                </p>
            </div>
            <button className='btn-danger' onClick={() => captureIdHandler('delete')} >Deletar</button>
            <button className='btn-info'>Ver Mais</button>
            <button className='btn-success'>Atualizar</button>


        </article>
    )
}

export default Post
