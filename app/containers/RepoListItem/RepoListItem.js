/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import Moment from 'react-moment';
import './style.scss';

export default class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    const { activity, datetime } = item;
    // Put together the content of the repository
    const content = (
      <div className="repo-list-item">
        <a className="repo-list-item__repo-link">
          {activity}
        </a>
        <a className="repo-list-item__issue-link">
          <Moment>{datetime}</Moment>
        </a>
      </div>
    );
    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${datetime}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};
