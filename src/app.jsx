import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import List from './components/list/list';
import Header from './components/header/header';
import { useState } from 'react';
function App({cocktail}) {
  const [name,setName] = useState();
  return (
    <div className={styles.div}>
      
      <BrowserRouter>
      <Header setName={setName} name={name}/>
      <Routes>
          <Route exact path='/' element={<Main cocktail={cocktail}/>} />
          <Route path='/list' element={<List cocktail={cocktail}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
