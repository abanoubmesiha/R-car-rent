import React from 'react'
import {
    Form,
    Select,
    InputNumber,
    Input,
  } from 'antd';
import {Constants} from '../ComponentsImporter'

const { Option } = Select;

class Basics extends React.Component {
    render() {
      const { getFieldDecorator } = this.props;
      const {styles}=Constants;

      return (
      <React.Fragment>
                <Form.Item style={styles.FormI} label="Code"  hasFeedback>
                  {getFieldDecorator('Code', {
                    rules: [{ required: true, message: 'Please input Code Number!' }],
                  })(<InputNumber placeholder="Type Code" style={styles.Input} min={0} max={999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Name"  hasFeedback>
                  {getFieldDecorator('Name', {
                    rules: [{ required: true, message: 'Please type Name!' }],
                  })(<Input placeholder="Type Name" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="ID Type" hasFeedback>
                  {getFieldDecorator('IDType', {
                    rules: [{ required: true, message: 'Please select Id Type!' }],
                  })(
                    <Select placeholder="Please select Id Type">
                      <Option value="it type 1">it type 1</Option>
                      <Option value="it type 2">it type 2</Option>
                      <Option value="it type 3">it type 3</Option>
                      <Option value="it type 4">it type 4</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item style={styles.FormI} label="ID Number" hasFeedback>
                  {getFieldDecorator('IDNum', {
                    rules: [{ required: true, message: 'Please type Id Number!' }],
                  })(<InputNumber placeholder="Type ID Number" style={styles.Input}  max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Phone" hasFeedback>
                  {getFieldDecorator('Phone', {
                    rules: [{ required: true, message: 'Please type Phone Number!' }],
                  })(<InputNumber placeholder="Type Phone" style={styles.Input} max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Mobile" hasFeedback>
                  {getFieldDecorator('Mobile', {
                    rules: [{ required: true, message: 'Please type Mobile Number!' }],
                  })(<InputNumber placeholder="Type Mobile" style={styles.Input} max={99999999999999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="E-mail" hasFeedback>
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ],
                  })(<Input placeholder="Type E-Mail" />)}
                </Form.Item>
      </React.Fragment>
        );
    }
  }
  
  export default Basics;