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
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './styles.css';
import { answerQuestion } from './actions';

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
        <Container className={styles.questions}>
          <Row >
            <Col xs={{ size: 2}}>
            </Col>
            <Col xs={{ size: 8, offset: 2}}>
              <FormComponent
                currentPage={this.props.currentPage}
                survey={this.props.survey}
                onQuestionAnswer={(questionId, answer) => {
                  this.props.dispatch(answerQuestion(questionId, answer))
                }}
                />
              <Button className={styles.submitButton} size="lg" color="primary">Submit</Button>
            </Col>
          </Row>
        </Container>
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
