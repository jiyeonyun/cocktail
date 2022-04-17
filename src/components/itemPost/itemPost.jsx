import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './itemPost.module.css';

const ItemPost = ({category}) => {
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
                <button onClick={goTo} className={styles.button} value={item.strDrink}>Detail</button>
                </li>;
        
        })}
        </ul>
    </>
    );
    };

export default ItemPost;