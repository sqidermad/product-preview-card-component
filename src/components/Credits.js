import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 11px;
  text-align: center; 

  a {
    color: hsl(228, 45%, 44%);
  }
`

class Credits extends React.Component {
  render() {
    return (
      <Wrapper>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/mariaavnss">Vane</a>.
      </Wrapper>
    )
  }
}

export default Credits;