import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import NavButtons from './NavButtons';

import { createSub, updateSub } from '../../../actions';

import confirmationStyles from './confirmationStyles';

const Confirmation = ({
  classes,
  storage,
  duration,
  payment,
  userEmail,
  firstName,
  lastName,
  address,
  cardInfo,
  createSub,
  updateSub,
  onRedirect,
  updateSubId,
  apiError,
}) => {
  const renderTotalPayment = () => {
    let totalPayment = '';
    let paymentPerMonth = storage * 2;

    if (payment === 'Yes') {
      totalPayment = paymentPerMonth * 12;
      totalPayment = totalPayment - totalPayment * 0.1;
      return (
        <Typography component='p'>
          Total Payment:{' '}
          <span
            className={classes.infoText}
          >{`$${totalPayment} (after 10% discount)`}</span>
        </Typography>
      );
    } else {
      totalPayment = paymentPerMonth;
      return (
        <Typography component='p'>
          Total Payment:{' '}
          <span
            className={classes.infoText}
          >{`$${totalPayment} / month (${duration} months)`}</span>
        </Typography>
      );
    }
  };

  const onClickOrder = () => {
    let postData = {};
    postData.subscription = {
      duration,
      cloudGB: storage,
      upfrontPayment: payment,
    };
    postData.userInfo = {
      address: { ...address },
      userEmail,
      firstName,
      lastName,
    };
    postData.creditCard = { ...cardInfo };

    if (updateSubId) {
      updateSub({ id: updateSubId, postData, callback: onRedirect });
    } else {
      createSub(postData, onRedirect);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component='h4' variant='h5'>
          Confirmation <span></span>
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.confirmInfoWrapper}>
        <Typography component='p'>Personal Info</Typography>
        <div className={classes.confirmInfoWrapper}>
          <Typography component='p'>
            Email: <span className={classes.infoText}>{userEmail}</span>
          </Typography>
          <Typography component='p'>
            Name:{' '}
            <span
              className={classes.infoText}
            >{`${firstName} ${lastName}`}</span>
          </Typography>
          <div className={classes.addressWrapper}>
            <Typography component='p'>Address: </Typography>
            <span className={classes.addressContent}>
              <Typography className={classes.infoText} component='p'>
                {`${address.street}`}
              </Typography>
              <Typography className={classes.infoText} component='p'>
                {`${address.city}, ${address.state}`}
              </Typography>
              <Typography className={classes.infoText} component='p'>
                {`${address.zipcode}`}
              </Typography>
            </span>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.confirmInfoWrapper}>
        <Typography component='p'>Payment</Typography>
        <div className={classes.confirmInfoWrapper}>
          <Typography component='p'>
            Card Number:{' '}
            <span className={classes.infoText}>{cardInfo.cardNumber}</span>
          </Typography>
          <Typography component='p'>
            Expiration Date:{' '}
            <span className={classes.infoText}>{cardInfo.expireDate}</span>
          </Typography>
          <Typography component='p'>
            Security Code:{' '}
            <span className={classes.infoText}>{cardInfo.securityCode}</span>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.confirmInfoWrapper}>
        <Typography component='p'>Subscription Plan</Typography>
        <div className={classes.confirmInfoWrapper}>
          <Typography component='p'>
            Storage size:{' '}
            <span className={classes.infoText}>{`${storage} gb`}</span>
          </Typography>
          <Typography component='p'>
            Duration:{' '}
            <span className={classes.infoText}>{`${duration} months`}</span>
          </Typography>
          <Typography component='p'>
            Upfront Payment: <span className={classes.infoText}>{payment}</span>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} className={classes.confirmInfoWrapper}>
        {renderTotalPayment()}
      </Grid>
      <NavButtons
        nextDisableStatus
        onClickOrder={onClickOrder}
        updateSubId={updateSubId}
      />
      <Grid item xs={12}>
        <Typography color='error' component='p'>
          {((apiError || {}).data || {}).message}
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ createSubReducers, errorReducers }) => ({
  storage: createSubReducers.storage,
  duration: createSubReducers.duration,
  payment: createSubReducers.payment,
  userEmail: createSubReducers.userEmail,
  firstName: createSubReducers.firstName,
  lastName: createSubReducers.lastName,
  address: createSubReducers.address,
  cardInfo: createSubReducers.cardInfo,
  apiError: errorReducers.apiError,
});

export default withStyles(confirmationStyles)(
  connect(mapStateToProps, { createSub, updateSub })(Confirmation),
);
