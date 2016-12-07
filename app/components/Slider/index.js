/**
*
* Slider
*
*/

import { Slider as Slider_antd } from 'antd'
import React  from 'react'
import { FormattedMessage } from 'react-intl'
import messages  from './messages'
import styles  from './styles.css'

require("!style!css!antd/lib/slider/style/index.css");
require("!style!css!antd/lib/tooltip/style/index.css");


class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if(this.props.answer === undefined){
      this.props.onChange((this.props.range[0] + this.props.range[1])/2);
    }
  }

  removeTrailingZeroes(v){
    if (v.toString().split('').filter(c => c == '0').length > 8){
      return parseFloat(v.toString().slice(0, v.toString().length - 2));
    }else{
      return v;
    }
  }

  render() {
    let marks = {};
    marks[this.props.range[0]] = this.props.range[0].toString();
    marks[this.props.range[1]] = this.props.range[1].toString();

    return (
      <div className={styles.slider}>
        <div className={styles.questionText}>{this.props.question}</div>
        <Slider_antd
            marks={marks}
            max={this.props.range[1]}
            min={this.props.range[0]}
            step={this.props.step || 1}
            formatLabel={this.removeTrailingZeroes}
            onAfterChange={this.props.onChange}
            />
      </div>
    );
  }
}

Slider.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

export default Slider;
