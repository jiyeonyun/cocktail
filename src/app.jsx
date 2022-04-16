import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import List from './components/list/list';
import Header from './components/header/header';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon  } from '@fortawesome/free-solid-svg-icons';

function App({cocktail}) {
  const [name,setName] = useState();
  const [night,setNight] = useState(false);
  const nightMode = () => setNight(!night);

  return (
    <div className={!night? styles.div : styles.Ndiv }>
      <BrowserRouter>
      <Header setName={setName} name={name}/>
      <Routes>
          <Route exact path='/' element={<Main cocktail={cocktail}/>} />
          <Route path='/list' element={<List cocktail={cocktail}/>}/>
        </Routes>
      </BrowserRouter>
      {
            !night  ?  <FontAwesomeIcon onClick={nightMode} icon={faSun} className={styles.icon}/>
                    :   <FontAwesomeIcon onClick={nightMode} icon={faMoon} className={styles.icon}/>
      }
    </div>
  );
}

export default App;
