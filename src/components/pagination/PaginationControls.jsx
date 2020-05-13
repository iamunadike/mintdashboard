import React from "react";
import PaginationButtons from "./PaginationButtons";
import "../../assets/scss/paginate.scss";
const PaginationControls = ({
  pageSize,
  pageCount,
  currentPage,
  navigateToPage,
  calcTotal,
}) => {
  return (
    <div className="pagination_ctrls">
      <div className="pgn_btns">
        <span className="left_side">
          {`Showing 1 to ${pageSize} of ${calcTotal}`}
        </span>
        <span className="right_side">
          <PaginationButtons
            currentPage={currentPage}
            pageCount={pageCount}
            navigate={navigateToPage}
          />
        </span>
      </div>
    </div>
  );
};

export default PaginationControls;
