import React, { Component } from 'react';
import classes from './CreatePost.module.css';
import { v4 as uuid } from 'uuid';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

class CreatePost extends Component {
    state = {
        infos: {
            authorInfo: {
                value: '',
                validation: {
                    minLength: 3,
                    maxLength: 90,
                    required: true,
                    message: 'Essa mensagem deve conter de 3 a 90 caracteres.'
                },
                touched: false,
                valid: false,
                inputType: 'text',
                placeholder: 'Autor',
                identifier: 'authorInfo',
            },
            imageUrlInfo: {
                value: '',
                validation: {
                    required: true,
                    message: 'Esse campo não pode fica em branco.'
                },
                touched: false,
                valid: false,
                inputType: 'text',
                placeholder: 'URL da Imagem',
                identifier: 'imageUrlInfo',
            },
            titleInfo: {
                value: '',
                validation: {
                    minLength: 5,
                    maxLength: 120,
                    required: true,
                    message: 'Essa mensagem deve conter de 5 a 120 caracteres.'
                },
                touched: false,
                valid: false,
                inputType: 'text',
                placeholder: 'Título',
                identifier: 'titleInfo',
            },
            textInfo: {
                value: '',
                validation: {
                    minLength: 1,
                    maxLength: 225,
                    required: true,
                    message: 'Essa mensagem deve conter de 1 a 255 caracteres.'
                },
                touched: false,
                valid: false,
                inputType: 'textarea',
                placeholder: 'Texto',
                identifier: 'textInfo',
            },
        },
        formValid: false,
        formTouched: false,
    };

    validationHandler = (value, rules) => {
        console.log(rules);

        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    valuesHandler = (event, identifier) => {
        this.setState({ formTouched: true });

        let updatedInfos = { ...this.state.infos };
        let updatedElement = { ...updatedInfos[identifier] };

        updatedElement.value = event.target.value;
        updatedElement.touched = true;
        updatedElement.valid = this.validationHandler(
            updatedElement.value,
            updatedElement.validation
        );

        updatedInfos[identifier] = updatedElement;

        let isValid = true;
        for (let key in updatedInfos) {
            isValid = updatedInfos[key].valid && isValid;
        }

        this.setState({ infos: updatedInfos, formValid: isValid });
    };

    clearInputsHandler = () => {
        let updatedInfos = { ...this.state.infos };
        for (let key in updatedInfos) {
            updatedInfos[key].value = '';
            updatedInfos[key].valid = false;
        }

        this.setState({
            infos: updatedInfos,
            formTouched: false,
            formValid: false,
        });
    };

    submitFormHandler = (event) => {
        event.preventDefault();

        const formData = {
            id: uuid(),
            author: this.state.infos.authorInfo.value,
            imageUrl: this.state.infos.imageUrlInfo.value,
            title: this.state.infos.titleInfo.value,
            text: this.state.infos.textInfo.value,
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

                {Object.keys(this.state.infos).map((infoKey) => {
                    return (
                        <Input
                            key={infoKey}
                            {...this.state.infos[infoKey]}
                            onChange={(event) =>
                                this.valuesHandler(
                                    event,
                                    this.state.infos[infoKey].identifier
                                )
                            }
                        />
                    );
                })}

                <div>
                    <Button
                        styleButton="danger"
                        onClick={this.clearInputsHandler}
                        disabled={!this.state.formTouched}
                    >
                        Cancelar
                    </Button>
                    <Button
                        styleButton="success"
                        typeButton="submit"
                        disabled={!this.state.formValid}
                    >
                        Publicar
                    </Button>
                </div>
            </form>
        );
    }
}

export default CreatePost;
