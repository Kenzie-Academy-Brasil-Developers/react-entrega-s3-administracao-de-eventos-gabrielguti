import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ItemBox, List, NavBar, NavTag } from "./home.style";
import { Link } from "react-router-dom";
const Home = () => {
  const [beers, setBeers] = useState([]);
  const [value, setValue] = useState("Confraternização");

  const handle = () => {
    console.log(value);
  };

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavTag>
        <NavBar>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wedding">Casamento</Link>
          </li>
          <li>
            <Link to="/party">Party</Link>
          </li>
          <li>
            <Link to="/graduation">Graduation</Link>
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
              <p>{item.volume.value} Litros</p>
              <select name="select" onChange={(e) => setValue(e.target.value)}>
                <option value="Confraternização">Confraternização</option>
                <option value="Casamento">Casamento</option>
                <option value="Formatura">Formatura</option>
              </select>
              <button onClick={handle}>Enviar</button>
            </ItemBox>
          ))}
      </List>
    </div>
  );
};

export default Home;
