import TextField from "@material-ui/core/TextField"
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types"
import classNames from "classnames"
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    textField: {
        padding: "15px",
        margin: "5px"
    }
});

class CustomerRegistration extends React.Component {
    state = {
        showPassword : false,
        showConfirmPassword : false
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    handleClickShowConfirmPassword = () => {
        this.setState(state => ({showConfirmPassword: !state.showConfirmPassword}));
    };

    checkPasswordsMatch = () => {
        
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <TextField
                    id="user-email"
                    label="Email"
                    className={classes.textField}
                />
                <br/>

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br/>

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="confirm-password">ConfirmPassword</InputLabel>
                    <Input
                        id="confirm-password"
                        type={this.state.showConfirmPassword ? 'text' : 'password'}
                        value={this.state.confirmpassword}
                        onChange={this.handleChange('confirm-password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowConfirmPassword}
                                >
                                    {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br/>

                <TextField
                    id="phone-number"
                    label="Your Phone Number"
                    className={classes.textField}
                />
                <br/>

                <TextField
                    id="address"
                    label="Your Address"
                    className={classes.textField}
                />
                <br/>

                <TextField
                    id="service-needed"
                    label="Service Needed"
                    className={classes.textField}
                />
                <br/>

            </div>
        )
    }
}

CustomerRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomerRegistration)
