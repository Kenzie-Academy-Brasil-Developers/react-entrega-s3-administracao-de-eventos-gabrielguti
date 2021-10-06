import { useContext } from "react";
import { Link } from "react-router-dom";
import { WeddingContext } from "../../providers/casamento";
import { ItemBox } from "../home/home.style";
import { ProductList, LinkDiv } from "./style.wedding";
const Wedding = () => {
  const { weddingList, removeFromWedding } = useContext(WeddingContext);

  return (
    <div>
      <LinkDiv>
        <Link to="/">Voltar</Link>
      </LinkDiv>
      <h1>
        Bebidas para o casamento: <span>{weddingList.length}</span>
      </h1>
      <ProductList>
        {weddingList.map((item) => (
          <ItemBox key={item.id}>
            <img alt="beer" src={item.image_url} />
            <h2>{item.name}</h2>
            <p>{item.first_brewed}</p>
            <p id="desc">{item.description}</p>
            <p>{item.volume.value} L</p>
            <button onClick={() => removeFromWedding(item)}>Remover</button>
          </ItemBox>
        ))}
      </ProductList>
    </div>
  );
};

export default Wedding;
