import React from 'react';
import styles from './main.module.css';
import { useEffect, useState } from 'react';
import Header from '../header/header';
import Random from '../random/random';
import { useNavigate } from 'react-router-dom';
const Main = ({cocktail}) => {
    const navigate = useNavigate();
    const [rCocktail,setRcocktail] = useState();
    const [randoms,setRandoms] = useState(false);
    const [reRandom,setReRandoms] = useState(false);
    const goTo = ()=>{
        navigate('/list');
    };
    const random = ()=>{
        setRandoms(true);
        setReRandoms(!reRandom);
    }
    useEffect(()=>{
        cocktail
        .random()
        .then(drink=>setRcocktail(drink[0]));
    },[reRandom])
    return(
        <div className={styles.main}>
            <Header/>
        <img className={styles.img} src="./pngegg.png" alt="coktail image" />
        {
            randoms && <><Random rCocktail={rCocktail}/></>
        }
        <div className={styles.buttons}>
        <button className={styles.button} onClick={random}>🐹Random Drinks🐹</button>
        <button className={styles.button} onClick={goTo}>🐰Go To Main🐰</button>
        </div>
        </div>
    );
};

export default Main;