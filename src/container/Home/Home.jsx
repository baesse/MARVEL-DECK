import React from "react";
import PropTypes from "prop-types";
import HeroCard from "../../components/HeroCard";
import { Body, Cards } from "./HomeStyle";
import Header from "../../components/Layout/Header/Header";
function Home(props) {
  return (
    <Body>
      <Header />
      <Cards>
        {[1, 2, 3].map(hero => {
          return <HeroCard />;
        })}
      </Cards>
    </Body>
  );
}

export default Home;
