import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledList>
          <a href="/">Home</a>
          <a href="/upload">Upload</a>
          <a href="/contact">Contact</a>
        </StyledList>
        <p>© 2018 Yasir All Rights Reserved.</p>
      </StyledFooter>
    );
  }
}

export default Footer;

const StyledFooter = styled.div`
  height: 7%;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  top: 2;
  line-height: 0.5rem;
  background-color: #efefef;
  text-align: center;
`;

const StyledList = styled.div`
  line-height: 1rem;
  display: flex;
  background-color: #efefef;
  justify-content: space-around;
  a:link {
    text-decoration: none;
  }
`;
