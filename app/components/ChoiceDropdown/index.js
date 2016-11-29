import React from 'react';
import { Label } from 'reactstrap'
import Select from 'react-select';

import styles from './styles.css'

class ChoiceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: undefined
    }
  }

  render() {

    let options = this.props.answers.map((answer, index) => {
      return { value: index, label: answer }
    })

    let logChange = (val) => {
      this.setState({
        answer: val
      })
      this.props.onChange(val)
    }

    return (
      <Label className={styles.fullWidth}>
        {this.props.question}
        <Select
          className="form-field-name"
          name={"form-field-name"}
          value={this.state.answer || options[0]}
          clearable={false}
          options={options}
          onChange={logChange}
        />
      </Label>
    )
  }
}


export default ChoiceDropdown;
