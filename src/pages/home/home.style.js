import styled from "styled-components";

export const Content = styled.div`
  background-color: #ff9;
`;
export const NavTag = styled.nav`
  background-color: #354739;
  height: 10vh;
  border-radius: 5px;

  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;
export const NavBar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
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
  span {
    border: 1px solid #ff9;
    padding: 3px;
    border-radius: 5px;
    font-weight: bolder;
    color: black;
    background-color: #ff9;
  }
  @media (max-width: 700px) {
    margin: 0;
    width: 100%;
    padding: 0;
    justify-content: center;
    span{
      padding: 1px;
      /* visibility: hidden; */
    }
    li{
      width: 25%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 0;
  background-color: #ff9;

  @media (max-width:700px){
    padding: 0;
    font-size: 0.6rem;
  }
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
  button {
    padding: 10px;
    margin-top: 2vh;
    border-radius: 5px;
    border: 0;
    background-color: black;
    color: white;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
    font-weight: bolder;
  }
  select {
    border-radius: 5px;
    padding: 5px;
    background-color: wheat;
  }
  @media (max-width:700px){
    width: 80%;
  }
`;
