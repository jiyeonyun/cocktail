import { useCallback, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';

function App({cocktail}) {
  const [rCocktail,setRcocktail] = useState();
  const [randoms,setRandoms] = useState(false);
  const random = ()=>{
    cocktail
    .random()
    .then(drink=>setRcocktail(drink[0]));
    setRandoms(true);
  }
  return (
    <div className={styles.div}>
      <Header/>
      <img className={styles.img} src="./pngegg.png" alt="coktail image" />
      {
        randoms && 
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
      }
      <div className={styles.buttons}>
      <button className={styles.button} onClick={random}>🐹Random Drinks🐹</button>
      <button className={styles.button}>🐰Go To Main🐰</button>
      </div>
    </div>
  );
}

export default App;
