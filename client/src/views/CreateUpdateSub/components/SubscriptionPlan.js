import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RadioGroupComponent from '../../../components/RadioGroupComponent';
import NavButtons from './NavButtons';

import { setStorage, setPayment, setDuration } from '../../../actions';

import {
  storageRadioData,
  durationRadioData,
  paymentRadioData,
} from '../../../constants';

const SubscriptionPlan = ({
  storage,
  duration,
  payment,
  setStorage,
  setPayment,
  setDuration,
}) => {
  const handleStorageChange = (storage) => {
    storage = Number(storage);
    setStorage(storage);
  };

  const handleDurationChange = (duration) => {
    duration = Number(duration);
    setDuration(duration);
  };

  const radioGroupData = [
    {
      options: storageRadioData,
      value: storage,
      handleChangeFn: handleStorageChange,
      name: 'storage',
      formLabel: 'Cloud Storage (Gb)',
      helpText: 'Each gigabyte costs $2 per month',
    },
    {
      options: durationRadioData,
      value: duration,
      handleChangeFn: handleDurationChange,
      name: 'duration',
      formLabel: 'Duration',
      helpText: 'Time length of your cloud usage',
    },
    {
      options: paymentRadioData,
      value: payment,
      handleChangeFn: setPayment,
      name: 'paidInFull',
      formLabel: 'Payment In Full',
      helpText: 'All upfront payment plans are discounted by 10%',
    },
  ];

  const renderRadioGroups = radioGroupData.map((radioData) => {
    return (
      <Grid item xs={12} key={radioData.name}>
        <RadioGroupComponent
          radioOptions={radioData.options}
          selectedValue={radioData.value}
          handleChangeState={radioData.handleChangeFn}
          name={radioData.name}
          formLabel={radioData.formLabel}
          helpText={radioData.helpText}
        />
      </Grid>
    );
  });

  const nextDisableStatus = storage && duration && payment.trim() !== '';

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component='h4' variant='h5'>
          Cloud storage plan
        </Typography>
      </Grid>
      {renderRadioGroups}
      <NavButtons nextDisableStatus={nextDisableStatus} />
    </Grid>
  );
};

const mapStateToProps = ({ createSubReducers }) => ({
  storage: createSubReducers.storage,
  duration: createSubReducers.duration,
  payment: createSubReducers.payment,
});

export default connect(mapStateToProps, {
  setStorage,
  setPayment,
  setDuration,
})(SubscriptionPlan);
