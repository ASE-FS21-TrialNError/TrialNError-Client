
import React from "react";
import styled from "styled-components";

const PageNumberNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PageNumberContainer = styled.div`
  border-style: none;
  margin: 10px;
  font-size: 30px;
  font-weight: normal;
  color: blue;
`;

export class PageNumbers extends React.Component{

  constructor(props) {
    super(props);

  }



  render() {
    let pageNumbers = [];
    let nrOfPageNrsDisplayed = 11;
    let lowerBoundary = 1;
    let upperBoundary = nrOfPageNrsDisplayed;
    if(this.props.totalPages < nrOfPageNrsDisplayed){
      lowerBoundary = 1;
      upperBoundary = this.props.totalPages;
    }else if(this.props.currentPage < Math.round(nrOfPageNrsDisplayed/2)){
      lowerBoundary = 1;
      upperBoundary = nrOfPageNrsDisplayed;
    }else if(this.props.currentPage > this.props.totalPages - Math.round(nrOfPageNrsDisplayed/2)) {
      if(nrOfPageNrsDisplayed % 2 == 0){
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (this.props.totalPages - this.props.currentPage))+1;
        upperBoundary = this.props.totalPages;
      }else{
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (this.props.totalPages - this.props.currentPage));
        upperBoundary = this.props.totalPages;
      }


    }else{
      if(nrOfPageNrsDisplayed % 2 == 0){
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) + 1;
        upperBoundary = this.props.currentPage + Math.floor(nrOfPageNrsDisplayed/2);
      }else{
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) ;
        upperBoundary = this.props.currentPage + Math.floor(nrOfPageNrsDisplayed/2);
      }

    }

    let currentPageStyle = {
      fontWeight: "bold",
      border: "solid",
      borderRadius: "20px"
    }

    let i=lowerBoundary;
    console.log(this.props.totalPages);


    for(i; i <= upperBoundary; i++){
      pageNumbers.push(i);
    }
    console.log(pageNumbers);



    return (
      <PageNumberNavigation>
        {pageNumbers.map((pageNumber) => {
          if(pageNumber === this.props.currentPage){
            return (
              <PageNumberContainer
                key={pageNumber.toString()}
                style={currentPageStyle}
                onClick = {()=>{this.props.updatePageNumber(pageNumber)}}
              >
                {pageNumber}
              </PageNumberContainer>
            )
          }else {
            return (
              <PageNumberContainer
                key={pageNumber.toString()}
                onClick={() => {
                  this.props.updatePageNumber(pageNumber)
                }}
              >
                {pageNumber}
              </PageNumberContainer>
            )
          }
        })}

      </PageNumberNavigation>

    )
  }

}