import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Modal show={props.show}>{props.children}</Modal>,
                document.getElementById('modal-root')
            )}
            {ReactDOM.createPortal(
                <Backdrop show={props.show} clicked={props.clicked}/>,
                document.getElementById('backdrop-root')
            )}
        </Fragment>
    );
};

export default Info;
