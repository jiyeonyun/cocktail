import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
        <nav>
            <ul className="pagination">
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                <span onClick={() => paginate(number)} className="page-link">
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