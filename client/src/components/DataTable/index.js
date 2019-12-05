import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import withStyles from '@material-ui/core/styles/withStyles';

import { customFilterMethod } from '../../util';

import dataTableStyles from './dataTableStyles';

const DataTable = ({ classes, data, columnsData, loading }) => {
  const renderCustomFilter = (filter, onChange) => (
    <input
      type='text'
      placeholder='Search'
      onChange={(e) => onChange(e.target.value)}
      value={filter ? filter.value : ''}
      className={classes.tableSearchInput}
    />
  );

  const renderColumnsData = columnsData.map((col) => {
    return {
      Header: col.Header,
      accessor: col.accessor,
      sortable: col.sortable,
      filterable: col.filterable,
      Filter: ({ filter, onChange }) => renderCustomFilter(filter, onChange),
    };
  });

  return (
    <ReactTable
      className='-striped -highlight'
      columns={renderColumnsData}
      data={data}
      showPaginationBottom={true}
      defaultPageSize={10}
      headerStyle={classes.tableHeader}
      filterable
      multiSort={true}
      defaultFilterMethod={(filter, row, column) =>
        customFilterMethod(filter, row, column)
      }
      loading={loading}
    />
  );
};

const mapStateToProps = ({ loadingReducers }) => ({
  loading: loadingReducers.loading,
});

export default withStyles(dataTableStyles)(connect(mapStateToProps)(DataTable));
