import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styled from 'styled-components';

const mainmenu = {
  
  width: 200,
  height: 100,
  top: 0,
  left: 0
  
}


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <StyledOpenMenu>
        <Button
          onClick={this.handleClick}
        >
          Menu
        </Button>

        <Menu
          styled={mainmenu}
          //anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
       
        </Menu>
        </StyledOpenMenu>
    );
  }
}

export default SimpleMenu;

const StyledOpenMenu = styled.div`
     height: 100%;
     color: red;
`;