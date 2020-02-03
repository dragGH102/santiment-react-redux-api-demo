import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import { LOAD_REPOS } from '../../containers/App/constants';
import { Query } from 'redux-saga-requests-react';
import RepoListItem from '../../containers/RepoListItem';
import List from '../List';

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
    {({ data }) => <List items={data.devActivity} component={RepoListItem} />}
  </Query>)
};

ReposList.propTypes = {

};

export default ReposList;
