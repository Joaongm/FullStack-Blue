import React from 'react';

const Input = (props) => {
    console.log(props)

    const { inputType } = props;

    let inputField;
    switch(inputType){
        case 'text':
            inputField = (
                <input
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            )
            break;
        case 'email':
            inputField = (
            <input
                    type="email"
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            )
            break;
        case 'textarea':
            inputField = (
                <textarea
                id="text"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            ></textarea>
            )
            break;
        default:
            break;
    }


    return (
        <div>
            <label>{props.validation.message}</label>
            {inputField}
        </div>
    )
}

export default Input
