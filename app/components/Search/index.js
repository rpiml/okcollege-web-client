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

const optionLimit = 4

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);

    let options = []
    for (var i=0; i<this.props.answers.length; ++i) {
      if (i > optionLimit)
        break;
      options.push(<Option key={this.props.answers[i]}>{this.props.answers[i]}</Option>)
    }

    this.state = {
      defaultOptions: options,
      options: options,
      answer: this.props.answer,
      multiple:this.props.type == "multi-choice"
    };
  }

  filter(inputValue) {
    let results
    if (!inputValue) {
      results = this.state.defaultOptions
    } else {


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
      results = fuse.search(inputValue).map(index => {
        return <Option key={this.props.answers[index]}>{this.props.answers[index]}</Option>;
      })

      if (results.length > optionLimit) results.length = optionLimit;

    }
    this.setState({options:results});
  }

  logChanges(func) {
    if (this.state.multiple)
      return {onSelect: func}
    else
      return {onChange: func}
  }

  render() {
    let changeHandlers = (this.state.multiple)
      ? {
        onChange: (e) => {
          this.setState({answer: e})
          this.props.onChange(e)
        }
      }
      : {
        onChange: (e) => this.setState({answer: e}),
        onSelect: (e) => this.props.onChange(e)
      }

    return (
      <div className={styles.search}>

        <div>{this.props.question}</div>

        <Select
          {...changeHandlers}
          size={'large'}
          combobox={!this.state.multiple}
          multiple={this.state.multiple}
          style={{ width: '100%'}}
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
