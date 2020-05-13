import React from "react";
import PropTypes from "prop-types";

const PaginationButtons = (props) => {
  const { currentPage, navigate } = props;
  const pageCount = props.pageCount();

  const getPageNumbers = () => {
    const pageCount = props.pageCount();
    if (pageCount < 4) return [...Array(pageCount + 1).keys()].slice(1);
    else if (currentPage <= 4) return [1, 2, 3, 4, 5];
    else if (currentPage > pageCount - 4)
      return [...Array(5).keys()].reverse().map((i) => pageCount - i);
    else return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <React.Fragment>
      <button
        onClick={() => navigate(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-secondary"
      >
        Prev
      </button>
      {currentPage > 4 && (
        <React.Fragment>
          <button
            className="btn btn-secondary mx-1"
            onClick={() => navigate(1)}
          >
            1
          </button>
          <span className="h4">...</span>
        </React.Fragment>
      )}
      {getPageNumbers().map((num) => (
        <button
          className={`btn mx-1 ${
            num === currentPage ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => navigate(num)}
          key={num}
        >
          {num}
        </button>
      ))}
      {currentPage <= pageCount - 4 && (
        <React.Fragment>
          <span className="h4">...</span>
          <button onClick={() => navigate(pageCount)}>{pageCount}</button>
        </React.Fragment>
      )}
      <button
        onClick={() => navigate(currentPage + 1)}
        disabled={pageCount === currentPage}
      >
        Next
      </button>
    </React.Fragment>
  );
};

PaginationButtons.propTypes = {
  pageCount: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default PaginationButtons;
