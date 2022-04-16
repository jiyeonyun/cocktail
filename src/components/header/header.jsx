import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = ({name,setName}) => {
    const navigate = useNavigate();
    const goTo = (e)=>{
        navigate('/list');
        setName(e.target.getAttribute("name"));
    };
    const goMain = ()=>{
        navigate('/');
    };
    return(
        <header className={styles.header}>
            <h3 onClick={goMain} className={styles.title}>Cocktail~🍹</h3>
            <div className={styles.spanWrap}>
            <span onClick={goTo} name='item' className={styles.span}>종류별</span>
            <span onClick={goTo} name='category' className={styles.span}>재료별</span>
            </div>
        </header>
    );
};

export default Header;