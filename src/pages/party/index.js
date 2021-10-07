import { useContext } from "react";
import { Link } from "react-router-dom";
import { PartyContext } from "../../providers/party/index";
import { ItemBox } from "../home/home.style";
import { ProductList, LinkDiv } from "../wedding/style.wedding";

const Party = () => {
  const { partyList, removeFromParty } = useContext(PartyContext);

  return (
    <div>
      <LinkDiv>
        <Link to="/">Voltar</Link>
      </LinkDiv>
      <h1>
        Bebidas para a Confraternização: <span>{partyList.length}</span>
      </h1>
      <ProductList>
        {partyList.map((item, index) => (
          <ItemBox key={item.id}>
            <img alt="beer" src={item.image_url} />
            <h2>{item.name}</h2>
            <p>{item.first_brewed}</p>
            <p id="desc">{item.description}</p>
            <p>{item.volume.value} L</p>
            <button onClick={() => removeFromParty(index)}>Remover</button>
          </ItemBox>
        ))}
      </ProductList>
    </div>
  );
};

export default Party;
