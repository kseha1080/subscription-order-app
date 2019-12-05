import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ValidatorForm } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import PageCard from '../../components/PageCard';
import TabSlide from '../../components/TabSlide';
import TabPanel from '../../components/TabSlide/components/TabPanel';
import SubscriptionPlan from './components/SubscriptionPlan';
import PersonalInfo from './components/PersonalInfo';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';

import {
  getSubsAll,
  setStorage,
  setDuration,
  setPayment,
  setUserEmail,
  setFirstName,
  setLastName,
  setAddress,
  setCardInfo,
} from '../../actions';

import { tabSlideData } from '../../constants';

import createSubStyles from './createSubStyles';

class CreateUpdateSub extends PureComponent {
  constructor(props) {
    super(props);
    this.updateSubId = '';
  }

  componentDidMount() {
    const { path, params } = this.props.match;
    if (path === '/update-subscription/:id') {
      this.props.getSubsAll(params.id);
      this.updateSubId = params.id;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.subById !== this.props.subById) {
      const { subscription, userInfo, creditCard } = this.props.subById;
      this.props.setStorage(subscription.cloudGB);
      this.props.setDuration(subscription.duration);
      this.props.setPayment(subscription.upfrontPayment);
      this.props.setUserEmail(userInfo.userEmail);
      this.props.setFirstName(userInfo.firstName);
      this.props.setLastName(userInfo.lastName);
      this.props.setAddress(userInfo.address);
      this.props.setCardInfo(creditCard);
    }
  }

  render() {
    const { classes, tabValue, history } = this.props;
    const pageCardTitle = this.updateSubId
      ? 'Update Subscription'
      : 'Order Subscription';

    return (
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} lg={10}>
          <PageCard title={pageCardTitle} href='/' buttonText='Home'>
            <ValidatorForm>
              <TabSlide tabData={tabSlideData} tabValue={tabValue}>
                <TabPanel className={classes.root} value={tabValue} index={0}>
                  <SubscriptionPlan />
                </TabPanel>
                <TabPanel className={classes.root} value={tabValue} index={1}>
                  <PersonalInfo />
                </TabPanel>
                <TabPanel className={classes.root} value={tabValue} index={2}>
                  <Payment />
                </TabPanel>
                <TabPanel className={classes.root} value={tabValue} index={3}>
                  <Confirmation
                    onRedirect={history.push}
                    updateSubId={this.updateSubId}
                  />
                </TabPanel>
              </TabSlide>
            </ValidatorForm>
          </PageCard>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ tabReducers, subscriptionReducers }) => ({
  tabValue: tabReducers.tabValue,
  subById: subscriptionReducers.subById,
});

export default connect(mapStateToProps, {
  getSubsAll,
  setStorage,
  setDuration,
  setPayment,
  setUserEmail,
  setFirstName,
  setLastName,
  setAddress,
  setCardInfo,
})(withStyles(createSubStyles)(CreateUpdateSub));
