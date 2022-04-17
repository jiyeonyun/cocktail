import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './categoryPost.module.css';
import { useNavigate } from 'react-router-dom';
const CategoryPost = ({category}) => {
    const navigate = useNavigate();
    const goTo = (e)=>{
        const q = e.target.value;
        navigate(`/detail`,{
            state :{
                q: q,
            },
        });

    };
return (
    <>
    <ul className={styles.ul}>
    {category&&category.map((item)=>{
    return  <li className={styles.li} key={item.idDrink}>
            <img className={styles.img} src={item.strDrinkThumb} alt="" />
            <h4 className={styles.title}>{item.strDrink}</h4>
            <button onClick={goTo} value={item.strDrink} className={styles.button}>Detail</button>
            </li>;
    })}
    </ul>
</>
);
};
export default CategoryPost;