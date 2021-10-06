import styled from "styled-components";

export const NavTag = styled.nav`
  background-color: #354739;
  height: 10vh;
  border-radius: 5px;
`;
export const NavBar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  cursor: pointer;
  height: 100%;
  li a {
    color: #ebe5db;
    list-style: none;
    text-decoration: none;
    :hover {
      border-bottom: 2px solid wheat;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border: 0;
`;

export const ItemBox = styled.li`
  background-color: #b35417;
  border: 4px solid #354739;
  border-radius: 15px;
  img {
    width: 50px;
  }
  color: #ebe5db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 350px;
  height: 600px;
  margin: 2vh;
  padding: 12px;
  #desc {
    font-size: 0.8rem;
  }
`;