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

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.state = {
      options: [],
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


  render() {
    return (
      <div className={styles.dropdown}>

        <div>{this.props.question}</div>

        <Select
          combobox={!this.state.multiple}
          tags={this.state.multiple}
          style={{ width: '100%'}}
          onChange={this.props.onChange}
          onSearch={this.filter}
          tokenSeparators={[',']}
          filterOption={false}
        >
          {this.state.options}
        </Select>
      </div>
    );
  }

};

export default Search;
