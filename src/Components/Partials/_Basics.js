import React from 'react'
import {
    Typography,
    Form,
    Layout,
    Breadcrumb,
    Select,
    InputNumber,
    NumericInput,
    Input,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
  } from 'antd';

const { Content } = Layout;
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
  
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    render() {
      const { getFieldDecorator } = this.props;
    //   const formItemLayout = {
    //     labelCol: {xs: {span: 3},sm: {span: 12},md: {span: 8}},
    //     wrapperCol: {xs: {span: 3},sm: {span: 12},md: {span: 16}},
    //     labelAlign: 'left',
    //   };
      const styles = {
        inputN:{ width: '100%' },
        FormI:{marginBottom: 0},
      }
      return (
      <React.Fragment>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={12}>
                <Form.Item style={styles.FormI} label="Code">
                  {getFieldDecorator('Code', {
                    rules: [{ required: true, message: 'Please input Code!' }],
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
              </Col>
            </Row>
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={12}>
                
              </Col>
            </Row>
      </React.Fragment>
        );
    }
  }
  
//   const Basics = Form.create({ name: 'validate_other' })(Demo);
  export default Basics;