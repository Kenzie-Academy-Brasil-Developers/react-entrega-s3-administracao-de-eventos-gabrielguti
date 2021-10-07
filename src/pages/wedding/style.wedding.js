import styled from "styled-components";

export const LinkDiv = styled.div`
  font-weight: bolder;
  background-color: #b8860b;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 10%;
  text-align: center;
  margin-left: -1vw;
  a {
    color: white;
    text-decoration: none;
  }
  @media (max-width:700px){
    width: 40%;
  }
`;

export const ProductList = styled.div`
  overflow: auto;
  height: 80vh;
  border: 4px solid #b8860b;
  border-radius: 15px;
  @media (max-width:700px){
      width: 100%;
    
      padding: 0;
      margin: 0;
  }
`;
