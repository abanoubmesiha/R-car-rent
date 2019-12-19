import React from 'react'
import {
    Form,
    Input,
  } from 'antd';

class Basics extends React.Component {
    render() {
      const { getFieldDecorator } = this.props;
      const styles = {
        FormI:{marginBottom: 0},
      }
      return (
      <React.Fragment>
                <Form.Item style={styles.FormI} label="Country">
                  {getFieldDecorator('Country', {
                    rules: [{ required: true, message: 'Please type Country!' }],
                  })(<Input placeholder="Type Country" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="City">
                  {getFieldDecorator('City', {
                    rules: [{ required: true, message: 'Please type City!' }],
                  })(<Input placeholder="Type City" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Region">
                  {getFieldDecorator('Region', {})(<Input placeholder="Type Region" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Postal Code">
                  {getFieldDecorator('PostalCode', {})(<Input placeholder="Type Postal Code" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Adress Line 1">
                  {getFieldDecorator('AdressLine1', {})(<Input placeholder="Type Adress Line 1" />)}
                </Form.Item>
                <Form.Item style={styles.FormI} label="Adress Line 2">
                  {getFieldDecorator('AdressLine2', {})(<Input placeholder="Type Adress Line 2" />)}
                </Form.Item>
                
      </React.Fragment>
        );
    }
  }
  
  export default Basics;