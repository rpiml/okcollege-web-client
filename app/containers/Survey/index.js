/*
 *
 * Survey
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSurvey from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FormComponent from 'components/FormComponent';
import styles from './styles.css';

export class Survey extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.survey}>
      <Helmet
        title="Survey"
        meta={[
          { name: 'description', content: 'Description of Survey' },
        ]}
      />
        <div className={styles.header}> OkCollege </div>
        <FormComponent />
      </div>
    );
  }
}

const mapStateToProps = selectSurvey();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
