import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Content, ItemBox, List, NavBar, NavTag } from "./home.style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WeddingContext } from "../../providers/casamento";
import { PartyContext } from "../../providers/confraternização";
import { GraduationContext } from "../../providers/formatura";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [value, setValue] = useState("");

  const { weddingList, addToWedding } = useContext(WeddingContext);
  const { partyList, addToParty } = useContext(PartyContext);
  const { graduationList, addToGraduation } = useContext(GraduationContext);

  const handle = (value, item) => {
    if (value === "Confraternização") {
      addToParty(item);
      setValue("");
    } else if (value === "Casamento") {
      addToWedding(item);
      setValue("");
    } else if (value === "Formatura") {
      addToGraduation(item);
      setValue("");
    }
  };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Content>
      <NavTag>
        <NavBar>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/wedding">
              Casamento <span>{weddingList.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/party">
              Confraternização <span>{partyList.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/graduation">
              Formatura <span>{graduationList.length}</span>
            </Link>
          </li>
        </NavBar>
      </NavTag>
      <List>
        {beers &&
          beers.map((item) => (
            <ItemBox key={item.id}>
              <img alt="beer" src={item.image_url} />
              <h2>{item.name}</h2>
              <p>{item.first_brewed}</p>
              <p id="desc">{item.description}</p>
              <p>{item.volume.value} L</p>
              <select name="select" onChange={(e) => setValue(e.target.value)}>
                <option value="" selected disabled>
                  Escolha a Ocasião
                </option>
                <option value="Confraternização">Confraternização</option>
                <option value="Casamento">Casamento</option>
                <option value="Formatura">Formatura</option>
              </select>
              <button onClick={() => handle(value, item)}>Adicionar</button>
            </ItemBox>
          ))}
      </List>
    </Content>
  );
};

export default Home;
