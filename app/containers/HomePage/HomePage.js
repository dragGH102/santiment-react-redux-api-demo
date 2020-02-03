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
    const {
      slug, onChangeSlug, onSubmitForm
    } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>
              A minimal <i>React-Redux</i> boilerplate with all the best practices
            </p>
          </section>
          <section>
            <h2>Try me!</h2>
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
