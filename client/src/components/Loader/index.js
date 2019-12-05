import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import loaderStyles from './loaderStyles';

const Loader = ({ classes }) => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.loaderWrapper}>
        <CircularProgress
          variant='indeterminate'
          thickness={3.6}
          size={80}
          color='secondary'
        />
      </div>
    </div>
  );
};

export default withStyles(loaderStyles)(Loader);
