import { useState } from "react";
import Products from "../Products";
import { StyledReactPaginate } from "./styled";

export function PaginatedItems({ itemsPerPage, products }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    console.log(currentItems)
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Products products={currentItems} />
        <StyledReactPaginate
          className="pagination"
          activeClassName="active"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
}