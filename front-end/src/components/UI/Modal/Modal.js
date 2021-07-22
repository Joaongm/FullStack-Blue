import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={classes.Modal} style={{
            transform: (props.show) ? 'translate(-50%, -50%)' : 'translate(100%, -50%)',
            opacity: (props.show) ? '1' : '0'
        }} >
            <section>
                <h2>
                    BlueKut - A rede social dos Bluemers!
                </h2>
            </section>
            <main>
               {props.children}
            </main>

        </div>
    )
}

export default Modal
