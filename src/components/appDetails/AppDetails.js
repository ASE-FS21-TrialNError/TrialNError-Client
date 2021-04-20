
import React from "react";
import styled from "styled-components";
import {Header} from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";

export default class AppDetails extends React.Component{

  render(){
    return (
      <div>
        <Header/>
        <ContentContainer>
          <PageHeaderContainer>
            <PageHeaderSearchBarContainer>
              <PageHeading>
                App Details
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
        </ContentContainer>
      </div>
    )
  }
}