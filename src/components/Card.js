import React from "react";
import styled from "styled-components";

import ParfurmDesktop from "../images/image-product-desktop.jpg";
import ParfurmMobile from "../images/image-product-mobile.jpg";

const Container = styled.div`
  background-color: var(--white);

  display: flex;

  box-shadow: 0 4px 30px -6px rgba(0,0,0, 0.1);
  box-sizing: content-box;
  border-radius: 10px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  width: 50%;

  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const Wrapper = styled.div`
  text-align: left;
  padding: 50px;
`;

const RealPrice = styled.span`
  color: var(--dark-cyan);
`;

const OldPrice = styled.span`
  font-style: stroke;
`;

const Image = styled.img`
  /* display: block; */
  min-width: 50%;
  min-heigth: 100%;
  background-color: var(--red);
`

function Copy() {
  return (
    <Wrapper>
      <h3>PERFUME</h3>
      <h1> Gabrielle Essence Eau De Parfurm</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price">
        <RealPrice> $149.99</RealPrice>
        <OldPrice>$169.99</OldPrice>
      </div>
    </Wrapper>
  );
}

class Card extends React.Component {
  render() {
    return (
      <Container>
        <Image 
          src={ParfurmDesktop}
          alt="Gabrielle Essence Eau De Parfurm in Portrait"
        />
        <Copy />
      </Container>
    );
  }
}

export default Card;
