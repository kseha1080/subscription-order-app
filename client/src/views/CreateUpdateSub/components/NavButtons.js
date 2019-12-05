import React from 'react';
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import { setTabValue } from '../../../actions';

import NavButtonStyles from './NavButtonStyles';

const NavButtons = ({
  classes,
  tabValue,
  setTabValue,
  nextDisableStatus,
  onClickOrder,
  updateSubId,
}) => {
  const onClickBack = () => {
    tabValue = tabValue - 1;
    setTabValue(tabValue);
  };

  const onClickNext = () => {
    tabValue = tabValue + 1;
    setTabValue(tabValue);
  };

  const isBackDisabled = tabValue === 0;
  const onBackClick = tabValue > 0 ? onClickBack : null;

  const onNextclick = tabValue < 3 ? onClickNext : onClickOrder;
  const renderNextButtonText =
    tabValue < 3 ? 'Next' : updateSubId ? 'Update' : 'Order';

  return (
    <div className={classes.navButtonWrapper}>
      <Button
        onClick={onBackClick}
        className={classes.root}
        size='large'
        variant='outlined'
        disabled={isBackDisabled}
      >
        Back
      </Button>
      <Button
        className={classes.root}
        size='large'
        variant='contained'
        color='primary'
        onClick={onNextclick}
        disabled={!nextDisableStatus}
      >
        {renderNextButtonText}
      </Button>
    </div>
  );
};

const mapStateToProps = ({ tabReducers }) => ({
  tabValue: tabReducers.tabValue,
});

export default connect(mapStateToProps, { setTabValue })(
  withStyles(NavButtonStyles)(NavButtons),
);
