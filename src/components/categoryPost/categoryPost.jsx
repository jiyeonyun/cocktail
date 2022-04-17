import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './categoryPost.module.css';
const CategoryPost = ({category}) => {
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
export default CategoryPost;