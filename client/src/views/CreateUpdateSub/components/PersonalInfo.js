import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NavButtons from './NavButtons';

import {
  setUserEmail,
  setFirstName,
  setLastName,
  setAddress,
} from '../../../actions';

const PersonalInfo = ({
  userEmail,
  firstName,
  lastName,
  address,
  setUserEmail,
  setFirstName,
  setLastName,
  setAddress,
}) => {
  const [userEmailValidation, setUserEmailValidation] = useState(false);
  const [zipcodeValidation, setZipcodeValidation] = useState(false);

  const handleAddressValues = (e) => {
    let newAddress = { ...address };
    newAddress[e.target.name] = e.target.value;
    setAddress(newAddress);
  };

  const nextDisableStatus =
    userEmailValidation &&
    userEmail.trim() !== '' &&
    firstName.trim() !== '' &&
    lastName.trim() !== '' &&
    address.street.trim() !== '' &&
    address.city.trim() !== '' &&
    address.state.trim() !== '' &&
    zipcodeValidation &&
    address.zipcode.trim() !== '';

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component='h4' variant='h5'>
          Personal Info
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          variant='outlined'
          label='Email'
          helperText='ex. johnsmith@gmail.com'
          onChange={(e) => setUserEmail(e.target.value)}
          name='email'
          value={userEmail}
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
          margin='dense'
          validatorListener={(validation) => setUserEmailValidation(validation)}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='First Name'
              helperText='ex. John'
              onChange={(e) => setFirstName(e.target.value)}
              name='firstName'
              value={firstName}
              validators={['required']}
              errorMessages={['This field is required']}
              margin='dense'
            />
          </Grid>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='Last Name'
              helperText='ex. Smith'
              onChange={(e) => setLastName(e.target.value)}
              name='lastName'
              value={lastName}
              validators={['required']}
              errorMessages={['This field is required']}
              margin='dense'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          variant='outlined'
          label='Street'
          helperText='ex. 123 48th Street Apt 2103'
          onChange={(e) => handleAddressValues(e)}
          name='street'
          value={address.street}
          validators={['required']}
          errorMessages={['This field is required']}
          margin='dense'
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='City'
              helperText='ex. New York City'
              onChange={(e) => handleAddressValues(e)}
              name='city'
              value={address.city}
              validators={['required']}
              errorMessages={['This field is required']}
              margin='dense'
            />
          </Grid>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='State'
              helperText='ex. New York'
              onChange={(e) => handleAddressValues(e)}
              name='state'
              value={address.state}
              validators={['required']}
              errorMessages={['This field is required']}
              margin='dense'
            />
          </Grid>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='Zipcode'
              helperText='ex. 10004'
              onChange={(e) => handleAddressValues(e)}
              name='zipcode'
              value={address.zipcode}
              validators={[
                'required',
                'minStringLength:5',
                'maxStringLength:5',
                'isNumber',
              ]}
              errorMessages={[
                'This field is required',
                'Zipcode must be a 5-digit number',
                'Zipcode must be a 5-digit number',
                'Zipcode must be a 5-digit number',
              ]}
              margin='dense'
              validatorListener={(validation) =>
                setZipcodeValidation(validation)
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <NavButtons nextDisableStatus={nextDisableStatus} />
    </Grid>
  );
};

const mapStateToProps = ({ createSubReducers }) => ({
  userEmail: createSubReducers.userEmail,
  firstName: createSubReducers.firstName,
  lastName: createSubReducers.lastName,
  address: createSubReducers.address,
});

export default connect(mapStateToProps, {
  setUserEmail,
  setFirstName,
  setLastName,
  setAddress,
})(PersonalInfo);
