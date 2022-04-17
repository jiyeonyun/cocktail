import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './detail.module.css';
const Detail = ({cocktail}) => {
    const location = useLocation();
    const [star,setStar] = useState(false);
    const q = location.state.q;
    const [item,setItem] = useState();
    const getStar = ()=>{
        setStar(!star);
    }
    useEffect(()=>{
        cocktail
        .name(q)
        .then(drink => {setItem(drink[0]);});
    },[]);
    return(
        <div className={styles.itemwrap}>
        {
            item && <div className={styles.wrap}>
            <img className={styles.img} src={item.strDrinkThumb} alt="" />
            <div className={styles.des}>
                <div className={styles.titleWrap}>
                    <h3 className={styles.title}>{item.strDrink}</h3>
                    <button onClick={getStar} className={star?styles.ylike:styles.like}>{star?'★':'☆'}</button>
                </div>
                <h4 className={styles.h4}>{item.strAlcoholic}</h4>
                <p className={styles.p}><span className={styles.span}>category: </span>{item.strCategory} </p>
                <p className={styles.p}><span className={styles.span}>glass: </span>{item.strGlass}</p>
                <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient1}</span> - {item.strMeasure1}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient2}</span> - {item.strMeasure2}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient3}</span> - {item.strMeasure3}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient4}</span> - {item.strMeasure4}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient5}</span> - {item.strMeasure5}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient6}</span> - {item.strMeasure6}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient7}</span> - {item.strMeasure7}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient8}</span> - {item.strMeasure8}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient9}</span> - {item.strMeasure9}</li>
                    <li className={styles.li}><span className={styles.span}>{item.strIngredient10}</span> - {item.strMeasure10}</li>
                </ul>
                <p className={styles.desp}>{item.strInstructions}</p>
            </div>
            
        </div>
        }
        
        </div>
    );
};

export default Detail;