import React from "react";

const Pagination = ({  totalPosts,  postPerPage, setCurrentPage, currentPage,}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="my-6 text-center">
      <ul className="inline-flex -space-x-px text-sm">
        {pages.map((pagenumber) => (
          <li key={pagenumber}>
            <button
              onClick={()=> setCurrentPage(pagenumber)
              }
              className={
                pagenumber == currentPage
                  ? "flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  : "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#2f2f2f] border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }>
              {pagenumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
