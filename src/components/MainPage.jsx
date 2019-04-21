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
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <StyledWrapper>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="filled-name-input"
            label="Full Name"
            className={classes.textField}
            type="name"
            name="name"
            autoComplete="name"
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
          />
          <Button>Sign in</Button>
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
