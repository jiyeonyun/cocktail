import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '../pagination/pagination';
import Posts from '../posts/posts';
import styles from './itemList.module.css';
const ItemList = ({itemList}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const length = itemList.length;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }
    return(
        <>
        <div className={styles.listWrap}>
            <ul className={styles.ul}>
                <Posts itemList={currentPosts(itemList)} postsPerPage={postsPerPage} currentPage={currentPage}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={length} paginate={setCurrentPage}/>
            </ul>
        </div>
        </>
    );
};

export default ItemList;