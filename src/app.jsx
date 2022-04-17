import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import CategoryList from './components/categoryList/CategoryList';
import Header from './components/header/header';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon  } from '@fortawesome/free-solid-svg-icons';
import ItemList from './components/itemList/itemList';
import { useEffect } from 'react';
import Category from './components/category/category';
import Item from './components/item/item';
import Detail from './components/detail/detail';
import LikeList from './components/likeList/likeList'
function App({cocktail}) {
  const [itemList,setItemList] = useState();
  const [night,setNight] = useState(false);
  const [likeArray,setLikeArray] = useState([]);
  const nightMode = () => setNight(!night);
  useEffect(()=>{
    cocktail
    .itemList()
    .then(drink=>setItemList(drink));
},[]);
  return (
    <div className={!night? styles.div : styles.Ndiv }>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Main cocktail={cocktail}/>} />
          <Route path='/categorylist' element={<CategoryList cocktail={cocktail}/>} />
          <Route path='/ingredientslist' element={<ItemList itemList={itemList} cocktail={cocktail}/>} />
          <Route path='/categorys' element={<Category cocktail={cocktail}/>}/>
          <Route path='/items' element={<Item cocktail={cocktail}/>}/>
          <Route path='/detail' element={<Detail cocktail={cocktail} likeArray={likeArray} setLikeArray={setLikeArray} />}/>
          <Route path='/likelist' element={<LikeList cocktail={cocktail} likeArray={likeArray} setLikeArray={setLikeArray} />}/>
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
