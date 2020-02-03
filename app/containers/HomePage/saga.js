/**
 * Global saga
 */

import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-graphql';

/**
 * Root saga manages graphql watcher lifecycle
 */
export default function* rootSaga(action) {
  yield createRequestInstance({
    driver: createDriver({ url: process.env.SANTIMENT_GRAPHQL_URL }),
  });
  yield watchRequests();
}
