import React from 'react';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.MainHeader}>
            <figure>
                <h2>BlueKut</h2>
            </figure>

            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Nova Postagem</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader
