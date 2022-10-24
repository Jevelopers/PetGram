import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &.fixed{
    background: #fff;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .3);
    left: 0;
    margin: 0 auto;
    max-width: fit-content;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;


  }
`

export const Item = styled.li`
  padding: 5px 8px;
`