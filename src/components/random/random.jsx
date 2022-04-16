import React from 'react';
import styles from './random.module.css';
const Random = ({rCocktail}) =>{
return(
    <div className={styles.random}>
    <img src={rCocktail.strDrinkThumb} alt="" />
    <div className={styles.randomDes}>
        <h2 className={styles.randomTitle}>{rCocktail.strDrink}</h2>
        <ul className={styles.randomList}>
            <li className={styles.randomLi}>Category: {rCocktail.strCategory}</li>
            <li className={styles.randomLi}>Alcohol: {rCocktail.strAlcoholic}</li>
            <li className={styles.randomLi}>Ingredient: {rCocktail.strIngredient1},
            {rCocktail.strIngredient2},{rCocktail.strIngredient3},{rCocktail.strIngredient4}
            {rCocktail.strIngredient5&&`,${rCocktail.strIngredient5}`} 
            </li>
        </ul>
    </div>
</div>
);
};

export default Random;