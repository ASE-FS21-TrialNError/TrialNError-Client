
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: thin;
  -webkit-box-shadow: 0 0 5px gray;
  height: 200px;
  width: 14%;
  background-color: white;
`;


class AppsCard extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
      <Card>

      </Card>
    )
  }

}

export default AppsCard;