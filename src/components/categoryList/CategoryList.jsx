import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryList.module.css';
const CategoryList = ({cocktail}) => {
    const navigate = useNavigate();
    const [categoryList,setCategorylist] = useState();
    const category = ()=>{
        cocktail
        .categoryList()
        .then(drink=>setCategorylist(drink))
    };
    const detailGo = (e)=>{
        const q = e.target.innerText;
            navigate('/categorys',{
                state :{
                    q: q,
                },
            });
    };
    useEffect(()=>{
        category();
    },[]);
    return(
        <>
        <div className={styles.listWrap}>
            <ul className={styles.ul}>
                    {categoryList&&categoryList.map((item)=>{
                        return  <li onClick={detailGo} className={styles.li} key={item.strCategory}>{item.strCategory}</li>;
                    })}
            </ul>
        </div>
        </>
    );
};

export default CategoryList;