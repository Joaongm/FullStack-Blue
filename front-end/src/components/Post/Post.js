import React from 'react';
import classes from './Post.module.css'

const Post = () => {
    return (
        <article className={classes.boxPost}>
            <span>Autor: username</span>
            <figure>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp"
                alt='descricao' />
            </figure>
            <div>
                <h3>Botar aqui a descrição da imagem!</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <button className='btn-info'>Ver Mais</button>

        </article>
    )
}

export default Post
