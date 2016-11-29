/**
 *
 * MultiChoiceDropdown
 *
 */

import React from 'react';
import { Label } from 'reactstrap'

//import styles from './styles.css';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Select from 'react-select'
import styles from './styles.css'




class MultiChoiceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    }
  }

  render() {

    let options = this.props.answers.map((answer, index) => {
      return { value: index, label: answer }
    })

    let logChange = (val) => {
      this.setState({
        answers: val
      })
      this.props.onChange(val)
    }

    return (
      <Label className={styles.fullWidth}>
        {this.props.question}
        <Select
          className="form-field-name"
          name={"form-field-name"}
          value={this.state.answers}
          clearable={false}
          multi={true}
          options={options}
          onChange={logChange}
        />
      </Label>
    )
  }
}

//class DropdownChoice extends React.Component { // eslint-disable-line react/prefer-stateless-function
//render() {
//return (
//<div>
//<DropdownItem
//className={styles.dropdownItem}
//onClick={() => {this.props.onChange()}}
//>
//{this.props.answer}
//</DropdownItem>
//</div>
//)
//}
//}

//class MultiChoiceDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function

//constructor(props) {
//super(props);

//this.toggle = this.toggle.bind(this);
//this.state = {
//dropdownOpen: false
//};this.props.answers
//}

//toggle() {
//this.setState({
//dropdownOpen: !this.state.dropdownOpen
//});
//}

//render() {
//return (
//<div className={styles.dropdown}>
//<div>{this.props.question}</div>
//<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//<DropdownToggle caret className={styles.dropdownContainer}>
//{this.props.answer || this.props.answers[0]}
//</DropdownToggle>
//<DropdownMenu>
//{this.props.answers.map(answer => {
//return <DropdownChoice
//key={answer}
//answer={answer}
//onChange={() => this.props.onChange(answer)}
///>
//})}
//</DropdownMenu>
//</Dropdown>
//</div>
//);
//}
//}

export default MultiChoiceDropdown;
