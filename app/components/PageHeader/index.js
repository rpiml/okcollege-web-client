/**
*
* PageHeader
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class PageHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.pageHeader}>
        <span> {"Test"} </span>
      </div>
    );
  }
}

export default PageHeader;
