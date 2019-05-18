import React from "react";
import {
  CardBody,
  HeroImg,
  HeroName,
  HeroInfo,
  HeroAttributes
} from "./HeroCardStyle";
import ButtonDefault from "../../components/shared/Buttons";
function componentName() {
  return (
    <CardBody>
      <HeroImg src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" />
      <HeroInfo>
        <HeroName>IRON MAN</HeroName>
        <HeroAttributes>Idade: 54 anos</HeroAttributes>
        <HeroAttributes>Nascimento: 17/05/1960</HeroAttributes>
        <HeroAttributes>Nascimento: 17/05/1960</HeroAttributes>
        <HeroAttributes>Quadrinhos: 2550</HeroAttributes>
      </HeroInfo>
      <ButtonDefault name="Veja mais" />
    </CardBody>
  );
}

export default componentName;
