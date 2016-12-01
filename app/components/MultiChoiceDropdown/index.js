/**
*
* MultiChoiceDropdown
*
*/

import React from 'react';
<<<<<<< Updated upstream

import styles from './styles.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
=======
import { Label } from 'reactstrap'
import Select from 'react-select'
import VirtualizedSelect from 'react-virtualized-select'
>>>>>>> Stashed changes

import styles from './styles.css'

class DropdownChoice extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <DropdownItem
          className={styles.dropdownItem}
          onClick={() => {this.props.onChange()}}
        >
          {this.props.answer}
        </DropdownItem>
      </div>
    )
  }
}

<<<<<<< Updated upstream
class MultiChoiceDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
=======
const LARGE_LIST_SIZE = 5
>>>>>>> Stashed changes

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };this.props.answers
  }

<<<<<<< Updated upstream
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
=======
  render() {

    let options = this.props.answers.map((answer, index) => {
      return { value: index, label: answer }
    })
    let SelectComponent = this.props.answers.length < LARGE_LIST_SIZE
      ? Select
      : VirtualizedSelect

    let logChange = (val) => {
      this.setState({
        answers: val
      })
      this.props.onChange(val)
    }
>>>>>>> Stashed changes

  render() {
    return (
<<<<<<< Updated upstream
      <div className={styles.dropdown}>
        <div>{this.props.question}</div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret className={styles.dropdownContainer}>
            {this.props.answer || this.props.answers[0]}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.answers.map(answer => {
              return <DropdownChoice
                        key={answer}
                        answer={answer}
                        onChange={() => this.props.onChange(answer)}
                      />
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
=======
      <div>
        <Label className={styles.fullWidth}>
          {this.props.question}
        </Label>
        <SelectComponent
          className="form-field-name"
          name={"form-field-name"}
          value={this.state.answers}
          clearable={false}
          multi={true}
          options={options}
          onChange={logChange}
        />
      </div>
    )
>>>>>>> Stashed changes
  }
}

export default MultiChoiceDropdown;
