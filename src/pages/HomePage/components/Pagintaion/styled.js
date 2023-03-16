import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    .active {
        border-radius: 50%;
        background: #d8d8d8;
    }
    li {
        list-style-type: none;
        padding: 5px 10px;
        margin: 0 3px;
        cursor: pointer;
        :hover {
            border-radius: 50%;
            background: #efebeb;
        }
    }
`