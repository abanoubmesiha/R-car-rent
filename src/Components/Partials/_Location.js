import React from 'react'
import {
    Form,
    Select,
    InputNumber,
    Input,
  } from 'antd';

const { Option } = Select;

class Basics extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props;
      const styles = {
        inputN:{ width: '100%' },
        FormI:{marginBottom: 0},
      }
      return (
      <React.Fragment>
                <Form.Item style={styles.FormI} label="Code">
                  {getFieldDecorator('Code', {
                    rules: [{ required: true, message: 'Please input Code Number!' }],
                  })(<InputNumber placeholder="Type Code" style={styles.inputN} min={0} max={999}/>)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Employee Name">
                  {getFieldDecorator('EmpName', {
                    rules: [{ required: true, message: 'Please type employee name!' }],
                  })(<Input placeholder="Type Employee Name" />)}
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
                <Form.Item style={styles.FormI} label="ID Number">
                  {getFieldDecorator('IDNum', {
                    rules: [{ required: true, message: 'Please type Id Number!' }],
                  })(<InputNumber placeholder="Type ID Number" style={styles.inputN}  max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Phone">
                  {getFieldDecorator('Phone', {
                    rules: [{ required: true, message: 'Please type Phone Number!' }],
                  })(<InputNumber placeholder="Type Phone" style={styles.inputN} max={99999999999999} />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Mobile">
                  {getFieldDecorator('Mobile', {
                    rules: [{ required: true, message: 'Please type Mobile Number!' }],
                  })(<InputNumber placeholder="Type Mobile" style={styles.inputN} max={99999999999999}/>)}
                </Form.Item>
      </React.Fragment>
        );
    }
  }
  
  export default Basics;