import React, { Component } from 'react';
import classes from './CreatePost.module.css';
import { v4 as uuid } from 'uuid';
import Button from '../UI/Button/Button';

class CreatePost extends Component {
    state = {
        infos: {
            authorInfo: {
                value: '',
                validation: {
                    minLength: 3,
                    maxLength: 90,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            imageUrlInfo: {
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            },
            titleInfo: {
                value: '',
                validation: {
                    minLength: 5,
                    maxLength: 120,
                    required: true,
                },
                touched: false,
                valid: false,
            },
            textInfo: {
                value: '',
                validation: {
                    minLength: 1,
                    maxLength: 225,
                    required: true,
                },
                touched: false,
                valid: false,
            },
        },
    };

    valuesHandler = (event, identifier) => {
        let updatedInfos = { ...this.state.infos };
        let updatedElement = { ...updatedInfos[identifier] };

        updatedElement.value = event.target.value;
        updatedElement.touched = true;
        // updatedElement.valid

        updatedInfos[identifier] = updatedElement;

        this.setState({ infos: updatedInfos });
    };

    clearInputsHandler = () => {};

    submitFormHandler = (event) => {
        event.preventDefault();

        const formData = {
            id: uuid(),
            //author: authorValue,
            //: imageUrlValue,
            //title:titleValue,
            //text:textValue,
        };

        this.props.onGetForm(formData);

        this.clearInputsHandler();
    };

    render() {
        return (
            <form
                onSubmit={this.submitFormHandler}
                className={classes.CreatePost}
            >
                <h2>Preencha os dados abaixo!</h2>

                <input
                    type="text"
                    value={this.state.infos.authorInfo.value}
                    onChange={(event) =>
                        this.valuesHandler(event, 'authorInfo')
                    }
                    placeholder="Autor"
                />
                <input
                    type="text"
                    value={this.state.infos.imageUrlInfo.value}
                    onChange={(event) =>
                        this.valuesHandler(event, 'imageUrlInfo')
                    }
                    placeholder="URL da imagem"
                />
                <input
                    type="text"
                    value={this.state.infos.titleInfo.value}
                    onChange={(event) => this.valuesHandler(event, 'titleInfo')}
                    placeholder="Título"
                />
                <textarea
                    id="text"
                    value={this.state.infos.textInfo.value}
                    onChange={(event) => this.valuesHandler(event, 'textInfo')}
                    placeholder="Texto"
                ></textarea>

                <div>
                    <Button
                        styleButton="danger"
                        onClick={this.clearInputsHandler}
                    >
                        Cancelar
                    </Button>
                    <Button styleButton="success" typeButton="submit">
                        Publicar
                    </Button>
                </div>
            </form>
        );
    }
}

export default CreatePost;
