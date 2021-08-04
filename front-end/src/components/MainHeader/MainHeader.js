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
                        <button>Home</button>
                        
                    </li>
                    <li>
                        <button>Nova Postagem</button>
                    </li>
                    <li>
                        <button>Login</button>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader
