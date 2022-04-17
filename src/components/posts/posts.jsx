import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './posts.module.css';
const Posts = ({ itemList}) => {
return (
    <>
    <ul className={styles.ul}>
    {itemList&&itemList.map((item)=>{
    return  <li className={styles.li} key={item.strIngredient1}>{item.strIngredient1}</li>;
    })}
    </ul>
</>
);
};
export default Posts;