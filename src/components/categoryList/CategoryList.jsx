import React from 'react';
import { useState } from 'react';
import styles from './CategoryList.module.css';
const CategoryList = ({cocktail}) => {
    const [categoryList,setCategorylist] = useState();
    const category = ()=>{
        cocktail
        .categoryList()
        .then(drink=>setCategorylist(drink))
    };
    useState(()=>{
        category();
    },[]);
    return(
        <>
        <div className={styles.listWrap}>
            <ul>
                    {categoryList&&categoryList.map((item)=>{
                        return  <li key={item.strCategory}>{item.strCategory}</li>;
                    })}
            </ul>
        </div>
        </>
    );
};

export default CategoryList;