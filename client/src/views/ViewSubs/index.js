import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';

import { getSubsAll, deleteSubById } from '../../actions';

import { columnsData } from '../../constants';

import PageCard from '../../components/PageCard';
import DataTable from '../../components/DataTable';
import ModalPopup from '../../components/ModalPopup';

class ViewSubs extends PureComponent {
  state = {
    isModalOpen: false,
  };
  selectedSubId = '';

  componentDidMount() {
    this.props.getSubsAll();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleteSub !== this.props.deleteSub) {
      this.props.getSubsAll();
    }
  }

  handleRedirectToUpdate = (subId) => {
    this.props.history.push(`/update-subscription/${subId}`);
  };

  openModal = (subId) => {
    this.setState({
      isModalOpen: true,
    });
    this.selectedSubId = subId;
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  onDeleteSub = (subId) => {
    this.props.deleteSubById(subId);
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const tableData = (this.props.subsAll || []).map((sub) => {
      return {
        id: sub._id,
        name: `${sub.userInfo.firstName} ${sub.userInfo.lastName}`,
        storage: `${sub.subscription.cloudGB} GB`,
        duration: `${sub.subscription.duration} months`,
        pif: sub.subscription.upfrontPayment,
        date: moment(sub.orderedAt).format('L'),
        actions: (
          <div key={sub._id}>
            <Button
              style={{ width: '5px' }}
              onClick={() => this.handleRedirectToUpdate(sub._id)}
            >
              <Edit color='secondary' fontSize='small' />
            </Button>
            <Button onClick={() => this.openModal(sub._id)}>
              <DeleteForever color='error' fontSize='small' />
            </Button>
          </div>
        ),
      };
    });

    return (
      <Grid container display='flex' justify='center' alignItems='center'>
        <Grid item xs={12}>
          <ModalPopup
            isOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            actionData={this.selectedSubId}
            onActionClick={this.onDeleteSub}
            title='Delete subscription order?'
            subTitle='Subscription cannot be retrieved once deleted'
          />
          <Grid container justify='center' alignItems='center'>
            <Grid item xs={12} lg={10}>
              <PageCard
                buttonText='Order new'
                title='Subscriptions List'
                href='/create-subscription'
              >
                <DataTable data={tableData} columnsData={columnsData} />
              </PageCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ loadingReducers, subscriptionReducers }) => ({
  loading: loadingReducers.loading,
  subsAll: subscriptionReducers.subsList,
  deleteSub: subscriptionReducers.deleteSub,
});

export default connect(mapStateToProps, { getSubsAll, deleteSubById })(
  ViewSubs,
);
