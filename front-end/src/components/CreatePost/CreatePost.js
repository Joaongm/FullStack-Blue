import React, { useRef } from 'react';
import classes from './CreatePost.module.css';
import {v4 as uuid} from 'uuid';

const CreatePost = (props) => {

    const authorRef = useRef();
    const imageUrlRef = useRef();
    const titleRef = useRef();
    const textRef = useRef();


    const submitFormHandler = (event) => {
        
        event.preventDefault()
        const authorValue = authorRef.current.value;
        const imageUrlValue = imageUrlRef.current.value;
        const titleValue = titleRef.current.value;
        const textValue = textRef.current.value;

        const formData = {
            id: uuid(),
            author: authorValue,
            imageUrl: imageUrlValue,
            title:titleValue,
            text:textValue,
        }

        props.onGetForm(formData)


    }

    return (
        <form onSubmit={submitFormHandler} className={classes.CreatePost}>

            <h2>Preencha os dados abaixo!</h2>

            <input type='text' name='author' placeholder='Autor' ref={authorRef} />
            <input type='text' name='imageUrl' placeholder='URL da imagem' ref={imageUrlRef} />
            <input type='text' name='title' placeholder='Título' ref={titleRef} />
            <textarea id='text' name='text' placeholder='Texto' ref={textRef}></textarea>

            <div>
                <button className='btn-danger'>Cancelar</button>
                <button className='btn-success' type='submit'>Publicar</button>
            </div>

        </form>
    )
}

export default CreatePost
