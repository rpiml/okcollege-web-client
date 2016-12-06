/**
*
* Search
*
*/

import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
import Fuse from 'fuse.js';

import styles from './styles.css';
require("!style!css!antd/lib/select/style/index.css");

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);

    let options = []
    for (var i=0; i<this.props.answers.length; ++i) {
      if (i > 10)
        break;
      options.push(<Option key={this.props.answers[i]}>{this.props.answers[i]}</Option>)
    }

    this.state = {
      options: options,
      answer: this.props.answer,
      multiple:this.props.type == "multi-choice"
    };
  }

  filter(inputValue) {
    let settings = {
      caseSensitive: false,
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 20,
      maxPatternLength: 32,
      keys: []
    };
    let fuse = new Fuse(this.props.answers, settings);
    let results = fuse.search(inputValue).map(index => {
        return <Option key={this.props.answers[index]}>{this.props.answers[index]}</Option>;
    })

    if (results.length > 10) results.length = 10;

    this.setState({options:results});
  }

  logChanges(func) {
    if (this.state.multiple)
      return {onSelect: func}
    else
      return {onChange: func}
  }

  render() {
    return (
      <div className={styles.search}>

        <div>{this.props.question}</div>

        <Select
          size={'large'}
          combobox={!this.state.multiple}
          multiple={this.state.multiple}
          style={{ width: '100%'}}
          onChange={(e) => {
            this.setState({answer: e})
          }}
          onSelect={(e) => this.props.onChange(e)}
          value={this.state.answer}
          onSearch={this.filter}
          tokenSeparators={[',']}
          filterOption={false}
          placeholder={'start typing...'}
        >
          {this.state.options}
        </Select>
      </div>
    );
  }

};

export default Search;
