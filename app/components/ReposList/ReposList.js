import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import { LOAD_REPOS } from '../../containers/App/constants';
import { Query } from 'redux-saga-requests-react';

const ErrorComponent = () => (
  <ListItem item={'Something went wrong, please try again!'} />
);

const ReposList = () => {
  return (<Query
    type={LOAD_REPOS}
    errorComponent={ErrorComponent}
    loadingComponent={LoadingIndicator}
    noDataMessage={<p>There is no entity currently.</p>}
  >
    {({ data }) => {return JSON.stringify(data)}}
  </Query>)
};

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any
};

export default ReposList;
