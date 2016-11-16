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
import {Row, Col,Container} from 'reactstrap';

export class ResultsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { hasResults, rankings } = this.props;

    const rankingElements = rankings.map(college => {
      return (
        <Row className={styles.rankingElement}>
          <Col xs={{size:2}} className={styles.collegeRanking}>
            <div> {college.ranking} </div>
          </Col>
          <Col xs={{size:10}} className={styles.collegeName}>
            {college.name}
          </Col>
        </Row>
      );
    });

    const loadingElement = (
      <div>
      Loading
      </div>
    );

    return (
      <div className={styles.resultsPage}>
      <Helmet
        title="ResultsPage"
        meta={[
          { name: 'description', content: 'Description of ResultsPage' },
        ]}
      />
      <Container>
        { hasResults ? rankingElements : loadingElement }
      </Container>
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
