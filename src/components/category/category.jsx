import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CategoryPost from '../categoryPost/categoryPost';
import Pagination from '../pagination/pagination';
import styles from './category.module.css';
const Category = ({cocktail}) =>{
    const location = useLocation();
    const q = location.state.q;
    const [length,setLength] = useState();
    const [category,setCategory] = useState();
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
        .category(q)
        .then(drink => {setLength(drink.length); 
                        setCategory(drink);
                        });
    },[])
    return(
            <div className={styles.item}>
                <CategoryPost category={category && currentPosts(category)} postsPerPage={postsPerPage} currentPage={currentPage}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={length && length} paginate={setCurrentPage}/>
            </div>
        );
};

export default Category;