import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ItemPost from '../itemPost/itemPost';
import Pagination from '../pagination/pagination';
import styles from './item.module.css';
const Item = ({cocktail}) => {
    const location = useLocation();
    const q = location.state.q;
    const [length,setLength] = useState();
    const [item,setItem] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }
    useEffect(()=>{
        cocktail
        .item(q)
        .then(drink => {
                        setLength(drink.length); 
                        setItem(drink);
                        });
    },[])
    return(
            <div className={styles.item}>
                <ItemPost category={item && currentPosts(item)} postsPerPage={postsPerPage} currentPage={currentPage}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={length && length} paginate={setCurrentPage}/>
            </div>
        );
};

export default Item;