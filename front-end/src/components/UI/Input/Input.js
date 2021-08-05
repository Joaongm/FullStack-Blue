import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    const { inputType, touched, valid } = props;

    let inputTouched;
    if(touched === true && props.value.length === 0){
        inputTouched = classes.touched
    }

    let inputField;
    switch(inputType){
        case 'text':
            inputField = (
                <input
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    className={inputTouched}
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
                    className={inputTouched}
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
                className={inputTouched}
            ></textarea>
            )
            break;
        default:
            break;
    }


    return (
        <div className={classes.Input}>
            <label className={ valid ? classes.valid : classes.invalid } >{touched && props.validation.message}</label>
            {inputField}
        </div>
    )
}

export default Input
