
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
  &:hover {
    cursor: pointer;
  }
`;

// subcomponent page numbers which shows up on the apps overview page
export class PageNumbers extends React.Component{

  

  render() {
    let pageNumbers = [];
    let nrOfPageNrsDisplayed = 11;
    let lowerBoundary = 1;
    let upperBoundary = nrOfPageNrsDisplayed;

    // calculating the lower and upper boundary which will be shown

    // case when the total pages are less than displayed pages
    if(this.props.totalPages < nrOfPageNrsDisplayed){
      lowerBoundary = 1;
      upperBoundary = this.props.totalPages;

      // case when current page number is below half the number of displayed pages, not depending how many pages there are
      // only the first eleven pages should be displayed
    }else if(this.props.currentPage < Math.round(nrOfPageNrsDisplayed/2)){
      lowerBoundary = 1;
      upperBoundary = nrOfPageNrsDisplayed;

      //case when the page is close to the total amount of pages, then only the last eleven pages should be displayed
      //marked page is not in the middle anymore
    }else if(this.props.currentPage > this.props.totalPages - Math.round(nrOfPageNrsDisplayed/2)) {

      // depending if there are an even or uneven number of pages displayed, the lower boundary has to be calculated differently
      if(nrOfPageNrsDisplayed % 2 === 0){
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (this.props.totalPages - this.props.currentPage))+1;
        upperBoundary = this.props.totalPages;
      }else{
        lowerBoundary = this.props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (this.props.totalPages - this.props.currentPage));
        upperBoundary = this.props.totalPages;
      }
    }else{
      // depending if there are an even or uneven number of pages displayed, the lower boundary has to be calculated differently
      if(nrOfPageNrsDisplayed % 2 === 0){
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

    // push all the numbers from the lower to the upper boundary into array for displaying
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