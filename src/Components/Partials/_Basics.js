import React from 'react'
import {
    Form,
    Select,
    InputNumber,
    Input,Icon
  } from 'antd';
import {Constants,NumericInput} from '../ComponentsImporter'

const { Option } = Select;

class Basics extends React.Component {
    render() {
      const { getFieldDecorator,setFieldsValue } = this.props;
      const {styles}=Constants;

      return (
      <React.Fragment>
                <NumericInput id={'TenForm_Code'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Code Number'} label={'Code'} labelTitle={'code'}/>
                <Form.Item style={styles.FormI} label="Name"  hasFeedback>
                  {getFieldDecorator('Name', {
                    rules: [{ required: true, message: 'Please type Name!' }],
                  })(<Input prefix={<Icon type="user" />}  placeholder="Type Name" />)}
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
                <NumericInput id={'TenForm_IDNumber'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type ID Number'} label={'ID Number'} labelTitle={'IDNumber'} />
                <NumericInput prefix={<Icon type="phone" />} id={'TenForm_Phone'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Phone'} label={'Phone'} labelTitle={'Phone'} />
                <NumericInput prefix={<Icon type="mobile" />} id={'TenForm_Mobile'} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} placeholder={'Type Mobile'} label={'Mobile'} labelTitle={'Mobile'} />
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
                  })(<Input placeholder="Type E-Mail" prefix={<Icon type="mail" />} />)}
                </Form.Item>
      </React.Fragment>
        );
    }
  }
  
  export default Basics;