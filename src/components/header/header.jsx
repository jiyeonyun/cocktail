import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const navigate = useNavigate();
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Cocktail~🍹</h1>
        </header>
    );
};

export default Header;