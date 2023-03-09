import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    .active {
        background: #d8d8d8;
        border-radius: 50%;
    }
    li {
        list-style-type: none;
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
    }
`