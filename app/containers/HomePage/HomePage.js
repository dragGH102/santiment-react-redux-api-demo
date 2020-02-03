/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { slug, onSubmitForm } = this.props;
    if (slug && slug.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const { slug, onChangeSlug, onSubmitForm } = this.props;
    const title = 'A sample react-redux-graphql-sagas app';

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="{title}" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>{title}</h2>
          </section>
          <section>
            <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                Enter coin slug and press ENTER :&nbsp;
                <input
                  id="slug"
                  type="text"
                  placeholder="flexdinesh"
                  value={slug}
                  onChange={onChangeSlug}
                />
              </label>
            </form>
            <ReposList />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  slug: PropTypes.string,
  onChangeSlug: PropTypes.func
};
