import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const [beers, setBeers] = useState([]);

  axios
    .get("https://api.punkapi.com/v2/beers")
    .then((response) => setBeers(response.data));

  useEffect(() => {
    console.log(beers);
  }, [beers]);

  return <></>;
};

export default Home;
