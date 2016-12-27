/**
*
* Text
*
*/
import React  from 'react'
import { Input } from 'antd'
import styles  from './styles.css'

require("!style!css!antd/lib/input/style/index.css");

function Text(props) {

  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className={styles.text}>
      <div
        className={styles.textLabel}>
        {props.question}
      </div>
      <Input
        type="textarea"
        autosize
        onChange={() => {
          console.log("Got change");
        }}/>
    </div>
  );
}

export default Text;
