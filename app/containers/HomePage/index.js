/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'react-button';
import messages from './messages';
import Footer from 'components/Footer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ConnectionAnimation from 'components/ConnectionAnimation';
import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <ConnectionAnimation className={styles.headerBg} height={200} />
        <div className={styles.fgShift}>
          <Row center="xs">
            <Col xs={12} md={12} lg={12}>
              <div className={styles.logo}> OkCollege </div>
              <div className={styles.tagLine}>
                college discovery with machine learning
              </div>
            </Col>
            <Row middle="xs" className={styles.content}>
              <Col xsOffset={1} xs={6}>
                <h2> Welcome to OkCollege! </h2>
                <FormattedMessage {...messages.leftContent}/>
              </Col>
              <Col xsOffset={1} xs={4}>
                <Button theme={Button.themes.primary} className={styles.button}>I'm a college student</Button>
                <br/>
                <Button theme={Button.themes.primary} className={styles.button}>I'm a high school student</Button>
              </Col>
            </Row>
          </Row>
        </div>
        <Footer/>
      </div>
    );
  }
}
