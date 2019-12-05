import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';

import Loader from '../../components/Loader';

import appContainerStyles from './appContainerStyles';

const AppContainer = ({ classes, children, loading }) => {
  return (
    <Container className={classes.appContainer} maxWidth={false}>
      {loading && <Loader />}
      {children}
    </Container>
  );
};

AppContainer.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ loadingReducers }) => ({
  loading: loadingReducers.loading,
});

export default withStyles(appContainerStyles)(
  connect(mapStateToProps)(AppContainer),
);
