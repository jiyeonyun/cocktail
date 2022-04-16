import { useCallback, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';

function App({cocktail}) {
  const [rCocktail,setRcocktail] = useState();
  const random = ()=>{
    cocktail
    .random()
    .then(drink=>setRcocktail(drink));
  }
  console.log(rCocktail);
    
  return (
    <div className={styles.div}>
      <Header/>
      <img className={styles.img} src="./pngegg.png" alt="coktail image" />
      <div className={styles.buttons}>
      <button className={styles.button} onClick={random}>🐹Random Drinks🐹</button>
      <button className={styles.button}>🐰Go To Main🐰</button>
      </div>
    </div>
  );
}

export default App;
