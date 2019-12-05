import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NavButtons from './NavButtons';

import { setCardInfo } from '../../../actions';

const Payment = ({ cardInfo, setCardInfo }) => {
  const [cardNumber, setCardNumber] = useState(false);
  const [expireDate, setExpireDate] = useState(false);
  const [securityCode, setSecurityCode] = useState(false);

  ValidatorForm.addValidationRule('isCorrectExpireDateFormat', (value) => {
    const splitValue = value.split('/');
    if (splitValue.length === 2) {
      if (Number(splitValue[0]) !== NaN && Number(splitValue[1] !== NaN)) {
        if (Number(splitValue[0]) < 13 && Number(splitValue[0]) > 0) {
          return true;
        }
      }
    }
    return false;
  });

  const handleCardInfoValues = (e) => {
    let newCardInfo = { ...cardInfo };
    newCardInfo[e.target.name] = e.target.value;
    setCardInfo(newCardInfo);
  };

  const nextDisableStatus = cardNumber && expireDate && securityCode;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component='h4' variant='h5'>
          Payment
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextValidator
          variant='outlined'
          label='Card Number'
          helperText='ex. 16-digit number'
          onChange={(e) => handleCardInfoValues(e)}
          name='cardNumber'
          value={cardInfo.cardNumber}
          validators={[
            'required',
            'minStringLength:16',
            'maxStringLength:16',
            'isNumber',
          ]}
          errorMessages={[
            'This field is required',
            'Card Number must be a 16-digit number',
            'Card Number must be a 16-digit number',
            'Card Number must be a 16-digit number',
          ]}
          margin='dense'
          validatorListener={(validation) => setCardNumber(validation)}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='Expiration Date'
              helperText='ex. 01/28'
              onChange={(e) => handleCardInfoValues(e)}
              name='expireDate'
              value={cardInfo.expireDate}
              validators={[
                'required',
                'minStringLength:5',
                'maxStringLength:5',
                'isCorrectExpireDateFormat',
              ]}
              errorMessages={[
                'This field is required',
                'Provide correct expiration date format: ex. 01/28',
                'Provide correct expiration date format: ex. 01/28',
                'Provide correct expiration date format: ex. 01/28',
              ]}
              margin='dense'
              validatorListener={(validation) => setExpireDate(validation)}
            />
          </Grid>
          <Grid item>
            <TextValidator
              variant='outlined'
              label='Security Code'
              helperText='ex. 123'
              onChange={(e) => handleCardInfoValues(e)}
              name='securityCode'
              value={cardInfo.securityCode}
              validators={[
                'required',
                'minStringLength:3',
                'maxStringLength:3',
                'isNumber',
              ]}
              errorMessages={[
                'This field is required',
                'Security Code must be a 3-digit number',
                'Security Code must be a 3-digit number',
                'Security Code must be a 3-digit number',
              ]}
              margin='dense'
              validatorListener={(validation) => setSecurityCode(validation)}
            />
          </Grid>
        </Grid>
      </Grid>
      <NavButtons nextDisableStatus={nextDisableStatus} />
    </Grid>
  );
};

const mapStateToProps = ({ createSubReducers }) => ({
  cardInfo: createSubReducers.cardInfo,
});

export default connect(mapStateToProps, {
  setCardInfo,
})(Payment);
