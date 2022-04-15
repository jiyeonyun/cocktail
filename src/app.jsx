import styles from './app.module.css';
import Header from './components/header/header';

function App({cocktail}) {

  return (
    <div className={styles.div}>
      <Header/>
      <img className={styles.img} src="./pngegg.png" alt="" />
      <div className={styles.button}>
      <button></button>
      </div>
    </div>
  );
}

export default App;
