/*
 *
 * ResultsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectResultsPage from './selectors';
import styles from './styles.css';

export class ResultsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.resultsPage}>
      <Helmet
        title="ResultsPage"
        meta={[
          { name: 'description', content: 'Description of ResultsPage' },
        ]}
      />
      </div>
    );
  }
}

const mapStateToProps = selectResultsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
