import React from "react";
import styled from "styled-components";
import Ratings from 'react-ratings-declarative';

const Table = styled.table`
  height: 100%;
  width: 100%;
  font-size: 16px;
`;

const TableGIC = styled.table`
  height: 110px;
  width: 80%;  
  font-size: 20px;
`;

const TableDet = styled.table`
  height: 400px;
  width: 100%;
`;

const TableHeader = styled.th`
  font-size: 20px;
  text-align: center;
`;

const RowHeader = styled.th`
  text-align: left;
`;

const RowHeaderGIC = styled.td`
  font-weight: bold;
  text-align: left;
`;

const ColumnHeaderDetail = styled.th`
  text-align: center;
  font-weight: bold;
`;

const RowHeaderDetail = styled.td`
  width: 15%;
  font-weight: bold;
  text-align: left;
`;

const TableData = styled.td`
  text-align: center;
`;

const TableDataDetail = styled.td`
  width: 42.5%;
  text-align: center;
  border: 1px solid black;
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


const numberFormatInt = (value) =>
  new Intl.NumberFormat('en-US').format(value);



// table with most important data for the single apps in the Apps overview
export default class TableComparison extends React.Component{

 
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
            <TableHeader> </TableHeader>
            <TableHeader>iOS</TableHeader>
            <TableHeader>Android</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <RowHeader>Price</RowHeader>
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
            <RowHeader>Rating</RowHeader>
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
          <tr>
            <RowHeader>Rating Count</RowHeader>
            {this.props.app.rating_count_ios !== null? (
              <TableData>{numberFormatInt(this.props.app.rating_count_ios)}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.rating_count_andr !== null? (
              <TableData>{numberFormatInt(this.props.app.rating_count_andr)}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
          </tr>
          <tr>
            <RowHeader>Min. Version</RowHeader>
            {this.props.app.min_vers_ios !== null? (
              <TableData>{this.props.app.min_vers_ios}</TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            {this.props.app.min_vers_andr !== null? (
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

// table with most important data on the top of the app details page
export class TableDetailsGIC extends React.Component{

 

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
      <TableGIC>
        <tbody>
          <tr>
            <RowHeaderGIC>Price iOS:</RowHeaderGIC>
            {this.props.app.price_ios !== null? (
                <TableData>{numberFormatCurr(this.props.app.price_ios)}</TableData>
              ) : (
                <TableData>N/A</TableData>
              )}
            <RowHeaderGIC>Rating iOS:</RowHeaderGIC>
            {this.props.app.rating_ios !== null? (
              <TableData>
                <Ratings
                  rating={this.props.app.rating_ios}
                  widgetDimensions="20px"
                  widgetSpacings="3px"
                >
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                </Ratings>
                &nbsp; ({numberFormatFloat(this.props.app.rating_ios)})
              </TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            <RowHeaderGIC>Rating Count iOS:</RowHeaderGIC>
              {this.props.app.rating_count_ios !== null? (
                <TableData>{numberFormatInt(this.props.app.rating_count_ios)}</TableData>
              ) : (
                <TableData>N/A</TableData>
            )}
          </tr>
          <tr>
          <RowHeaderGIC>Price Android:</RowHeaderGIC>
            {this.props.app.price_andr !== null? (
                <TableData>{numberFormatCurr(this.props.app.price_andr)}</TableData>
              ) : (
                <TableData>N/A</TableData>
              )}
            <RowHeaderGIC>Rating Android:</RowHeaderGIC>
            {this.props.app.rating_andr !== null? (
              <TableData>
                {/*displaying the yellow stars for the rating*/}
                <Ratings
                  rating={this.props.app.rating_andr}
                  widgetDimensions="20px"
                  widgetSpacings="3px"
                >
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                  <Ratings.Widget widgetRatedColor="rgb(255, 165, 0)" widgetEmptyColors ="rgb(255, 240, 200)" />
                </Ratings>
                &nbsp; ({numberFormatFloat(this.props.app.rating_andr)})
              </TableData>
            ) : (
              <TableData>N/A</TableData>
            )}
            <RowHeaderGIC>Rating Count Android:</RowHeaderGIC>
              {this.props.app.rating_count_andr !== null? (
                <TableData>{numberFormatInt(this.props.app.rating_count_andr)}</TableData>
              ) : (
                <TableData>N/A</TableData>
            )}
          </tr>
        </tbody>
      </TableGIC>
    )
  }
}


// table with all additional data on the bottom of the app details page
export class TableDetails extends React.Component{


  render(){
    console.log(this.props.app);
    return (
      <TableDet>
        <thead>
          <tr>
            <ColumnHeaderDetail> </ColumnHeaderDetail>
            <ColumnHeaderDetail>iOS<br/>Additional Information</ColumnHeaderDetail>
            <ColumnHeaderDetail>Android<br/>Additional Information</ColumnHeaderDetail>
          </tr>          
        </thead>
        <tbody>
          <tr>
            <RowHeaderDetail>Category</RowHeaderDetail>
            {this.props.app.category_ios !== null? (
                <TableDataDetail>{this.props.app.category_ios}</TableDataDetail>
              ) : (
                <TableDataDetail>N/A</TableDataDetail>
              )}
            {this.props.app.category_andr !== null? (
              <TableDataDetail>{this.props.app.category_andr}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>Size</RowHeaderDetail>
            {this.props.app.size_ios !== null? (
              <TableDataDetail>{this.props.app.size_ios}M</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.size_andr !== null? (
              <TableDataDetail>{this.props.app.size_andr}M</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>Minimum OS Version</RowHeaderDetail>
            {this.props.app.min_vers_ios !== null? (
              <TableDataDetail>{this.props.app.min_vers_ios}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.min_vers_andr !== null? (
              <TableDataDetail>{this.props.app.min_vers_andr}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>Release Date</RowHeaderDetail>
            {this.props.app.release_date_ios !== null? (
              <TableDataDetail>{this.props.app.release_date_ios}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.release_date_andr !== null? (
              <TableDataDetail>{this.props.app.release_date_andr}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>Last Update Date</RowHeaderDetail>
            {this.props.app.update_date_ios !== null? (
              <TableDataDetail>{this.props.app.update_date_ios}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.update_date_andr !== null? (
              <TableDataDetail>{this.props.app.update_date_andr}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>Content Rating</RowHeaderDetail>
            {this.props.app.content_rating_ios !== null? (
              <TableDataDetail>{this.props.app.content_rating_ios}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.content_rating_andr !== null? (
              <TableDataDetail>{this.props.app.content_rating_andr}</TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
          <tr>
            <RowHeaderDetail>App Store URL</RowHeaderDetail>
            {this.props.app.app_url_ios !== null? (
              <TableDataDetail><a href = {this.props.app.app_url_ios} target="_blank" rel="noreferrer">{this.props.app.app_url_ios}</a></TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
            {this.props.app.app_url_andr !== null? (
              <TableDataDetail><a href = {this.props.app.app_url_andr} target="_blank" rel="noreferrer">{this.props.app.app_url_andr}</a></TableDataDetail>
            ) : (
              <TableDataDetail>N/A</TableDataDetail>
            )}
          </tr>
        </tbody>
      </TableDet>
    )
  }
}