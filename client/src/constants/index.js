import React from 'react';

import BackupIcon from '@material-ui/icons/Backup';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const columnsData = [
  {
    Header: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    Header: 'Storage Size',
    accessor: 'storage',
    sortable: true,
  },
  {
    Header: 'Duration',
    accessor: 'duration',
    sortable: true,
  },
  {
    Header: 'Paid in full',
    accessor: 'pif',
    sortable: true,
  },
  {
    Header: 'Ordered Date',
    accessor: 'date',
    sortable: true,
  },
  {
    Header: 'Action',
    accessor: 'actions',
    sortable: false,
    filterable: false,
  },
];

export const tabSlideData = [
  {
    icon: <BackupIcon />,
    label: 'Subscription Plan',
  },
  {
    icon: <AccountCircleIcon />,
    label: 'Personal Info',
  },
  {
    icon: <CreditCardIcon />,
    label: 'Payment',
  },
  {
    icon: <CheckCircleIcon />,
    label: 'Confirmation',
  },
];

export const storageRadioData = [
  {
    value: 3,
    label: 3,
    labelPlacement: 'end',
  },
  {
    value: 5,
    label: 5,
    labelPlacement: 'end',
  },
  {
    value: 10,
    label: 10,
    labelPlacement: 'end',
  },
  {
    value: 20,
    label: 20,
    labelPlacement: 'end',
  },
  {
    value: 30,
    label: 30,
    labelPlacement: 'end',
  },
  {
    value: 50,
    label: 50,
    labelPlacement: 'end',
  },
];

export const durationRadioData = [
  {
    value: 3,
    label: '3 months',
    labelPlacement: 'end',
  },
  {
    value: 6,
    label: '6 months',
    labelPlacement: 'end',
  },
  {
    value: 12,
    label: '12 months',
    labelPlacement: 'end',
  },
];

export const paymentRadioData = [
  {
    value: 'Yes',
    label: 'Yes',
    labelPlacement: 'end',
  },
  {
    value: 'No',
    label: 'No',
    labelPlacement: 'end',
  },
];
