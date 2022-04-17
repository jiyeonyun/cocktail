import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './categoryPost.module.css';
const CategoryPost = ({category}) => {
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
export default CategoryPost;