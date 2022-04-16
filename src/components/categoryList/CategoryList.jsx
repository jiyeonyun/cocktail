import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './CategoryList.module.css';
const CategoryList = ({cocktail}) => {
    const [categoryList,setCategorylist] = useState();
    const category = ()=>{
        cocktail
        .categoryList()
        .then(drink=>setCategorylist(drink))
    };
    useEffect(()=>{
        category();
    },[]);
    return(
        <>
        <div className={styles.listWrap}>
            <ul className={styles.ul}>
                    {categoryList&&categoryList.map((item)=>{
                        return  <li className={styles.li}key={item.strCategory}>{item.strCategory}</li>;
                    })}
            </ul>
        </div>
        </>
    );
};

export default CategoryList;