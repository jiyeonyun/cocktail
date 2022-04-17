import React from 'react';
import styles from './likeList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar  } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LikeList = ({likeArray,setLikeArray}) => {
    const [star,setStar] = useState(true);
    const getStar = (e)=>{
        const id = e.target.value; 
        if(star){
            let newArr = [...likeArray];
            let index = newArr.findIndex(i=> i.id === id);
            console.log(index);
            if (index > -1) {
                newArr.splice(index, 1);
            }
            setLikeArray(newArr);
        };
    };
    return(
    <div className={styles.likeWrap}>
        <ul className={styles.ul}>
            {
                likeArray.map((item) => {
                    return <li className={styles.li} key={item.id}>
                            <img className={styles.img} src={item.img} alt="" />
                            <h4 className={styles.title}>{item.name}</h4>
                            <button onClick={getStar} className={styles.ylike} value={item.id}><FontAwesomeIcon className={styles.icon}  icon={faStar} /></button>
                            </li>;
                })
            }
        </ul>
    </div>
    );
};

export default LikeList;