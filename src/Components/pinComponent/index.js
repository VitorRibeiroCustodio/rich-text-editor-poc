import React from 'react';
import styled from "styled-components";

const PinWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 1em;
  display: inline;
`;

const SphereStyle = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: green;
  position: absolute;
`;

const StickStyle = styled.div`
  width: 2px;
  height: 20px;
  border: 2px solid green;
  margin-left: 3px;
`;

const LabelStyle = styled.span`
  margin-left: 12px;
  color: green;
  margin-top: -2px;
  position: absolute;
  font-size: 12px;
`;

export default class PinComponent extends React.Component {
  render() {
    return(
      <PinWrapper>
        <LabelStyle>
          Cough
        </LabelStyle>
        <SphereStyle />
        <StickStyle />
      </PinWrapper>
    );
  }
}