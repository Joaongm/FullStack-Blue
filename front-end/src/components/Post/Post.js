import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.boxPost}>
            <span>Autor: {props.author}</span>
            <figure>
                <img src={props.imageUrl}
                alt={`imagem de ${props.author}`} />
            </figure>
            <div>
                <h3>{props.title}</h3>
                <p>
                    {props.text}
                </p>
            </div>
            <button className='btn-info'>Ver Mais</button>

        </article>
    )
}

export default Post
