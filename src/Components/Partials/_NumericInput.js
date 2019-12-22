import React from 'react'
import { Input,Form} from 'antd';
import {Constants} from '../ComponentsImporter'

class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
    onBlur = () =>{
      this.props.setFieldsValue({
        Code: this.state.value,
        });
    }
  onChange = e => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        this.setState({ value });
      }
  };
  render() {
      const {styles}=Constants;
      const { getFieldDecorator,setFieldsValue } = this.props;
    return (
      <React.Fragment>
        <Form.Item style={styles.FormI} label="Code"  hasFeedback>
          {getFieldDecorator('Code', {
            rules: [{ required: true, message: 'Please input Code Number!' }],
          })(<Input onBlur={this.onBlur}
            value={this.state.value} 
            onChange={this.onChange}
            placeholder={this.props.placeholder} maxLength={25}/>)}
        </Form.Item>
      </React.Fragment>
    );
  }
}
export default NumericInput