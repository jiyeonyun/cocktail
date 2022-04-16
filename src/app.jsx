import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import List from './components/list/list';
function App({cocktail}) {
  
  return (
    <div className={styles.div}>
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Main cocktail={cocktail}/>} />
          <Route path='/list' element={<List cocktail={cocktail}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
