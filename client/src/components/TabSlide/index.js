import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import tabSlideStyles from './tabSlideStyles';

const setTabProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabSlide = ({ classes, children, tabData, tabValue }) => {
  const renderTabs = tabData.map((tab, index) => {
    return (
      <Tab
        key={tab.label}
        icon={tab.icon}
        label={tab.label}
        {...setTabProps(index)}
      />
    );
  });

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          centered
          value={tabValue}
          aria-label='simple tabs'
          variant='fullWidth'
        >
          {renderTabs}
        </Tabs>
      </AppBar>
      {children}
    </div>
  );
};

export default withStyles(tabSlideStyles)(TabSlide);
