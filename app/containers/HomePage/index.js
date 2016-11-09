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
// import Button from 'react-button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col, Button } from 'reactstrap';
import ConnectionAnimation from 'components/ConnectionAnimation';
import styles from './styles.css';
import { Link } from 'react-router'


let getAnimationHeight = (props) => {
  return window.innerHeight - props.heights.header - props.heights.footer
  //return 200 // - Header.getHeight();
}

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.heights)
    return (
      <div id={styles.homepageContainer}>
        <ConnectionAnimation className={styles.headerBg} height={getAnimationHeight(this.props)} />
        <div className={styles.centerOnTop}>
          <div id={styles.welcome}>
            <h1> Welcome to <span className={styles.blue}>OkCollege</span>! </h1>
            <div className={styles.tagLine}>
              college discovery with machine learning
            </div>

            <div className={styles.buttonHolder}>
              <Link className={styles.buttonLink} to={`/survey`}>
                <Button color="primary" className={styles.button}>I'm a college student</Button>
              </Link>
              <Link className={styles.buttonLink} to="">
                <Button color="primary" className={styles.button}>I'm a high school student</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
