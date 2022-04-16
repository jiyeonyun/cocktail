import React from 'react';
import styles from './random.module.css';
const Random = ({rCocktail}) =>{

return(
    <div className={styles.random}>
    <img className={styles.img} src={rCocktail.strDrinkThumb} alt="" />
    <div className={styles.randomDes}>
        <h2 className={styles.randomTitle}>{rCocktail.strDrink}</h2>
        <ul className={styles.randomList}>
            <li className={styles.randomLi}><span className={styles.span}>Category:</span> {rCocktail.strCategory}</li>
            <li className={styles.randomLi}><span className={styles.span}>Alcohol:</span> {rCocktail.strAlcoholic}</li>
            <li className={styles.randomLi}><span className={styles.span}>Ingredient:</span> {rCocktail.strIngredient1},
            {rCocktail.strIngredient2},{rCocktail.strIngredient3},{rCocktail.strIngredient4}
            {rCocktail.strIngredient5&&`,${rCocktail.strIngredient5}`} 
            </li>
        </ul>
    </div>
</div>
);
};

export default Random;