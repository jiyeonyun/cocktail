import React from 'react';
import { useState } from 'react';
import styles from './itemList.module.css';
const ItemList = ({cocktail}) => {
    const [itemList,setItemList] = useState();
    const item = ()=>{
        cocktail
        .itemList()
        .then(drink=>setItemList(drink))
    };
    useState(()=>{
        item();
    },[]);
    return(
        <>
        <div className={styles.listWrap}>
            <ul>
                    {itemList&&itemList.map((item)=>{
                        return  <li key={item.strIngredient1}>{item.strIngredient1}</li>;
                    })}
            </ul>
        </div>
        </>
    );
};

export default ItemList;