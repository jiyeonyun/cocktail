import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './posts.module.css';
const Posts = ({ itemList}) => {
    const navigate = useNavigate();
    const detailGo = (e)=>{
        const q = e.target.innerText;
            navigate('/items',{
                state :{
                    q: q,
                },
            });
    };
return (
    <>
    <ul className={styles.ul}>
    {itemList&&itemList.map((item)=>{
    return  <li onClick={detailGo} className={styles.li} key={item.strIngredient1}>{item.strIngredient1}</li>;
    })}
    </ul>
</>
);
};
export default Posts;