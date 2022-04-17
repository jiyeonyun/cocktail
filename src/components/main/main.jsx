import React from 'react';
import styles from './main.module.css';
import { useEffect, useState } from 'react';
import Header from '../header/header';
import Random from '../random/random';

const Main = ({cocktail}) => {
    const [rCocktail,setRcocktail] = useState();
    const [randoms,setRandoms] = useState(false);
    const [reRandom,setReRandoms] = useState(false);
    const random = ()=>{
        setRandoms(true);
        setReRandoms(!reRandom);
    }
    const home = ()=> setRandoms(false);
    useEffect(()=>{
        cocktail
        .random()
        .then(drink=>setRcocktail(drink[0]));
    },[reRandom])
    return(
        <div className={styles.main}>
        {
            !randoms && <> 
            <div className={styles.imgwrap}>
                <img className={styles.img} src="./image/bg00-removebg-preview.png" alt="" />
            </div>
            </>
        }
        {
            randoms && <><Random rCocktail={rCocktail} randoms={randoms} setRandoms={setRandoms}/></>
        }
        <button onClick={home} className={styles.button}>🏡HOME🏡</button>
        <button className={styles.button} onClick={random}>🐹 Random Drinks 🐹</button>
        </div>
    );
};

export default Main;