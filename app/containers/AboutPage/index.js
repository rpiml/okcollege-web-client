import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './styles.css';
import messages from './messages';

const About = ({}) => (

  <div className={styles.surroundMessage}>
    <FormattedMessage {...messages.leftContent}/>
    
    <p>
      DISCLAIMER!
    </p>
  </div>
)

About.propTypes = {};

export default About;
