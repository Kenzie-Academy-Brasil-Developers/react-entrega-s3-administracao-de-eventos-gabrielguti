import { useContext } from "react";
import { Link } from "react-router-dom";
import { GraduationContext } from "../../providers/formatura/index";
import { ItemBox } from "../home/home.style";
import { ProductList, LinkDiv } from "../casamento/style.wedding";

const Graduation = () => {
  const { graduationList, removeFromGraduation } =
    useContext(GraduationContext);

  return (
    <div>
      <LinkDiv>
        <Link to="/">Voltar</Link>
      </LinkDiv>
      <h1>
        Bebidas para a Formatura: <span>{graduationList.length}</span>
      </h1>
      <ProductList>
        {graduationList.map((item) => (
          <ItemBox key={item.id}>
            <img alt="beer" src={item.image_url} />
            <h2>{item.name}</h2>
            <p>{item.first_brewed}</p>
            <p id="desc">{item.description}</p>
            <p>{item.volume.value} L</p>
            <button onClick={() => removeFromGraduation(item)}>Remover</button>
          </ItemBox>
        ))}
      </ProductList>
    </div>
  );
};

export default Graduation;
