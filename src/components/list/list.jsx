import React from 'react';
import { useState } from 'react';
import Header from '../header/header';
import styles from './list.module.css';
const List = ({cocktail}) => {
    const [categoryList,setCategorylist] = useState();
    const [itemList,setItemList] = useState();
    const category = ()=>{
        cocktail
        .random()
        .then(drink=>setCategorylist(drink))
    };
    const item = ()=>{
        cocktail
        .random()
        .then(drink=>setItemList(drink))
    };
    useState(()=>{
        category();
        item();
    },[])
    return(
        <>
        <div className={styles.listWrap}>
            
        </div>
        </>
    );
};

export default List;