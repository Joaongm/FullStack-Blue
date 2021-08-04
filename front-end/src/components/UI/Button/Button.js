import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    console.log(props)

    const classesArray = [classes.Button]
    if(props.styleButton === 'info'){
        classesArray.push(classes.btnInfo)
    }
    
    if(props.styleButton === 'success'){
        classesArray.push(classes.btnSuccess)
    }
    
    if(props.styleButton === 'danger'){
        classesArray.push(classes.btnDanger)
    }

    if(props.disabled){
        classesArray.push(classes.btnDisabled)
    }
    
    console.log(classesArray.join(' '))

    return (
        <button
            type={props.typeButton || 'button'}
            disabled={props.disabled}
            onClick={props.onClick}
            className={ `${classesArray.join(' ')}` }
        >
            {props.children}
        </button>
    );
};

export default Button;
