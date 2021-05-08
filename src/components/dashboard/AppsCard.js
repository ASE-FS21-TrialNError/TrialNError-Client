
import React from "react";
import styled from "styled-components";
import placeholder from "../../views/design/image/placeholder.png";

const Card = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: thin;
  -webkit-box-shadow: 0 0 5px gray;
  height: 270px;
  width: 16%;
  background-color: white;
`;

const CardImageContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  &:hover{
    cursor: pointer;
  }
`;

const AppHeader = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;


const Table = styled.table`
  width: 100%;
`;


const TableHeader = styled.th`
  text-align: center;
  font-weight: normal;
`;

const TableData = styled.td`
  text-align: center;
  font-weight: normal;
`;



class AppsCard extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
      <Card>
        <CardImageContainer>
          <CardImage
            src={placeholder} alt={'missing'}
            onClick={() => {
              //this.goToDetails(app._id);
            }}
          />
        </CardImageContainer>
        <AppHeader>
          AppHeader
        </AppHeader>
        <Table>
          <thead>
          <tr>
            <TableHeader>iOS</TableHeader>
            <TableHeader>Android</TableHeader>
          </tr>
          <tr>
            <TableData>
              $1.99
            </TableData>
            <TableData>
              $1.99
            </TableData>

          </tr>
          <tr>
            <TableData>
              $1.99
            </TableData>
            <TableData>
              $1.99
            </TableData>

          </tr>
          </thead>
          <tbody>
            <tr>

            </tr>
          </tbody>
        </Table>


      </Card>
    )
  }

}

export default AppsCard;