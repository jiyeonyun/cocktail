import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './itemPost.module.css';
const ItemPost = ({category}) => {
    return (
        <>
        <ul className={styles.ul}>
        {category&&category.map((item)=>{
        return  <li className={styles.li} key={item.idDrink}>
                <img className={styles.img} src={item.strDrinkThumb} alt="" />
                <h4 className={styles.title}>{item.strDrink}</h4>
                <button className={styles.button}>Detail</button>
                </li>;
        
        })}
        </ul>
    </>
    );
    };

export default ItemPost;