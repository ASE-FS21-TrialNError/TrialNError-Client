
import React from "react";
import styled from "styled-components";
import placeholder from "../../views/design/image/placeholder.png";
import { withRouter } from "react-router-dom";
import Ratings from "react-ratings-declarative";

const Card = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: thin;
  -webkit-box-shadow: 0 0 5px gray;
  height: 100%;
  width: 100%;
  background-color: white;
  padding-right: 10px;
  padding-left: 10px;
  &:hover{
    transform: translateY(-2px);
    cursor: pointer;
  }
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

const numberFormatCurr = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

const numberFormatFloat = (value) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value);



class AppsCard extends React.Component{
  constructor() {
    super();
  }



  render(){
    return (
      <Card

      >
        <CardImageContainer>
          <CardImage
            src={this.props.app.logo_url} alt={'missing'}
            onClick={() => {
              //this.goToDetails(app._id);
            }}
          />
        </CardImageContainer>
        <AppHeader>
          {this.props.app.name}
        </AppHeader>
        <Table>
          <thead>
          <tr>
            <TableHeader>iOS</TableHeader>
            <TableHeader>Android</TableHeader>
          </tr>
          <tr>
            {this.props.app.price_ios !== null? (
              <TableData>{numberFormatCurr(this.props.app.price_ios)}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.price_andr !== null? (
              <TableData>{numberFormatCurr(this.props.app.price_andr)}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}

          </tr>
          <tr>
            {this.props.app.rating_ios !== null? (
              <TableData>
                <Ratings
                  rating={this.props.app.rating_ios}
                  widgetDimensions="15px"
                  widgetSpacings="1px"
                >
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                </Ratings>
              </TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.rating_andr !== null? (
              <TableData>
                <Ratings
                  rating={this.props.app.rating_andr}
                  widgetDimensions="15px"
                  widgetSpacings="1px"
                >
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                </Ratings>
              </TableData>
            ) : (
              <TableData>N/A</TableData>
            )}

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

export default withRouter(AppsCard);