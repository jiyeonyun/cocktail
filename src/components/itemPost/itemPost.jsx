import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './itemPost.module.css';
const ItemPost = ({category}) => {
    return (
        <>
        <ul className={styles.ul}>
        {category&&category.map((item)=>{
        return  <li className={styles.li} key={item.idDrink}>{item.strDrink}</li>;
        })}
        </ul>
    </>
    );
    };

export default ItemPost;