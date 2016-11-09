/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, {PropTypes} from 'react';
import Measure from 'react-measure';

import styles from './styles.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    headerHeight: PropTypes.number,
    footerHeight: PropTypes.number,
  };
  constructor(props) {
    super(props)
    this.state = {
      headerHeight: -1,
      footerHeight: -1
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Measure onMeasure={(dimensions) => this.setState({headerHeight: dimensions.height})}>
          <Header/>
        </Measure>
        {React.Children.map(this.props.children,
          (child) => React.cloneElement(child, {
            heights: {
              header: this.state.headerHeight,
              footer: this.state.footerHeight
            }
          })
        )}
        <Measure onMeasure={(dimensions) => this.setState({footerHeight: dimensions.height})}>
          <Footer/>
        </Measure>
      </div>
    );
  }
}
