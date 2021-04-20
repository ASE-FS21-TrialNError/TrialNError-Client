
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

export function PageNumbers(props){

  let pageNumbers = [];
  let nrOfPageNrsDisplayed = 11;
  let lowerBoundary = 1;
  let upperBoundary = nrOfPageNrsDisplayed;
  if(props.totalPages < nrOfPageNrsDisplayed){
    lowerBoundary = 1;
    upperBoundary = 10;
  }else if(props.currentPage < Math.round(nrOfPageNrsDisplayed/2)){
      lowerBoundary = 1;
      upperBoundary = nrOfPageNrsDisplayed;
  }else if(props.currentPage > props.totalPages - Math.round(nrOfPageNrsDisplayed/2)) {
    if(nrOfPageNrsDisplayed % 2 == 0){
      lowerBoundary = props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (props.totalPages - props.currentPage))+1;
      upperBoundary = props.totalPages;
    }else{
      lowerBoundary = props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) - (Math.floor(nrOfPageNrsDisplayed/2) - (props.totalPages - props.currentPage));
      upperBoundary = props.totalPages;
    }


  }else{
    if(nrOfPageNrsDisplayed % 2 == 0){
      lowerBoundary = props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) + 1;
      upperBoundary = props.currentPage + Math.floor(nrOfPageNrsDisplayed/2);
    }else{
      lowerBoundary = props.currentPage - Math.floor(nrOfPageNrsDisplayed/2) ;
      upperBoundary = props.currentPage + Math.floor(nrOfPageNrsDisplayed/2);
    }

  }

  let currentPageStyle = {
    fontWeight: "bold",
    border: "solid",
    borderRadius: "20px"
  }

  let i=lowerBoundary;
  console.log(props.totalPages);

  for(i; i <= upperBoundary; i++){
    if(i === props.currentPage){
      pageNumbers.push(<PageNumberContainer style={currentPageStyle}>{i}</PageNumberContainer>)
    }else{
    /*pageNumbers.push(i);*/
      pageNumbers.push(
        <PageNumberContainer
        onClick = {()=>{props.updatePageNumber(i)}}
        >
          {i}
        </PageNumberContainer>
      );
    }
  }
  console.log(pageNumbers);

  return (
    <PageNumberNavigation>
      {pageNumbers}
    </PageNumberNavigation>

  )
}