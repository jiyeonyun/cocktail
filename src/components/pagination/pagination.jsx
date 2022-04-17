import React from "react";
import styles from './pagination.module.css';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
    <div className={styles.div}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
            {pageNumbers.map((number) => (
                <li className={styles.li} key={number}>
                <span className={styles.sapn} onClick={() => paginate(number)}>
                    {number}
                </span>
                </li>
            ))}
            </ul>
        </nav>
    </div>
    );
};

export default Pagination;