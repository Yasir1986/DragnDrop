import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: 500
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class FilledTextFields extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: ""
  };

  
  handleChange = props => event => {
    event.preventDefault()
    this.setState({ [props]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.fullName)
    console.log(this.state.email)
    console.log(this.state.password)

    return (
      <StyledWrapper>
        <form  className={classes.container}>
          <TextField
            value={this.state.fullName}
            onChange={this.handleChange("fullName")}
            id="filled-name-input"
            label="Full Name"
            className={classes.textField}
            type="name"
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-email-input"
            value={this.state.email}
            onChange={this.handleChange("email")}
            label="Email"
            className={classes.textField}
            type="email"
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            variant="filled"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
          <Button
           onClick={() => {
                    alert("Signing In...")}}
          >
          Sign in
          </Button>
        </form>
      </StyledWrapper>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilledTextFields);

const StyledWrapper = styled.div`
    margin: 10%;
    text-align: -webkit-center;
`;
