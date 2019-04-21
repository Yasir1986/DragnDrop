import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledList>
          <a href="/resume">Home</a>
          <a href="/projects">About Us</a>
          <a href="/contact">Contact</a>
        </StyledList>
        <p>© 2018 Yasir All Rights Reserved.</p>
      </StyledFooter>
    );
  }
}

export default Footer;

const StyledFooter = styled.div`
  padding: 2%;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
  height: 5%;
`;

const StyledList = styled.div`
  display: flex;
  
  justify-content: space-around;
    a:link {
     text-decoration: none;
    }
`;
