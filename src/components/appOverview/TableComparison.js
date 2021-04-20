
import React from "react";
import styled from "styled-components";

const Table = styled.table`
  heigth: 100%;
  width: 100%;
  font-size: 16px;

`;

const TableHeader = styled.th`
  font-size: 20px;
  text-align: center;
`;

const RowHeader = styled.th`
  text-align: left;
`;

const TableData = styled.td`
  text-align: center;
  font-weight: normal;
`;

export default class TableComparison extends React.Component{

  constructor(props) {
    super(props);

  }


  render(){

    /*if(this.props.app.rating_count_ios){
      let appRatingIOS = this.props.app.rating_count_ios;
      appRatingIOS = appRatingIOS.toFixed(2);
    }
    if(this.props.app.rating_count_andr){
      let appRatingAndroid = this.props.app.rating_count_andr
      appRatingAndroid = appRatingAndroid.toFixed(2);
    }*/


    return (
      <Table>
        <thead>
          <tr>
            <TableHeader></TableHeader>
            <TableHeader>iOS</TableHeader>
            <TableHeader>Android</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <RowHeader>Price</RowHeader>
            {this.props.app.price_ios ? (
                <TableData>{this.props.app.price_ios}$</TableData>
              ) : (
                <TableData>N/A</TableData>
              )}
            {this.props.app.price_andr ? (
              <TableData>{this.props.app.price_andr}$</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
          </tr>
          <tr>
            <RowHeader>Rating</RowHeader>
            {this.props.app.rating_ios ? (
              <TableData>{this.props.app.rating_ios}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.rating_andr ? (
              <TableData>{this.props.app.rating_andr}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
          </tr>
          <tr>
            <RowHeader>Rating Count</RowHeader>
            {this.props.app.rating_count_ios ? (
              <TableData>{this.props.app.rating_count_ios}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.rating_count_andr ? (
              <TableData>{this.props.app.rating_count_andr}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
          </tr>
          <tr>
            <RowHeader>Min. Version</RowHeader>
            {this.props.app.min_vers_ios ? (
              <TableData>{this.props.app.min_vers_ios}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.min_vers_andr ? (
              <TableData>{this.props.app.min_vers_andr}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
          </tr>
        </tbody>
      </Table>
    )
  }
}
