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
import messages from './messages';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PageHeader from 'components/PageHeader/';
import PageHero from 'components/PageHero';
import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <PageHeader />
        <Grid>
          <Row>
            <Col xs={1}>
              {"Yoo1"}
            </Col>
            <Col xs={1}>
              {"Yooo"}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
